import icons from 'url:../../img/icons.svg';
import Views from './View';

class PaginationView extends Views {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    const curPage = this._data.page;
    console.log(curPage, numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1)
      return `<button class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;

    // Last page
    if (curPage === numPages && numPages > 1)
      return `<button class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>${curPage - 1}</span>
  </button>`;

    //Other page
    if (curPage < numPages && numPages >= 1)
      return `
  <button class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>${curPage - 1}</span>
  </button>
  
  <button class="btn--inline pagination__btn--next">
  <span>Page ${curPage + 1}</span>
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
  </svg>
</button>
  `;

    // Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();