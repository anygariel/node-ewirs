require('dotenv').config(); const express = require('express'); const fs = require('fs'); 
const path = require('path'); const { v4: uuidv4 } = require('uuid'); const router = 
express.Router(); const app = express(); const styles = process.env.STYLE; const dbPath = 
path.join(__dirname, '../db/database.json'); app.use(express.urlencoded({ extended: true })); 
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

// categories.php: categories/:tag
router.get('/:tag', (req, res) => {
    const items = readDB();
    const itemTag = req.params.tag;
//  const item = items.find(item => item.hashtag === itemTag);
const uniqueHashtags = new Set();

    // Iterate over each item and add its hashtag to the Set.
    items.forEach(item => {
        // Ensure the item has a hashtag and that it's a non-empty string.
        if (item.hashtag === itemTag) {
            uniqueHashtags.add(item);
        }
    });

    // Convert the Set back to an array to be used in the response.
    const allHashtags = [...uniqueHashtags];

    const htmlResponse = `<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bookmark untuk Kategori Positif | Ewirs</title>
        <link rel="stylesheet" href="${styles}" type="text/css" media="all" />
    </head>
    <body>
        <div class="navbar">
             <h1 class="white-back">Ewirs</h1>
	     <style>
		.menus a{
		    font-size:14px !important;
       		}
	     </style>
             <div class="menus">
                  <a href="/" style="color:#fff;"><button>Rumah</button></a>
		  <a href="/about" style="color:#fff;"><button>Tentang</button></a>
		  <a href="/map/sitemap.xml" style="color:#fff;"><button>Peta Situs</button></a>
             </div>
        </div>
        <style>
            .pagesly{
                padding:15px;
            }
        </style>
        <div class="pagesly">
	     ${allHashtags.map(item => `<div class="item-page"><div class="title"><h2>${item.judul}</h2></div><div class="description">${item.deskripsi}</div><div class="tags">${item.hashtag}</div><div class="dates">${item.waktu}</div><div class="selengkapnya"><a href="../posts/${item.id}/${item.link}">Lihat Selengkapnya</a></div></div>`).join('')}
        </div>
	<div class="green" style="padding:0 15px;margin-bottom:15px;">
             2025 © Ewirs. All Rights Reserved.
        </div>
    </body>
</html>`;
       res.send(htmlResponse);
});
module.exports = router;
