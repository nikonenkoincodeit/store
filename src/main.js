import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { getQuery } from "./api";
import { createGallery } from "./markup";
import { galleryEl, loadMoreBtn } from "./refs";

const queryParameters = {
  limit: 20,
  skip: 0,
};

loadMoreBtn.addEventListener("click", onButtonClick);

renderRequest(queryParameters);

function renderMarkup(markup) {
  galleryEl.insertAdjacentHTML("beforeend", markup);
}

function onButtonClick() {
  queryParameters.skip += queryParameters.limit;
  renderRequest(queryParameters);
}

function renderRequest(params) {
  getQuery(params).then(({ products }) => {
    const markup = createGallery(products);
    renderMarkup(markup);
  });
}
