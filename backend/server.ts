import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const app = new Application();

// Adăugăm rutele definite în routes.ts
app.use(router.routes());
app.use(router.allowedMethods());

// Middleware simplu de test
app.use((ctx) => {
  ctx.response.body = "Bine ai venit la muzeu!";
});

// Pornim serverul pe portul 8000
console.log("Serverul rulează pe http://localhost:8000");
await app.listen({ port: 8000 });
