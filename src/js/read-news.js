import { FavoriteStorage, ReadStorage } from './localStorage';
import { searchInputAnimation } from './search-input-animation';
import { oNmobileMenu } from './mobile-menu';
import { currentPage } from './current-page';
import { onCardClick } from './onCardClick';
const favoriteStorage = new FavoriteStorage();
const readStorage = new ReadStorage();
const news = readStorage.getNews();

import { onThemeChange } from './switcher';


oNmobileMenu();
searchInputAnimation();
currentPage();
// onThemeChange();
// onThemeChange();
// onThemeChange();
// setTheme();

// Comment this
// const dates = ['27/03/2023', '26/03/2023', '25/03/2023'];

// News array for test
// const news = [
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '27/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '27/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '26/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '26/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '25/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '25/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
// ];

// Uncomment this

const dates = [...new Set(news.map(obj => obj.readDate))];

const accordionEl = document.querySelector('.accordion');

function renderAccordion() {
  const markup = dates
    .map(date => {
      return `<div class="accordion-container">
        <div class="accordion-date"><span class="accordion-paragraph">${date}</span><i class="down"></i>
        <hr />
            <div class="newsgallery">
                <ul class="gallery__cards-list visually-hidden"></ul>
            </div>
        </div>
      </div>`;
    })
    .join('');
  return markup;
}

accordionEl.innerHTML = renderAccordion();
const accordionContainer = document.getElementsByClassName(
  'accordion-container'
);
const accordion = document.querySelectorAll('.accordion-date');

renderAccordionNews(accordion);

function renderAccordionNews(arr) {
  arr.forEach(element => {
    const accordionElDate = element.innerText;
    // console.log(`Checking for ${accordionElDate}`);
    news.map(
      ({ readDate, src, title, url, info, published_date, alt, section }) => {
        if (readDate === accordionElDate) {
          const favoriteIcon = `<span>
                                <svg
                                    class="item-news__block-icon active-news-icon"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 37 32"
                                >
                                    <path
                                    style="stroke: var(--color1, #4440f7)"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke-miterlimit="4"
                                    stroke-width="2.2857"
                                    d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"
                                    ></path>
                                </svg>
                            </span>`;

          let activeClass = '';
          let activeText = '';
          if (
            favoriteStorage.hasNews({
              url,
            })
          ) {
            activeText = 'Remove from favorite';
            activeClass = 'favorite-button__activ';
          } else {
            activeText = 'Add to favorite';
            activeClass = 'add-to-favorite';
          }
          const markup = `<li class="card-photo opacity">
                            <div class="image-wrapper">
                                <img class="photo" src="${src}" alt="${alt}" loading="lazy" />
                            </div>
                            <div class="card-category">${section}</div>
                            <button type="button" class="${activeClass}">${activeText}${favoriteIcon}</button>
                            <h2 class="card-title">${title}</h2>
                            <p class="card-info">${info}</p>
                            <span class="card-date">${published_date}</span>
                            <a href="${url}" class="card-url">Read more</a>
                            <span class="news__read-status">Already read</span>
                        </li>`;
          const contentEl = element.querySelector('.gallery__cards-list');
          contentEl.insertAdjacentHTML('beforeend', markup);
        }
      }
    );
  });
  document.querySelector('.accordion-date').classList.toggle('active');
  document
    .querySelector('.gallery__cards-list')
    .classList.toggle('visually-hidden');
}

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function (e) {
    if (e.target !== this) {
      return;
    }
    this.classList.toggle('active');
    const currentGallery = this.querySelector('.gallery__cards-list');
    currentGallery.classList.toggle('visually-hidden');
  });
}

accordionEl.addEventListener('click', onCardClick);
