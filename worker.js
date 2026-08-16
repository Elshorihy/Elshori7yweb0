export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const path = url.pathname === "/" ? "/index.html" : url.pathname;
      url.pathname = path;
      return await env.ASSETS.fetch(new Request(url.toString(), request));
    } catch (error) {
      return new Response(`Elshori7y Worker Error\n${error?.stack || error}`, {
        status: 500,
        headers: { "content-type": "text/plain; charset=UTF-8" }
      });
    }
  }
};
