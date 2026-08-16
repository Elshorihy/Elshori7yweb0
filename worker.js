export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      let response = await env.ASSETS.fetch(request);

      if (response.status === 404 && !url.pathname.includes('.')) {
        const indexUrl = new URL('/index.html', request.url);
        response = await env.ASSETS.fetch(new Request(indexUrl.toString(), request));
      }

      return response;
    } catch (error) {
      return new Response(
        `Elshori7y Worker Error\n${error?.message || String(error)}`,
        { status: 500, headers: { 'content-type': 'text/plain; charset=UTF-8' } }
      );
    }
  }
};
