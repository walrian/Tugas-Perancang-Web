const books = [
  {
    title: "Menguasai Pemrograman Berorientasi Objek",
    author: "Ade Rahmat Iskandar",
    publisher: "Informatika",
    year: "2020",
    img: "asset/WhatsApp Image 2025-06-23 at 21.18.10_64317955.jpg"
  },
  {
    title: "Dasar-Dasar Pemrograman dengan .NET",
    author: "Ade Rahmat Iskandar",
    publisher: "Informatika",
    year: "2019",
    img: "asset/WhatsApp Image 2025-06-23 at 21.19.40_0f80730a.jpg"
  },
  {
    title: "Metodologi Pengembangan Sistem Informasi",
    author: "Samiaji Sarosa",
    publisher: "Indeks",
    year: "2017",
    img: "asset/WhatsApp Image 2025-06-23 at 21.20.29_229a5a2d.jpg"
  },
  {
    title: "Struktur Data",
    author: "Rosa A.S.",
    publisher: "Modula",
    year: "2018",
    img: "asset/WhatsApp Image 2025-06-23 at 21.21.29_69c315e3.jpg"
  },
  {
    title: "Dasar Pemrograman Python 3",
    author: "Abdul Kadir",
    publisher: "Andi Publisher",
    year: "2018",
    img: "asset/WhatsApp Image 2025-06-23 at 21.22.27_ae80c32f.jpg"
  },
  {
    title: "Teori Dan Praktek Sistem Operasi",
    author: "Zaid Romleger Mair",
    publisher: "Deepublish",
    year: "2018",
    img: "asset/WhatsApp Image 2025-06-23 at 21.23.21_1458ee21.jpg"
  }
];

const container = document.getElementById('bookContainer');
const searchInput = document.getElementById('searchInput');
const yearInput = document.getElementById('yearInput');

function renderBooks(bookList) {
  container.innerHTML = "";
  bookList.forEach(book => {
    container.innerHTML += `
      <div class="book-card">
        <img src="${book.img}" alt="${book.title}">
        <h4>${book.title}</h4>
        <p>${book.author}</p>
        <small>${book.publisher} ${book.year}</small>
      </div>
    `;
  });
}

function filterBooks() {
  const keyword = searchInput.value.toLowerCase();
  const year = yearInput.value;
  const selectedFilter = document.querySelector('input[name="filter"]:checked').value;

  const filtered = books.filter(book => {
    if (selectedFilter === "title") {
      return book.title.toLowerCase().includes(keyword);
    } else if (selectedFilter === "author") {
      return book.author.toLowerCase().includes(keyword);
    } else if (selectedFilter === "publisher") {
      return book.publisher.toLowerCase().includes(keyword);
    } else if (selectedFilter === "titleyear") {
      return book.title.toLowerCase().includes(keyword) && book.year === year;
    }
    return true;
  });

  renderBooks(filtered);
}

searchInput.addEventListener("input", filterBooks);
yearInput.addEventListener("input", filterBooks);
document.querySelectorAll('input[name="filter"]').forEach(r => r.addEventListener("change", filterBooks));

renderBooks(books); // tampil awal