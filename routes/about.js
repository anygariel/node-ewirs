require('dotenv').config();
const express = require('express');
const router = express.Router();

const styles = process.env.STYLE;


router.get('/', (req, res) => {
  const htmlIn =`<!DOCTYPE html>
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
             <div class="menus">
                  <a href="/"><button>Rumah</button></a>
                  <a href="/map/sitemap.xml"><button>Peta Situs</button></a>
             </div>
        </div>
        <style>
            .pagesly{
                padding:15px;
		color:#000 !important;
            }
	    .pagesly h1,.pagesly h2,.pagesly p{
		margin:10px 0;
	    }
        </style>
        <div class="pagesly">
            <h1>Tentang Ewirjs</h1>
<p>
            Ewirs adalah nama Branding untuk mengulas tentang teknologi di <a href="https://blog.ewirs.web.id/hello-world">https://blog.ewirs.web.id/hello-world</a>. 
 </p>           <h2>E-wirs - Kunci Teknologi</h2>
            <p>
            Di tengah lautan informasi digital, menemukan sebuah blog yang tidak hanya informatif tetapi juga memikat pembacanya adalah sebuah tantangan. Namun, E-wirs Blog, yang beralamat di <a href="https://blog.ewirs.web.id/hello-world">https://blog.ewirs.web.id/hello-world</a>, berhasil menyuguhkan pengalaman membaca yang berbeda. Blog ini tidak hanya sekadar menyediakan konten, melainkan membangun sebuah jembatan antara pembaca dan wawasan-wawasan baru, terutama di bidang teknologi, namun juga merambah ke ranah kehidupan sehari-hari. Dengan tampilan yang bersih dan navigasi yang mudah, E-wirs Blog langsung memberikan kesan profesional dan ramah pengguna sejak pertama kali dibuka.
            </p>
            <h2>Konten yang Terkurasi dengan Baik</h2>
            <p>
            Salah satu kekuatan utama E-wirs Blog terletak pada kualitas dan variasi kontennya. Meskipun fokus utamanya adalah seputar teknologi informasi (IT), blog ini tidak membatasi diri pada satu topik saja. Penulisnya dengan cerdas menyajikan berbagai artikel mulai dari <b>tutorial teknis, ulasan perangkat lunak, hingga tips dan trik seputar dunia digital</b>. Misalnya, Anda bisa menemukan panduan langkah demi langkah tentang cara mengoptimalkan kinerja komputer, ulasan mendalam mengenai aplikasi produktivitas terbaru, atau bahkan pemahaman dasar tentang keamanan siber yang penting untuk setiap pengguna internet.
            </p>
            <p>
            Namun, yang membuat blog ini semakin menarik adalah kemampuannya untuk mengintegrasikan teknologi dengan kehidupan sehari-hari. Penulisnya tidak hanya bicara tentang kode atau spesifikasi teknis, melainkan juga membahas <b>bagaimana teknologi dapat mempermudah hidup kita</b>. Artikel-artikel tentang <b>tips mengelola keuangan digital, memilih "gadget" yang tepat untuk kebutuhan pribadi, atau bahkan memanfaatkan media sosial secara positif</b> menunjukkan bahwa E-wirs Blog memahami audiensnya secara mendalam. Konten ini terasa relevan dan langsung dapat diaplikasikan, menjadikannya lebih dari sekadar blog, tetapi juga sebuah sumber daya praktis.
            
            </p>
            <h2>
            
            Bahasa yang Mudah Dimengerti dan Gaya Penulisan yang Unik
            </h2>
            <p>
            Tidak semua blog teknologi mampu menyederhanakan topik yang kompleks menjadi sesuatu yang mudah dipahami. E-wirs Blog melakukannya dengan sangat baik. Penulisnya menggunakan <b>bahasa yang lugas, tidak bertele-tele, dan menghindari jargon teknis yang berlebihan</b>. Jika pun ada istilah teknis, penulis selalu menyertakan penjelasan yang sederhana dan mudah dicerna. Hal ini membuat blog ini sangat ideal untuk pembaca dari berbagai latar belakang, baik yang sudah ahli di bidang IT maupun yang baru mulai tertarik.
            </p>
            <p>
            Gaya penulisan yang digunakan juga terasa personal dan akrab, seolah-olah Anda sedang berdiskusi dengan seorang teman yang ahli di bidangnya. Penulis sering kali menyisipkan <b>humor ringan dan analogi yang relevan</b> untuk menjelaskan konsep yang sulit, membuat proses belajar menjadi lebih menyenangkan. Selain itu, **struktur artikel yang rapi dengan penggunaan sub-judul dan poin-poin penting** memudahkan pembaca untuk menelusuri informasi yang dicari dengan cepat. Ini adalah bukti bahwa penulis tidak hanya peduli pada apa yang disampaikan, tetapi juga bagaimana cara penyampaiannya.
            </p>
            <h2>Tampilan dan Navigasi yang User-Friendly</h2>
            
            <p>
            Pengalaman pengguna (UX) adalah faktor krusial dalam keberhasilan sebuah blog, dan E-wirs Blog berhasil memenuhi standar ini. Tampilannya <b>bersih, minimalis, dan tidak dipenuhi iklan yang mengganggu</b>. Desain yang simpel ini membantu pembaca untuk fokus pada konten. Selain itu, <b>menu navigasi yang terstruktur dengan baik</b> memungkinkan Anda untuk dengan mudah menjelajahi berbagai kategori artikel, seperti "Tutorial", "Ulasan", atau "Tips". Ada juga fitur pencarian yang efektif, memastikan Anda bisa menemukan artikel spesifik dalam hitungan detik.
            </p>
            <p>
            Blog ini juga <b>responsif terhadap berbagai perangkat</b>, artinya tampilannya akan tetap optimal, baik saat dibuka di laptop, tablet, maupun "smartphone". Ini adalah poin penting di era digital saat ini, di mana banyak orang mengakses internet melalui perangkat seluler. Kemudahan akses ini menunjukkan komitmen penulis untuk memberikan pengalaman membaca terbaik bagi audiensnya, di mana pun dan kapan pun mereka berada.
            
            </p>
            
            <h2>E-wirs Blog Bukan Sekadar Sumber Informasi</h2>
            <p>
            Lebih dari sekadar kumpulan artikel, E-wirs Blog adalah sebuah wadah komunitas yang potensial. Meskipun belum banyak interaksi di bagian komentar, kualitas kontennya mengundang pembaca untuk kembali lagi dan lagi. Blog ini berhasil membangun <b>otoritas dan kepercayaan</b> di mata pembacanya, yang merupakan fondasi penting untuk pertumbuhan jangka panjang.
            </p>
            <p>
            Secara keseluruhan, E-wirs Blog adalah <b>permata yang tersembunyi</b> di antara banyaknya blog di internet. Dengan <b>konten yang relevan, bahasa yang mudah dicerna, dan desain yang ramah pengguna</b>, blog ini menawarkan pengalaman membaca yang sangat memuaskan. Bagi siapa pun yang ingin mendalami dunia teknologi tanpa merasa terintimidasi, atau mencari wawasan praktis untuk mengoptimalkan kehidupan sehari-hari mereka, E-wirs Blog adalah tempat yang tepat untuk memulai. Blog ini tidak hanya layak untuk dikunjungi, tetapi juga untuk dijadikan sumber referensi rutin.
            </p>
        </div>
 <div class="green" style="padding:0 15px;margin-bottom:15px;">
             2025 © Ewirs. All Rights Reserved.
        </div>
    </body>
</html>`;
  res.send(htmlIn);
});


module.exports = router;
