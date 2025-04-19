
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ error: 'Missing description' });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: description }
        ],
        temperature: 0.6
      })
    });

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content || 'No result';
    return res.status(200).json({ result });

  } catch (error) {
    return res.status(500).json({ error: 'Internal server error', detail: error.message });
  }
}
