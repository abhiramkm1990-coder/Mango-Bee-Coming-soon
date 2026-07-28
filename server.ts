import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory state for pre-launch subscribers (initialized with starting count)
let subscriberCount = 2548;
const subscribers: Array<{ id: number; email: string; createdAt: string; vipCode: string; receivesCableArmor: boolean }> = [];

// API Endpoints
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "Mangobee Landing Page" });
});

app.get("/api/subscribers", (_req, res) => {
  res.json({
    count: subscriberCount,
    displayCount: subscriberCount.toLocaleString(),
  });
});

app.post("/api/subscribe", (req, res) => {
  const { email } = req.body || {};

  if (!email || typeof email !== "string" || !email.includes("@")) {
    res.status(400).json({ success: false, error: "Please enter a valid email address." });
    return;
  }

  const cleanEmail = email.trim().toLowerCase();
  
  // Check if already subscribed
  const existing = subscribers.find((s) => s.email === cleanEmail);
  if (existing) {
    res.json({
      success: true,
      alreadySubscribed: true,
      subscriberNumber: existing.id,
      vipCode: existing.vipCode,
      receivesCableArmor: existing.receivesCableArmor,
      count: subscriberCount,
      message: "You are already on the Mangobee VIP list!",
    });
    return;
  }

  subscriberCount += 1;
  const receivesCableArmor = subscriberCount - 2548 <= 500;
  const vipCode = `MB-VIP-${Math.floor(1000 + Math.random() * 9000)}`;

  const newSubscriber = {
    id: subscriberCount,
    email: cleanEmail,
    createdAt: new Date().toISOString(),
    vipCode,
    receivesCableArmor,
  };

  subscribers.push(newSubscriber);

  res.json({
    success: true,
    subscriberNumber: subscriberCount,
    vipCode,
    receivesCableArmor,
    count: subscriberCount,
    message: "Welcome to Mangobee VIP! Check your pass below.",
  });
});

app.post("/api/bulk-order", (req, res) => {
  const { name, email, company, count, details } = req.body || {};
  if (!name || !email || !company) {
    res.status(400).json({ success: false, error: "Please complete all required fields." });
    return;
  }

  res.json({
    success: true,
    message: `Thank you ${name}! Your corporate bulk request for ${company} (${count || '50+'} units) has been received. Our team will contact you at ${email} within 24 hours.`,
  });
});

// Dynamic Robots.txt
app.get("/robots.txt", (_req, res) => {
  res.type("text/plain");
  res.send(`User-agent: *
Allow: /
Sitemap: https://mangobee.com/sitemap.xml
`);
});

// Dynamic Sitemap.xml
app.get("/sitemap.xml", (_req, res) => {
  res.type("application/xml");
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://mangobee.com/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Mangobee server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
