var n=document.querySelector(".catalog__form"),e=n.querySelector(".form__range-slider"),r=n.querySelector(".form__input--min-price"),o=n.querySelector(".form__input--max-price"),_=0,a=()=>{e.noUiSlider.set([r.value,o.value])},c=()=>{noUiSlider.create(e,{range:{min:0,max:975},start:[0,900],step:1,connect:!0,format:{to:t=>Math.round(t).toString(),from:t=>parseFloat(t)}});let i=e.querySelector('[data-handle="0"]'),S=e.querySelector('[data-handle="1"]');i.setAttribute("aria-label","\u041F\u043E\u043B\u0437\u0443\u043D\u043E\u043A \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0446\u0435\u043D\u044B"),S.setAttribute("aria-label","\u041F\u043E\u043B\u0437\u0443\u043D\u043E\u043A \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0446\u0435\u043D\u044B"),e.noUiSlider.on("update",()=>{let t=e.noUiSlider.get();_>2?(r.value=t[0],o.value=t[1]):_+=1}),n.addEventListener("reset",()=>{e.noUiSlider.set([0,900])}),r.addEventListener("change",a),o.addEventListener("change",a)};export{c as initRangeSlider};
