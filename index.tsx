import { renderToReadableStream } from "react-dom/server";
import Calculator from "./components/Calculator";

const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const stream = await renderToReadableStream(<Calculator/>,);

        return new Response(stream, {
            headers: { "Content-Type": "text/html" },
        });
    }
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  