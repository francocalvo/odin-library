const base_url = "https://www.googleapis.com/books/v1/volumes";
const query = "?q=";

// parameters
export const parameters = {
  title: "intitle:",
  author: "inauthor:",
  publisher: "inpublisher:",
  category: "subject:",
  isbn: "isbn:",
};

// order
export const orders = {
  relevance: "&orderBy=relevance",
  newest: "&orderBy=newest",
};

// filters
export const filters = {
  all: " ",
  partial_preview: "&filter=partial",
  full_preview: "&filter=full",
  free: "&filter=free-ebooks",
  paid: "&filter=paid-ebooks",
  ebooks: "&filter=ebooks",
};

export async function searchQuery(
  title,
  author = null,
  apikey,
  params = parameters,
  filter = filters.all,
  order = orders.relevance
) {
  const queryString = `${base_url}${query}${params.title}${title.replaceAll(
    " ",
    "+"
  )}${
    author ? "+" + params.author + "=" + author.replaceAll(" ", "+") : ""
  }${filter}${order}&akey=${apikey}`;

  const res = await fetch(queryString, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin );
  });
  return res;
}

export const options = {
  placement: "center-center",
  backdrop: "dynamic",
  backdropClasses:
    "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
};
