
# nextjs rendering

The page rendering in Next.js can be done in two ways:

## Static rendering

rendered at build time

## Dynamic rendering

rendered at request time.  
When are pages dynamically rendered ? ->

- Dynamic functions
- Uncached requests

## Client side navigation vs Server side navigation

### Client side navigation

navigation by nextjs's navigation system

- What happens when naviate via nextjs's navigation system?

### Server side navigation

### Revalidation

- I want to revalidate Data cache and Router cache
- Data cache is the place where the returned result of fetch request
- The data inside data cache is persisted between requests and deployments

- Route cache is in browser memory. It is the cache of the React Server Component Payload (RSC Payload)

- cache timing, duration, a way to invalidate cache
  - cache timing: when user navigates the routes or prefetches the routes
  - duration: session and period
  - a way to invalidate cache: call revalidation function in the server. router.refresh
  - How to know the cache is invalidated?

```txt
On subsequent navigations or during prefetching, Next.js will check if the React Server Components Payload is stored in the Router Cache. If so, it will skip sending a new request to the server.
```

- calling revalidatePath

- revalidatePath inside Route handler does not automatically refresh the current route
