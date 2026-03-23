import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 200
      })
    });
    const data = await response.json();
    console.log('Groq:', JSON.stringify(data, null, 2));
    const story = data.choices?.[0]?.message?.content || 'No story.';
    res.json({ story });
  } catch (err) {
    console.error(err);
    res.json({ story: 'Error: ' + err.message });
  }
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
