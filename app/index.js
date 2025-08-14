const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
let ready = false;
setTimeout(() => (ready = true), 3000);

app.get("/", (req, res) =>
  res.json({
    ok: true,
    ts: new Date().toLocaleString("es-PE", {
      dateStyle: "full",
      timeStyle: "medium",
    }),
    message: "Abejita chiquita",
  })
);
app.get("/healthz", (_req, res) => res.send("ok"));
app.get("/readyz", (_req, res) =>
  ready ? res.send("ok") : res.status(503).send("not ready")
);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
