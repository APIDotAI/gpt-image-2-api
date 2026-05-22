import express from 'express';

const app = express();
const port = Number(process.env.PORT || 3000);
app.use(express.json({ limit: '2mb' }));
app.post('/api/apidot/webhook', (req, res) => {
  const taskId = req.body?.data?.task_id || req.body?.task_id;
  const status = req.body?.data?.status || req.body?.status;
  if (!taskId) return res.status(400).json({ error: 'Missing task_id' });
  console.log(JSON.stringify({ taskId, status }));
  return res.status(200).json({ ok: true });
});
app.get('/health', (_req, res) => res.json({ ok: true }));
app.listen(port, () => console.log('APIDot webhook example listening on port ' + port));

