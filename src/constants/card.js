export function createCardHTML(book) {
  return `
        <a href="#"
          class="flex flex-col justify-between items-center bg-white border rounded-lg shadow-me h-fit md:h-80 p-2 md:flex-row md:items-center md:w-168 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover rounded-b-lg w-48 h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="${book.cover}" alt="" />
          <div class="flex flex-col flex-1 items-center justify-between p-4 leading-normal md:items-start">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ${book.title}
            </h5>

            <p
              class="mb-3 font-normal max-h-0 max-w-96 md:max-h-28 overflow-hidden md:overflow-scroll text-gray-700 dark:text-gray-400">
              ${book.description}
            </p>
            <ul class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <li>Autor: ${book.authors}</li>
              <li>Publised: ${book.publish}</li>
              ${book.pages !== null ? `<li>Pages: ${book.pages}</li>` : ""}
              <li class="status">Estado: no leído</li>
            </ul>
          </div>

            <button
              type="button"
              class="md:self-end text-white bg-nord9 hover:bg-nord10 focus:outline-none focus:ring-4 focus:ring-nord14 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Leído
            </button>
        </a>
    `;
}
