
export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const estimate = {
      totalCost: 15400,
      message: "This is a sample response for testing."
    };
    res.status(200).json(estimate);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
