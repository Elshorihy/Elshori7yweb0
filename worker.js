export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve the SPA entry point for the site root.
    if (url.pathname === "/" || url.pathname === "") {
      const indexUrl = new URL("/index.html", request.url);
      return env.ASSETS.fetch(new Request(indexUrl, request));
    }

    // Serve static assets (config.js, CSS, images, etc.).
    const response = await env.ASSETS.fetch(request);

    // For client-side routes, fall back to index.html.
    if (response.status === 404 && !url.pathname.includes(".")) {
      const indexUrl = new URL("/index.html", request.url);
      return env.ASSETS.fetch(new Request(indexUrl, request));
    }

    return response;
  }
};
