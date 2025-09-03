require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const app = express();
const styles = process.env.STYLE;
const dbPath = path.join(__dirname, '../db/database.json');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

router.get('/:id/:parseTitle', (req, res) => {
  const items = readDB();
  const itemId = req.params.id; // Menangkap ID dari URL
  const item = items.find(item => item.id === itemId);
  if (item) {
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${item.judul} | Ewirs</title>
	<link rel="stylesheet" href="${styles}" type="text/css" media="all" />
    </head>
    <body>
        <div class="navbar">
             <h1 class="white-back">Ewirs</h1>
             <div class="menus">
                  <a href="/" style="color:#fff;"><button>Rumah</button></a>
                  <a href="/about" style="color:#fff;"><button>Tentang</button></a>
                  <a href="/map/sitemap.xml" style="color:#fff;"><button>Peta Situs</button></a>
             </div>
        </div>
        <div class="item-page">
        <div style="padding:15px;">
             <div class="title"><h2>${item.judul}</h2></div>
             <div class="description">${item.artikel}</div>
             <div class="tags">${item.hashtag}</div>
             <div class="dates">${item.waktu}</div>
        </div>
        </div>
	<div class="green" style="padding:0 15px;margin-bottom:15px;">
	     2025 © Ewirs. All Rights Reserved.
	</div>
    </body>
</html>`);
  } else {
    res.status(404).send('<h1>404 Not Found</h1><p>Post not found.</p>');
  }
});

router.get('/:id', (req, res) => {
    res.redirect('/');
});

router.get('/', (req, res) => {
    res.redirect('/');
});

module.exports = router;
