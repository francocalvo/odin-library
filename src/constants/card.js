export function createCardHTML(book) {
  return `
        <a href="#"
          class="flex flex-col items-center justify-center bg-white border rounded-lg shadow-me h-fit md:h-80 p-2 md:flex-row md:items-center md:w-168 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover rounded-t-lg w-48 h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="${book.cover}" alt="" />
          <div class="flex flex-col items-center justify-between p-4 leading-normal md:items-start">
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
              <li>Estado: no leído</li>
            </ul>
          </div>
        </a>
    `;
}
