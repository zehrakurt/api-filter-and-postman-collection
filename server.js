require('dotenv').config();
const PORT = 3000;
const express = require('express');
const app = express();
const categoryRoutes = require('./src/routes/category');
const postRoutes = require('./src/routes/post');

app.use(express.json());
app.use('/categories', categoryRoutes);
app.use('/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
