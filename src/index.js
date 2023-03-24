import { axiosInstance, newsApi } from './js/api/news-api';
import { pagination, onChangePage } from './js/pagination';
import { filtrBtnClickHandler } from './js/filter-categories';
import { auth } from './js/ui/firebase';
import { monitorAuthState } from './js/ui/ui';
import './js/modal';

// newsApi.getCategories(); // Returns list of 50 categories
// newsApi.getMostPopularNews(); // Returns array of Most popular news
// newsApi.getNewsBySearchQuery(); // Returns array of articles by search word. Can get pages
// newsApi.getNewsByCategory(); // Returns array of articles by category. Can get pages

/* Firebase auth*/

monitorAuthState();
// const logoutButton = document.getElementById('logout');
// logoutButton.addEventListener('click', onLogout);

async function onLogout() {
  const userSignOut = await auth.signOut();
}

/* Search by word */

const searchQuery = document.querySelector('.search-form');
searchQuery.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(e) {
  e.preventDefault();
  const query = searchQuery.query.value;
  console.log(query);
  newsApi.resetPage();
  let news = [];
  newsApi.getNewsBySearchQuery(query).then(res => {
    news = res;
    console.log(news);
    newsApi.getTotalHits();
  });
}

/* Pagination */

pagination.renderPagination(pagination.createPagination(50, 1));

document
  .getElementById('pagination-container')
  .addEventListener('click', ev => {
    if (ev.target.nodeName === 'BUTTON') {
      onChangePage(ev.target);
      let news = [];
      newsApi.getNewsByCategory(pagination.genCurrentPage()).then(res => {
        news = res;
        // console.log(news);
        newsApi.getTotalHits();
      });
    }
  });

// ===============filter===================

const filtrButtonsContainerRef = document.querySelector('ul.news__filtr-menu');

filtrButtonsContainerRef.addEventListener('click', filtrBtnClickHandler);
