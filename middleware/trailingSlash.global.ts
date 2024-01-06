export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/' && !to.path.endsWith('/')) {
    return navigateTo({
      path: to.path + '/',
      query: to.query,
      hash: to.hash,
    });
  }
});
