export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { description, renovation, name, email, phone } = req.body;

  if (!description || !name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const prompt = `User project: ${description}. Renovation: ${renovation}. Return a cost estimate for this home improvement project in Georgia. Only return the estimate amount.`;

  try {
    const completion = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 300
      })
    });

    const result = await completion.json();
    const text = result.choices?.[0]?.message?.content?.trim() || 'No estimate returned';
    return res.status(200).json({ result: text });

  } catch (error) {
    return res.status(500).json({ error: 'Failed to generate estimate' });
  }
}