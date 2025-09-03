require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = process.env.PORT || 3001;

const postsRouter = require('./routes/posts');
const aboutRouter = require('./routes/about');
const categoriesRouter = require('./routes/categories');
const sitemapRouter = require('./routes/sitemap');
const dbPath = path.join(__dirname, 'db/database.json');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const readDB = () => {
  try {
    const data = fs.readFileSync(dbPath);
    // Jika file kosong, kembalikan array kosong
    if (data.length === 0) {
      return [];
    }
    return JSON.parse(data);
  } catch (error) {
    // Tangani jika file tidak ada atau ada masalah lain
    console.error("Error reading database file:", error.message);
    return [];
  }
};

app.use(express.static(path.join(__dirname, 'public')));
app.use('/posts', postsRouter);
app.use('/map', sitemapRouter);
app.use('/about', aboutRouter);
app.use('/categories', categoriesRouter);
app.get('/items', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const allItems = readDB();
  const sortedItems = allItems.sort((a, b) => {
     const dateA = new Date(a.waktu);
     const dateB = new Date(b.waktu);
     return dateB - dateA;
  });
  const paginatedItems = sortedItems.slice(startIndex, endIndex);

    // Kirim data yang sudah dipaginasi, bersama dengan info total item
  res.json({
     totalItems: allItems.length,
     items: paginatedItems
  });
});
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
