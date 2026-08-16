export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") url.pathname = "/index.html";

    const assetRequest = new Request(url.toString(), request);
    const response = await env.ASSETS.fetch(assetRequest);

    if (response.status === 404 && url.pathname !== "/index.html") {
      const fallback = new URL(request.url);
      fallback.pathname = "/index.html";
      return env.ASSETS.fetch(new Request(fallback.toString(), request));
    }

    return response;
  }
};
