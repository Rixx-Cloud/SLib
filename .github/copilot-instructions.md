# Copilot Instructions for SLib (Next.js App)

## Project Architecture
- **Framework:** Next.js App Router (TypeScript)
- **Main Folders:**
  - `src/app/` — All pages, layouts, and client/server components
  - `src/app/components/` — Shared React components (client/server)
  - `prisma/` — Prisma schema, migrations, and seed scripts
  - `lib/` — Utility modules (e.g., database connection)
  - `public/` — Static assets

## Data & Auth
- **Database:** Prisma ORM, schema in `prisma/schema.prisma`
- **User Roles:** Enum `Role` in Prisma: `ADMIN`, `TEACHER`, `STUDENT`
- **Seeding:** Use `prisma/seed.ts` to add initial users (admin, teacher, student)
- **Auth:** NextAuth.js, handler in `src/app/api/auth/[...nextauth]/route.ts`
  - Export handler as `{ handler as GET, handler as POST }` for App Router compatibility
  - Only use NextAuth hooks (`useSession`) in client components (`'use client'` at top)

## Component Patterns
- **Client Components:** Must start with `'use client'` if using React hooks or NextAuth
- **Server Components:** Default unless `'use client'` is present
- **Do not import client components into server components**
- **Header, NotificationBell, LoginForm:** All are client components and must be imported only in other client components or pages/layouts with `'use client'`

## Developer Workflows
- **Dev Server:** `npm run dev` (or `yarn dev`)
- **Prisma Migrate:** `npx prisma migrate dev --name <desc>`
- **Prisma Seed:** `npx ts-node prisma/seed.ts`
- **Prisma Studio:** `npx prisma studio` for DB inspection

## Error Handling & Debugging
- **Common Error:** `React Context is unavailable in Server Components` — Fix by ensuring hooks/components are only used in client components
- **NextAuth 404/API errors:** Ensure handler is exported correctly and endpoint path is `src/app/api/auth/[...nextauth]/route.ts`
- **Client Fetch Error (NextAuth):** Usually caused by invalid handler export or non-JSON response

## Integration Points
- **NextAuth:** Credentials provider, session callback populates `user.role` for role-based routing
- **Prisma:** Used for all DB access, connection in `lib/db.ts`
- **Role-based Routing:** After login, redirect user based on `session.user.role` (see `LoginForm.tsx`)

## Conventions & Patterns
- **Enum for roles:** Use Prisma enum `Role` for user type
- **Seed script:** Always hash passwords before seeding
- **Client/server separation:** Strictly enforced for React hooks and NextAuth usage

## Example: Role-based Redirect (LoginForm)
```tsx
if (session?.user?.role === "ADMIN") {
  router.push("/admin")
} else {
  router.push("/profile")
}
```

## Key Files
- `src/app/api/auth/[...nextauth]/route.ts` — NextAuth handler
- `src/app/components/auth/LoginForm.tsx` — Login logic and redirect
- `prisma/schema.prisma` — DB schema and enums
- `prisma/seed.ts` — Initial user seeding
- `lib/db.ts` — Prisma client connection

---
_If any conventions or workflows are unclear, please provide feedback to improve these instructions._
