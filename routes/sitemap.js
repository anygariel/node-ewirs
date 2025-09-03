const xmlparser = require('express-xml-bodyparser');
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const app = express();

const dbPath = path.join(__dirname, '../db/database.json');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(xmlparser());

const readDB = () => {
  try {
    const data = fs.readFileSync(dbPath);
    if (data.length === 0) {
      return [];
    }
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading database file:", error.message);
    return [];
  }
};

router.get('/sitemap.xml', (req, res) => {
  const items = readDB();
  const allData = [...new Set(items)];

  // Memastikan BASE_URL memiliki trailing slash dan link tidak memiliki leading slash untuk menghindari duplikasi
  const baseUrl = process.env.BASE_URL.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
  // Membuat string XML dengan perbaikan pada sintaks template literal
  res.header('Content-Type', 'application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>${allData.map(item => `<loc>${baseUrl}${item.link.startsWith('/') ? item.link.substring(1) : item.link}</loc><lastmod>${item.sitemap}</lastmod><priority>1.0</priority>`).join('')}
  </url></urlset>`);
});
router.get('/', (req,res) => {
   res.redirect('/');
});
module.exports = router;
