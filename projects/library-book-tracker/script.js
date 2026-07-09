const bookListEl = document.getElementById("bookList");

class Book{
    constructor(title, author, year, status, coverImage){
        this.id = nextId;
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status;
        this.coverImage = coverImage;
        nextId++;
    }
}

let books = [];
let nextId = 1;
let currentFilter = 'all';
let currentCoverImage;

const statusColors = {
    'reading': '#BA7517',
    'completed': '#3B6D11',
    'plan-to-read': '#5F5E5A'
}


function addBook(title, author, year, status, coverImage){
    const obj = new Book(title, author, year, status, coverImage);
    books.push(obj);
}

function removeBook(id){
    books = books.filter((book) => book.id !== id); // Return only those whose id is not the same as id sent for removal
}

const coverInput = document.getElementById("coverInput");

coverInput.addEventListener('change', () => { 
    const file = coverInput.files[0];
    if(!file) return; // user opened the picker but hit cancel 

    const reader = new FileReader();
    reader.onload = () => {
        currentCoverImage = reader.result; // lands here whenever it's done 
    };
    reader.readAsDataURL(coverInput.files[0]);

});



/* The card building stuff from html that we recreated in js in renderBooks()
<li class="book-card">
  <div class="book-cover" style="background-color: ...">OP</div>
  <div class="book-info">
    <p class="book-title">One Piece</p>
    <p class="book-meta">Oda · 1997</p>
    <span class="status-badge">Completed</span>
  </div>
</li>
*/
function renderBooks(){
    bookListEl.innerHTML = ''; // So old cards gone

    const booksToShow = currentFilter === 'all'? books: books.filter((book) => book.status === currentFilter);

    booksToShow.forEach((book) => {
        const li = document.createElement('li');
        li.className = 'book-card';

        const cover = document.createElement('div');
        cover.className = 'book-cover';
        
        if(book.coverImage){
            const img = document.createElement('img');
            img.src = book.coverImage;
            cover.appendChild(img);
        }else{
            cover.textContent = book.title[0];
            cover.style.backgroundColor = statusColors[book.status];
        }
        
        const info = document.createElement('div');
        info.className = 'book-info';

        const title = document.createElement('p');
        title.className = 'book-title';
        title.textContent = book.title;

        const meta = document.createElement('p');
        meta.className = 'book-meta';
        meta.textContent = `${book.author} · ${book.year}`;

        const status = document.createElement('span');
        status.className = 'status-badge';
        status.textContent = book.status;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            removeBook(book.id);
            renderBooks();
        })
        
        li.appendChild(cover);
        li.appendChild(info);
        bookListEl.appendChild(li);

        info.appendChild(title);
        info.appendChild(meta);
        info.appendChild(status);
        info.appendChild(deleteBtn);
    });
}

const bookForm = document.getElementById('bookForm');
//a <form> submitting reloads/navigates the page by default;
//event.preventDefault(), called inside your event handler, tells the browser: "don't do that automatic built-in thing this time — I'm handling it myself.

// Through addEventListener(eventType, callbackFunction) you tell an element "run this function whenever a specific event happens to you"
// eventType = 'click', 'submit', 'keydown', 'mouseover' etc

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Read values from each input here
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const year = Number(document.getElementById('yearInput').value);
    const status = document.getElementById('statusInput').value;

    addBook(title, author, year, status, currentCoverImage);
    renderBooks();
    bookForm.reset();
    currentCoverImage = undefined; // reset so next book doesn't inherit it
})

const filterBtn = document.querySelectorAll('.filter-controls button');

filterBtn.forEach((button) => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;

        filterBtn.forEach((btn) => btn.classList.remove('active')); // Think of it as: "whatever was previously marked active, un-mark it, unconditionally."
        button.classList.add('active'); // add .active onto just the one that was clicked
        // Your JS (classList.add('active')) and your CSS (.filter-controls button.active) are two completely separate files, 
        // written at two completely separate times — but they're linked by this one shared string, "active"
        renderBooks();
    });
});


const sortByTitleBtn = document.getElementById("sortByTitle");
const sortByYearBtn = document.getElementById("sortByYear");

sortByTitleBtn.addEventListener('click', () => {
    books.sort((a, b) => a.title.localeCompare(b.title));
    renderBooks();
});

sortByYearBtn.addEventListener('click', () => {
    books.sort((a, b) => a.year - b.year);
    renderBooks();
});

