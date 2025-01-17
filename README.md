# Airbnb

This is a starter template for building a SaaS application using **Next.js** with support for authentication, Stripe integration for payments, and a dashboard for logged-in users.

**Demo: [https://next-saas-start.vercel.app/](https://next-saas-start.vercel.app/)**

<details>
  <summary>Why did I make this?</summary>
  
  In 2020, I made a course called "React 2025" which showed how to build a SaaS application with Next.js, Stripe, and other tools.

Well, it's almost 2025 and React 19 has brought so many amazing new features I didn't predict! This repo is a demonstration of the latest React and Next.js patterns. These patterns can drastically simplify some common tasks in building your SaaS, like building forms, talking to your database, and more.

For example, React now has built in hooks like `useActionState` to handle inline form errors and pending states. React Server Actions can replace a lot of boilerplate code needed to call an API Route from the client-side. And finally, the React `use` hook combined with Next.js makes it incredibly easy to build a powerful `useUser()` hook.

We're able to fetch the user from our Postgres database in the root layout, but _not_ await the `Promise`. Instead, we forward the `Promise` to a React context provider, where we can "unwrap" it and awaited the streamed in data. This means we can have the best of both worlds: easy code to fetch data from our database (e.g. `getUser()`) and a React hook we can use in Client Components (e.g. `useUser()`).

Fun fact: the majority of the UI for this application was built with [v0](https://v0.dev) 🤯 [More details here](https://x.com/leeerob/status/1835777934361084316) if you want to learn about this repo.

</details>


## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://www.postgresql.org/)
- **ORM**: [Drizzle](https://orm.drizzle.team/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)
