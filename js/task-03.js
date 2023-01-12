const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// .map(img => `<li><img src = "${img.url}" alt = "${img.alt}"  width = 320 height = 240 /></li>`)
// 1) Деструктуризация {url, alt} + шаблонная строка + map() => возвращает массив + стили CSS (style = "display: flex; height: auto")
// 2) .join() массив приводит к строке ([] => " ")
// 3) добавление шаблона HTML-разметки в базовую разметку insertAdjacentHTML()
// 4) добавление стилей .list через list.style = "" или  setAttribute()
// 5) добавление стилей .picture.style
const list = document.querySelector('.gallery');

const markup = images
  .map(({ url, alt }) => `<li><img class = "image" src = "${url}" alt = "${alt}" width = 320 style = "display: flex; height: auto"/></li>`)
  .join('');

list.insertAdjacentHTML('beforeend', markup);
list.style = 'list-style: none; display: flex; flex-direction: column; gap: 10px; justify-content: center; align-items: center;';
// list.setAttribute('style', 'list-style-type: none; display: flex; flex-direction: column; gap: 10px; justify-content: center; align-items: center;');
//
// const picture = document.querySelector('.image');
// picture.style.display = 'block';
// picture.style.maxWidth = '100%';
// picture.style.height = 'auto';
//
//
//
//
//
//
//
//
//
//
//
//
//
// 1
// const galleryListEl = document.querySelector('.gallery');
// galleryListEl.style = 'display:flex; flex-direction: column; gap:10px; list-style:none; align-items: center';

// images.forEach(image => {
//   galleryListEl.insertAdjacentHTML(
//     'afterbegin',
//     `<li class = "gallery-item"> <img src = "${image.url}" alt = "${image.alt}" width = 320 height = 240 style = display:block></li>`
//   );
// });
// console.log('galleryListEl', galleryListEl);
//
// 2
// const galleryListEl = document.querySelector('.gallery');
// galleryListEl.style = 'display:flex; flex-direction: column; gap:10px; list-style:none; align-items: center';

// for (const image of images) {
//   galleryListEl.insertAdjacentHTML(
//     'afterbegin',
//     `<li class = "gallery-item"> <img src = "${image.url}" alt = "${image.alt}" width = 320 height = 240 style = display:block></li>`
//   );
// }

// console.log('galleryListEl', galleryListEl);
