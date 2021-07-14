function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    sciFiShelf.unshift(book);
  }
}

function unshelfBook(bookTitle, sciFiShelf) {
  for (var i = 0; i <= sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === bookTitle) {
      return sciFiShelf.splice(i, 1);
    };
  };
};

function listTitles(fantasyShelf) {
  var shelfTitles = [];
  for (var i = 0; i < fantasyShelf.length; i++) {
    shelfTitles.push(fantasyShelf[i].title);
  }
  var shelfTitlesList = shelfTitles.join(", ")
  return shelfTitlesList;
}

function searchShelf(sciFiShelf, bookTitle) {
  var shelfToSearch = [];
  for (var i = 0; i <= sciFiShelf.length; i++) {
    shelfToSearch.push(sciFiShelf[i].title);
  };
  return shelfToSearch.includes(bookTitle);
};



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
