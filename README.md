# TokenGuard

## Task received at 22 Monday at 18:05. Request to extend period of the work for 2 working days till the Wednesday 11 AM.

## Initial installation
(Or just wait for the Docker version because you deserve it till Wednesday)

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
In the front-end folder run "npm run dev"

5) In the db create tables with the commands from the init.sql

## Technology description
For the front-end used: SvelteKit, Tailwind, TypeScript
For the back-end used: NodeJS, PostgreSQL, TypeScript
Wrapped in the docker

## Personal challenges
3 days on the studying:
NodeJS, NestJS, NextJS, SvelteKit.

Another 3 days on the planing and implementation.
One of the hardest challenges I had for a very long time. I gave my best, suffered and all of that to not have to myself any questions.
If the life giving you opportunity you take it.

App is made such way to utilize the team's technologies even if they require additional research, even if it means difficult decissions, 
or take more time because of the research.
Docker implemented specifically to use PostgreSQL. 

## Why NodeJS and not NestJS/NextJS?
Since we talked about these technologies in the sense of the possible migration to them in the future I picked
NodeJS as the focus. I understand why alternatives can be attractive for the development considering importance of the adequate architecture and what they offer.

## .env file in the repository?
Yes, this is made on purpose. So you can simply run docker compose up. At the end of the day we want to make it comfortable.
In production I don't do that. Don't worry.
