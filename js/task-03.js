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

// const galery = document.querySelector(".gallery");
// console.log(galery);

// function makeImageList(array){
//   return array.map(item => {
//    const createImg = document.createElement('img');
//    createImg.src = item.url;
//     createImg.alt = item.alt;
//     createImg.width = 200; 
//     createImg.height = 150;
//    return createImg;
    
//   })
// }

// // console.log(makeImageList(images));

// function showImg(){
// const items = makeImageList(images)

//   galery.append(...items);
// }

// showImg()

const createGalleryItem = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 250 height = 170></li>`;
const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);
const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryList.setAttribute("style", "list-style-type:none; display: flex; gap: 20px;");
 

