const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: "Greetings from the Express Backend!",
    features: [
      { id: 1, title: "Modern Design", description: "Built with the latest aesthetics in mind." },
      { id: 2, title: "Speed & Performance", description: "Powered by Vite and Express for lightning-fast speeds." },
      { id: 3, title: "Tailwind Styling", description: "Utiltiy-first CSS for a rich, custom UI." }
    ],
    status: "Healthy"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
