const books = [
  {
    title: "Menguasai Pemrograman Berorientasi Objek",
    author: "Ade Rahmat Iskandar",
    publisher: "Informatika 2020",
    cover: "asset/WhatsApp Image 2025-06-23 at 21.18.10_64317955.jpg"
  },
  {
    title: "Dasar Pemrograman Python 3",
    author: "Abdul Kadir",
    publisher: "Andi Publisher 2018",
    cover: "asset/WhatsApp Image 2025-06-23 at 21.22.27_ae80c32f.jpg"
  },
  {
    title: "Sistem Basis Data Dan SQL",
    author: "Didik Setiyadi",
    publisher: "Mitra Wacana Media 2020",
    cover: "asset/WhatsApp Image 2025-06-23 at 21.40.29_bae65f46.jpg"
  },
  {
    title: "Dasar-Dasar Pemrograman dengan .NET",
    author: "Ade Rahmat Iskandar",
    publisher: "Informatika 2019",
    cover: "asset/WhatsApp Image 2025-06-23 at 21.19.40_0f80730a.jpg"
  },
  {
    title: "Metodologi Pengembangan Sistem Informasi",
    author: "Samiha Sarosa",
    publisher: "Graha Ilmu",
    cover: "asset/WhatsApp Image 2025-06-23 at 21.20.29_229a5a2d.jpg"
  }
];

// Tampilkan 3 buku pertama untuk bagian Popular
const popularBooks = books.slice(0, 3);
const allBooks = books;

function createBookCard(book) {
  return `
    <div class="book-card">
      <img src="${book.cover}" alt="${book.title}">
      <div class="book-title">${book.title}</div>
      <div class="book-author">${book.author}</div>
      <div class="book-publisher">${book.publisher}</div>
    </div>
  `;
}

document.getElementById("popular-books").innerHTML = popularBooks.map(createBookCard).join("");
document.getElementById("all-books").innerHTML = allBooks.map(createBookCard).join("");
