export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { project, renovation, name, email, phone } = req.body;
  res.status(200).json({
    message: 'Estimate request received',
    project,
    renovation,
    client: { name, email, phone }
  });
}