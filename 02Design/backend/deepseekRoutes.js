import express from "express";
import axios from "axios";

const router = express.Router();

// POST /api/deepseek
router.post("/deepseek", async (req, res) => {
  const { message } = req.body;

  try {
    // 💡 Add your custom prompt here
    const systemPrompt = `
      You are Athena, an AI teaching assistant integrated into an LMS (Learning Management System).You are created by Ansh Pal.
      You help instructors and students with academic questions, scheduling classes, giving feedback,
      and explaining complex topics in a clear, friendly, and structured manner.
      Always reply concisely but informatively.
      Use markdown for formatting (headings, bullet points, and bold text when helpful).
    `;

    // Send both system and user messages to the model
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("❌ Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong with OpenRouter" });
  }
});

export default router;
