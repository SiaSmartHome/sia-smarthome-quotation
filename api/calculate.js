export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST allowed" });

  const { description, isRenovation, name, email, phone } = req.body;

  if (!description) return res.status(400).json({ error: "Missing description" });

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "user",
          content: `You're a construction estimator. The client said: "${description}", renovation: ${isRenovation}. Provide a clear estimate.`
        }]
      }),
    });

    const json = await openaiRes.json();
    const estimate = json.choices?.[0]?.message?.content;

    if (!estimate) return res.status(500).json({ error: "No estimate returned" });

    res.status(200).json({ estimate });

  } catch (err) {
    res.status(500).json({ error: "Error generating estimate", detail: err.message });
  }
}