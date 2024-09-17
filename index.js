require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

// Route dosyalarını buraya ekleyin
const categoryRoutes = require('./src/routes/category');

app.use(express.json());
app.use('/categories', categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
