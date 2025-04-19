import { OpenAI } from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const { description, renovation, name, email, phone } = req.body;
  if (!description || !renovation) return res.status(400).json({ error: "Missing required fields" });

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const gptResponse = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a cost estimator. Identify execution steps and price-affecting factors. Return as JSON."
      },
      {
        role: "user",
        content: `Project description: ${description}`
      }
    ]
  });

  const analysis = gptResponse.choices[0].message.content;
  res.status(200).json({
    project: description,
    renovation,
    client: { name, email, phone },
    gpt_analysis: analysis
  });
}