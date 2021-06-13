// Selectors
const form = document.querySelector('form');
const libaryContainer = document.querySelector('.library-container');
const table = document.querySelector('.table')
const submitButton = document.querySelector('#submit');

const deleteButton = '<i class="far fa-trash-alt"></i>'
let books = [
  { title: 'Recursion', author: 'Blake Crouch', pages: '324', progress: 'Read', delete: deleteButton},
  { title: 'The Institute', author: 'Stephen King', pages: '561', progress: 'Read', delete: deleteButton },
  { title: 'The Institute', author: 'Stephen King', pages: '561', progress: 'Read', delete: deleteButton },
  { title: 'The Institute', author: 'Stephen King', pages: '561', progress: 'Read', delete: deleteButton },
  { title: 'The Institute', author: 'Stephen King', pages: '561', progress: 'Read', delete: deleteButton },
  { title: 'The Institute', author: 'Stephen King', pages: '561', progress: 'Read', delete: deleteButton },
  {title: 'Full Throttle', author: 'Joe Hill', pages: '480', progress: 'Read', delete: deleteButton }];

// Event Listeners
submitButton.addEventListener('click', addBook);

// Functions
function Book(title, author, pages, progress, __delete) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.progress = progress;
  this.delete = __delete;
}

function addBook(event) {
  event.preventDefault();
  // GET FORM DATA
  const bookTitle = document.querySelector('#book').value;
  const bookAuthor = document.querySelector('#author').value;
  const bookPages = document.querySelector('#pages').value;
  const bookProgress = document.querySelector('#progress').value;
  const deleteButton = '<i class="far fa-trash-alt"></i>'
  
  const bookRow = document.createElement("tr");
  let bookCell = document.createElement("td");
  
  newBook = new Book(bookTitle, bookAuthor, bookPages, bookProgress, deleteButton)
  books.push(newBook)
  buildTable(books)

form.reset();
}

buildTable(books)

function buildTable(data) {
  let tableBody = document.querySelector('.table-body')
  let row;

  for(let i = 0; i < data.length; i++) {
    // console.log(`${i}`)
      row = `<tr data-index="${i}" class="book">
                    <td>${data[i].title}</td>
                    <td>${data[i].author}</td>
                    <td>${data[i].pages}</td>
                    <td>${data[i].progress}</td>
                    <td>${data[i].delete}</td>
                <tr>`
      tableBody.innerHTML += row
  }

}

let book = document.querySelectorAll('.book')

let delBtn = document.querySelectorAll('.far');
for (let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener('click', function (e) {
    books.splice(i,1);
    book[i].remove();
    console.table(books)
  });
}