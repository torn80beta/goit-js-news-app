var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,a.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){t[e]=n},e.parcelRequired7c6=a);var o=a("31u3U"),s=a("7Sa78"),r=a("iJAZj"),i=a("8FnLx");const l=new(0,o.FavoriteStorage),c=new(0,o.ReadStorage);(0,i.oNmobileMenu)(),(0,r.searchInputAnimation)(),function(){const e=document.querySelector(".nav__link--current");e&&e.classList.remove("nav__link--current");const n=window.location.pathname;console.log(n);const t=[...document.querySelectorAll(".nav__list .nav__link")];"/goit-js-news-app/read.html"!==n?"/goit-js-news-app/favorite.html"!==n||t[1].classList.add("nav__link--current"):t[2].classList.add("nav__link--current")}();const d=document.querySelector(".favorite__conteiner");!function(e){console.log(e);const n=e.map((({src:e,title:n,url:t,info:a,published_date:o,alt:s,section:r})=>{let i="",d="",u="",p="",v="";return l.hasNews({url:t})?(d="Remove from favorite",i="favorite-button__activ",u="news-icon"):(d="Add to favorite",i="add-to-favorite",u="active-news-icon"),c.hasNews({url:t})?(p=" opacity",v='<span class="news__read-status">Already read <span class="card-icon"></span>'):p="",`<li class="card-photo${p}">\n                            <div class="image-wrapper">\n                                <img class="photo" src="${e}" alt="${s}" loading="lazy" />\n                            </div>\n                            <div class="card-category">${r}</div>\n                            <button type="button" class="${i}">${d} <span><svg class="item-news__block-icon ${u}" width="16" height="16" viewBox="0 0 37 32">\n                            <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"\n                                stroke-width="2.2857"\n                                d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z">\n                            </path>\n                        </svg></span></button>\n                            <h2 class="card-title">${n}</h2>\n                            <p class="card-info">${a}</p>\n                            <span class="card-date">${o}</span>\n                            <a href="${t}" class="card-url">Read more</a>\n                            ${v}\n                        </li>`})).join("");d.innerHTML=n}(l.getNews()),d.addEventListener("click",s.onCardClick),d.addEventListener("click",s.onReadClick);
//# sourceMappingURL=favorite.88d66fa9.js.map
