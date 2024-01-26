# TokenGuard

## Task received at 22 Monday at 18:05 with the 3 days deadline. Request to extend period of the work for 2 working days till the Wednesday 11 AM.

## Initial installation
(Or just wait for the Docker version because you deserve good things in your life)

1) Create 2 .env files in front-end and back-end folder
2) In back-end:
PGUSER=postgres
PGHOST=127.0.0.1
PGPASSWORD="root"
PGDATABASE=tokenguard
PGPORT=5432
3) In the back-end folder run "npx tsx src/index.ts"

In front-end:
4) VITE_APP_MY_BACKEND: "http://localhost:8000/api"
5) In the front-end folder run "npm run dev"

6) In the db create tables with the commands from the init.sql

## Technology description
For the front-end used: SvelteKit, Tailwind, TypeScript
For the back-end used: NodeJS, PostgreSQL, TypeScript
Wrapped in the docker
