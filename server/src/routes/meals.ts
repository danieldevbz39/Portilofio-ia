import { Router } from 'express';
import { prisma } from '../prisma';
import { authMiddleware, AuthedRequest } from '../middleware/auth';

const router = Router();

router.use(authMiddleware);

router.get('/', async (req: AuthedRequest, res) => {
  const userId = req.user!.id;
  const meals = await prisma.meal.findMany({ where: { userId }, orderBy: { date: 'desc' } });
  res.json(meals);
});

router.post('/', async (req: AuthedRequest, res) => {
  const userId = req.user!.id;
  const { date, time, mealType, name, calories, macros, metadata } = req.body;
  try {
    const meal = await prisma.meal.create({ data: { userId, date: new Date(date), time, mealType, name, calories: calories ?? null, macros, metadata } });
    res.status(201).json(meal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server_error' });
  }
});

router.delete('/:id', async (req: AuthedRequest, res) => {
  const userId = req.user!.id;
  const id = req.params.id;
  try {
    const existing = await prisma.meal.findUnique({ where: { id } });
    if (!existing || existing.userId !== userId) return res.status(404).json({ error: 'not_found' });
    await prisma.meal.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server_error' });
  }
});

export default router;
