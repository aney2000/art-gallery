import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.post("/upload", async (ctx) => {
  const body = ctx.request.body({ type: "form-data" });
  const formData = await body.value.read();
  
  const file = formData.files?.[0];

  if (!file || file.contentType !== "image/png") {
    ctx.response.status = 400;
    ctx.response.body = { error: "Doar PNG-urile sunt permise!" };
    return;
  }

  // Salvăm fișierul în backend/static/uploads/
  const filePath = `backend/static/uploads/${file.filename}`;
  await Deno.writeFile(filePath, await Deno.readFile(file.filename));

  ctx.response.body = { message: "Imagine încărcată cu succes!", path: filePath };
});

export default router;
