export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Always serve the SPA entry point at the root.
    if (url.pathname === "/" || url.pathname === "") {
      const indexUrl = new URL("/index.html", request.url);
      return env.ASSETS.fetch(new Request(indexUrl, {
        method: "GET",
        headers: request.headers
      }));
    }

    // Serve files from /public.
    const response = await env.ASSETS.fetch(request);

    // Support SPA/client-side routes.
    if (response.status === 404 && !url.pathname.includes(".")) {
      const indexUrl = new URL("/index.html", request.url);
      return env.ASSETS.fetch(new Request(indexUrl, {
        method: "GET",
        headers: request.headers
      }));
    }

    return response;
  }
};
