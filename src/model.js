export const state = {
  apikey: null,
  length: 0,
  bookList: [],
  lastSearch: {},
};

export function addBook(json) {
  state.length++;
  bookList.push({
    title: json.title,
    author: json.author,
    pages: json.pages,
    short: json.short,
    status: json.status,
  });
}
