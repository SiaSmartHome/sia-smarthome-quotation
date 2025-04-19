import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { description } = req.body;

  if (!description) return res.status(400).json({ error: "Missing description field" });

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: `Give a smart construction cost analysis based on: ${description}` }],
      model: "gpt-4",
    });

    const response = completion.choices[0]?.message?.content;
    return res.status(200).json({ result: response });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
