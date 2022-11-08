import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { getQuery } from "./api";
import { createGallery } from "./markup";
import { galleryEl, loadMoreBtn, formEl } from "./refs";

const queryParameters = {
  searchQuery: "",
  limit: 20,
  skip: 0,
  total: 0,
};

loadMoreBtn.addEventListener("click", onButtonClick);
formEl.addEventListener("submit", onFormSubmit);

renderRequest(queryParameters);

function renderMarkup(markup) {
  galleryEl.insertAdjacentHTML("beforeend", markup);
}

function onButtonClick(event) {
  renderRequest(queryParameters);
  event.currentTarget.classList.add("is-hidden");
}

function renderRequest(params) {
  getQuery(params)
    .then(({ products, total }) => {
      const markup = createGallery(products);
      renderMarkup(markup);
      queryParameters.total = total;
      queryParameters.skip += queryParameters.limit;
    })
    .finally(() => {
      if (queryParameters.skip < queryParameters.total) {
        loadMoreBtn.classList.remove("is-hidden");
      }
    });
}

function onFormSubmit(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.search.value.trim();

  if (!inputValue) {
    return;
  }

  queryParameters.searchQuery = inputValue;
  queryParameters.skip = 0;

  galleryEl.innerHTML = "";

  renderRequest(queryParameters);
}
