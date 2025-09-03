async function fetchItems() {
      const response = await fetch('/items');
      const items = await response.json();
      const dataList = document.querySelector('.data-list');
      dataList.innerHTML = '';
      items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('data-item');
          itemDiv.innerHTML = `<div class="item-page">
<div class="title"><h2>${item.judul}</h2></div>
<div class="description">${item.deskripsi}</div>
<div class="tags">${item.hashtag}</div>
<div class="dates">${item.waktu}</div>
<div class="selengkapnya">
<a href="posts/${item.id}">Lihat Selengkapnya</a></div></div>`;
          dataList.appendChild(itemDiv);
      });
}
fetchItems();
