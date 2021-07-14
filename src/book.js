function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
 return {
   name: name,
   age: age,
   pronouns: pronouns
 };
};

function saveReview(addReview, reviews) {
  if (reviews.indexOf(addReview) === -1)
  reviews.push(addReview)
}

function calculatePageCount(bookTitle) {
  var titleLength = bookTitle.length;
  return titleLength * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
}

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * 0.75;
  return bookTitle.pageCount;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
