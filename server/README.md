# Larica Backend (scaffold)

Scaffold mínimo de backend para o projeto — Express + TypeScript + Prisma (Postgres).

Pré-requisitos
- Node.js 18+
- Postgres (local ou via Docker)

Instalação rápida (local):

1. Copie `.env.example` para `.env` e ajuste `DATABASE_URL` e `JWT_SECRET`.

2. Rodar Postgres com Docker (exemplo):

```bash
docker run --name larica-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=larica_dev -p 5432:5432 -d postgres:15
```

3. Instalar dependências e gerar Prisma Client:

```bash
cd server
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Endpoints principais
- `POST /api/auth/register` — { email, password }
- `POST /api/auth/login` — { email, password } -> { token }
- `GET /api/meals` — Authorization: Bearer <token>
- `POST /api/meals` — Authorization: Bearer <token>
- `POST /api/migrate` — Authorization: Bearer <token> (body: snapshot do localStorage)

Migração do client
Use a rota `/api/migrate` para enviar o snapshot do `localStorage` (meals, weights, profile, mealPlans, messages). Veja o snippet no README do projeto principal.
