export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // You can process the input or simulate response here
      const result = {
        message: "Request received successfully",
        input: data
      };

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error', detail: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
