export default {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return new Response("Assets binding is not configured.", { status: 500 });
    }
    return env.ASSETS.fetch(request);
  }
};
