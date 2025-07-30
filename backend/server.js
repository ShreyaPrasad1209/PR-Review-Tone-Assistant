require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.json());


app.post("/rewrite", async (req, res) => {
  const { comment } = req.body;

  const prompt = `You are an emotionally intelligent code reviewer. Rewrite this PR comment to sound more friendly and constructive, while keeping the technical feedback intact.\n\nOriginal: "${comment}"\nRewritten:`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const suggestion = response.data.choices[0].message.content;
    // Remove quotes from the beginning and end of the suggestion
    let cleanSuggestion = suggestion.trim();
    
    // Remove quotes from start and end (multiple passes to handle nested quotes)
    while ((cleanSuggestion.startsWith('"') && cleanSuggestion.endsWith('"')) || 
           (cleanSuggestion.startsWith("'") && cleanSuggestion.endsWith("'"))) {
      cleanSuggestion = cleanSuggestion.slice(1, -1).trim();
    }
    
    res.json({ suggestion: cleanSuggestion });
  } catch (error) {
    console.error("🔥 OpenRouter API Error:");
    console.error("Status:", error.response?.status);
    console.error("Data:", JSON.stringify(error.response?.data, null, 2));
    console.error("Message:", error.message);
    res.status(500).json({ error: "Rewrite failed" });
  }
});

app.listen(3000, () => {
  console.log("✅ Rewrite server running at http://localhost:3000");
});
