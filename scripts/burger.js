var e=document.querySelector(".header"),o=document.querySelector(".header__nav"),n=e.querySelector(".js-toggle-button"),t=n.querySelector(".visually-hidden"),r=()=>{e.classList.contains("header--js-menu-opened")?t.textContent="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E":t.textContent="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E",e.classList.toggle("header--js-menu-opened"),o.classList.toggle("nav--js-menu-opened")},s=()=>{n.addEventListener("click",r)};export{s as addBurgerHandler};