export const state = {
  apikey: null,
  length: 0,
  bookList: [],
  lastSearch: {},
};

export function addBook(json) {
  state.length++;
  json["status"] = false;
  state.bookList.push(json);
}

export function toggleRead(json) {
  state.bookList.forEach((book) => {
    if (book === json) {
      book.status = book.status ? false : true;
    }
  });
  console.log(state.bookList)
}
