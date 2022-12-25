const base_url_search = "http://openlibrary.org/search.json?";
const base_url_openlibrary = "http://openlibrary.org/api/books?bibkeys=ISBN:";
const base_url_cover = "https://covers.openlibrary.org/b/isbn/";
const base_url_description = "https://openlibrary.org/isbn/";
/* const base_url_description = "https://openlibrary.org/books/"; */

// parameters
export const parameters = {
  title: "title=",
  author: "&author=",
  page: "&page=",
};

// limit
export const filters = {
  none: "&orderBy=relevance",
  limited: "&limit=10",
};

export const coverSize = {
  small: "-S.jpg",
  medium: "-M.jpg",
  large: "-L.jpg",
};

export async function searchQuery(
  title,
  author = null,
  apikey,
  params = parameters,
  filter = filters.limited
) {
  const queryString = `${base_url_search}${params.title}${title.replaceAll(
    " ",
    "+"
  )}${
    author ? "+" + params.author + "=" + author.replaceAll(" ", "+") : ""
  }${filter}`;

  console.log(queryString);

  const res = await fetch(queryString, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin );
  });

  console.log(res);
  return res.json();
}

export const options = {
  placement: "center-center",
  backdrop: "dynamic",
  backdropClasses:
    "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
};

export async function getExtraData(isbn) {
  const query = `${base_url_openlibrary}${isbn}&format=json&jscmd=details`;
  console.log(query);
  const res = await fetch(query, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin );
  });

  console.log(res);
  return res.json();
}

export function getCover(isbn, size = coverSize.large) {
  return `${base_url_cover}${isbn}${size}`;
}

export async function getDescription(work_key) {
  const query = `${base_url_description}${work_key}.json`;
  console.log(query)
  const res = await fetch(query, { method: "GET", mode: "cors" });
  const obj = await res.json();
  console.log("Inside constants");
  console.log(obj, obj.description);
  console.log("Exiting constants");
  return obj.hasOwnProperty("description")
    ? typeof obj.description === "string"
      ? obj.description
      : obj.description.value
    : "Descripcion no disponible";
}

export function generateCard(title, short, author, pages, status) {}
