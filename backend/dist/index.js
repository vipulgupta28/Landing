import express, {} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Redis } from 'ioredis';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
// -----------------------------
// REDIS CONNECTION
// -----------------------------
const redis = new Redis(process.env.REDIS_URL);
// Example for Render/Upstash: redis://default:password@host:6379
// KEY NAME
const DEMO_COUNT_KEY = "demoCount";
// Initialize counter if not exists
async function initializeCounter() {
    const current = await redis.get(DEMO_COUNT_KEY);
    if (current === null) {
        await redis.set(DEMO_COUNT_KEY, 0);
        console.log("Initialized demoCount = 0");
    }
    else {
        console.log(`Loaded demoCount = ${current}`);
    }
}
initializeCounter();
// -----------------------------
// ROUTES
// -----------------------------
app.get('/', (_req, res) => {
    res.send('Hello World');
});
// GET demo count
app.get('/api/demo', async (_req, res) => {
    const count = await redis.get(DEMO_COUNT_KEY);
    res.json({ demoCount: Number(count) });
});
// INCREMENT demo count
app.post('/api/demo', async (_req, res) => {
    const count = await redis.incr(DEMO_COUNT_KEY); // atomic increment
    console.log(`Demo requests so far: ${count}`);
    res.json({ demoCount: count });
});
// -----------------------------
// START SERVER
// -----------------------------
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map