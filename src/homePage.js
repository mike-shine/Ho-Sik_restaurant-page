const homePage = () => {

const contentGoesHere = document.getElementById('contentGoesHere');
const lineBreak = document.createElement('br');

const header = document.createElement('div');
header.classList.add('headerParent');
contentGoesHere.appendChild(header);

const bodySection = document.createElement('div');
bodySection.classList.add('bodyParent');
contentGoesHere.appendChild(bodySection);

const h1 = document.createElement('h1');
h1.classList.add('headerItem');
h1.textContent = '好好食 中国餐厅 (Ho Ho Sik Chinese Restaurant)';
header.appendChild(h1);




/* Image carousel  */


  const imageCarousel = document.createElement('div');
  imageCarousel.classList.add('imageCarousel');
  bodySection.appendChild(imageCarousel);

  const previousButton = document.createElement('a');
  previousButton.classList.add('previous');
  previousButton.addEventListener('click', () => changeImages(-1));
  previousButton.textContent = '❮';
  imageCarousel.appendChild(previousButton);

  const nextButton = document.createElement('a');
  nextButton.classList.add('next');
  nextButton.addEventListener('click', () => changeImages(1));
  nextButton.textContent = '❯';
  imageCarousel.appendChild(nextButton);

  addImagesToCarousel('baoPic.jpg', '../public/images-on-homepage', 0, 3);
  addImagesToCarousel('dimSumPic.jpg', '../public/images-on-homepage', 1, 3);
  addImagesToCarousel('shrimpPic.jpg', '../public/images-on-homepage', 2, 3);

  function addImagesToCarousel(name, path, index, howManyPics) {

    const newImage = document.createElement('div');
    newImage.classList.add('images', 'fade', 'blurredEdges');
    imageCarousel.appendChild(newImage);

    const imagePosition = document.createElement('div');
    imagePosition.classList.add('imagePosition');
    imagePosition.textContent = `${index + 1} of ${howManyPics}`;
    newImage.appendChild(imagePosition);

    const actualPicture = document.createElement('img');
    actualPicture.src = `${path}/${name}`;
    actualPicture.style.width = '100%';
    newImage.appendChild(actualPicture);
  }

  let imageIndex = 1;
  displayImages(1);
  function changeImages(number) {
    displayImages(imageIndex += number);
  }

  function displayImages(activeImage) {
    const allImages = document.getElementsByClassName('images');
    if (activeImage > allImages.length) {
      imageIndex = 1;
    }
    if (activeImage < 1) {
      imageIndex = allImages.length;
    }
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].style.display = 'none';
    }

    // allImages.forEach((item, index) => {
    //   allImages[index].style.display = 'none';
    // });
    allImages[imageIndex - 1].style.display = 'block';
  }





const introText = document.createElement('div')
introText.classList.add('bodyItem', 'introTextParent');
bodySection.appendChild(introText);

const introHeader = document.createElement('h2');
introHeader.classList.add('introTextItem');
introHeader.textContent = 'Welcome to the website of Ho Ho Sik Chinese Restaurant!';
introHeader.style.fontStyle = 'italic';
introText.appendChild(introHeader);

const paragraph = document.createElement('p');
paragraph.classList.add('introTextItem');
paragraph.setAttribute('style', 'white-space: pre;');
paragraph.textContent = `We offer our customers delicious, authentically prepared southern Chinese cuisine at a reasonable price. \r\n`;
paragraph.textContent += `Available for delivery on UberEats, GrubHub, PostMates, and Fantuan. For in-store pickup, please give us a call to place your order. \r\n`;
paragraph.textContent += 'Dim Sum: 8:00 A.M. - 1:30 P.M. \n    *(only on Friday, Saturday, and Sunday)*\nLunch: 11:00 A.M. - 4:30 P.M. \nDinner: 4:30 P.M. - 10:00 P.M.';
introText.appendChild(paragraph);

}




export default homePage;