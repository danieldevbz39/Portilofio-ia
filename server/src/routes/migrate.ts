import { Router } from 'express';
import { prisma } from '../prisma';
import { authMiddleware, AuthedRequest } from '../middleware/auth';

const router = Router();

router.use(authMiddleware);

router.post('/', async (req: AuthedRequest, res) => {
  const userId = req.user!.id;
  const { meals = [], weights = [], profile = null, mealPlans = [], messages = [] } = req.body;
  try {
    await prisma.$transaction(async (tx) => {
      if (profile) {
        await tx.profile.upsert({
          where: { userId },
          create: {
            userId,
            displayName: profile.displayName ?? null,
            birthDate: profile.birthDate ? new Date(profile.birthDate) : null,
            sex: profile.sex ?? null,
            heightCm: profile.heightCm ?? null,
            activityLevel: profile.activityLevel ?? null
          },
          update: {
            displayName: profile.displayName ?? undefined,
            birthDate: profile.birthDate ? new Date(profile.birthDate) : undefined,
            sex: profile.sex ?? undefined,
            heightCm: profile.heightCm ?? undefined,
            activityLevel: profile.activityLevel ?? undefined
          }
        });
      }

      for (const m of meals || []) {
        await tx.meal.create({ data: {
          userId,
          date: m.date ? new Date(m.date) : new Date(),
          time: m.time ?? null,
          mealType: m.mealType ?? null,
          name: m.name ?? null,
          calories: m.calories ?? null,
          macros: m.macros ?? null,
          metadata: m.metadata ?? null
        }});
      }

      for (const w of weights || []) {
        await tx.weight.create({ data: {
          userId,
          recordedAt: w.recordedAt ? new Date(w.recordedAt) : new Date(),
          weightKg: w.weightKg ?? 0,
          note: w.note ?? null
        }});
      }

      for (const p of mealPlans || []) {
        await tx.mealPlan.upsert({ where: { slug: p.slug }, create: { slug: p.slug ?? '', title: p.title ?? '', data: p.data ?? null }, update: { title: p.title ?? undefined, data: p.data ?? undefined } });
      }

      for (const msg of messages || []) {
        await tx.message.create({ data: { kind: msg.kind ?? 'motivational', level: msg.level ?? null, text: msg.text ?? '' } });
      }
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('migrate error', err);
    res.status(500).json({ error: 'server_error' });
  }
});

export default router;
