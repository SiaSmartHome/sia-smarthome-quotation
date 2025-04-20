export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { projectDescription, isRenovation, clientName, clientEmail, clientPhone } = req.body;

  // Example dummy processing
  const estimate = "$9,450";  // This should be replaced by GPT processing later

  return res.status(200).json({
    success: true,
    estimate,
    note: "This is a sample fixed response from /api/calculate"
  });
}