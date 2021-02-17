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

// const pictureDiv = document.createElement('div');
// pictureDiv.classList.add('pictureParent', 'bodyItem');
// bodySection.appendChild(pictureDiv);

// const dimSumPic = document.createElement('img');
// dimSumPic.src = '../public/dimSumPic.jpg';
// dimSumPic.classList.add('pictureItem');
// dimSumPic.style.width = '300px';
// dimSumPic.style.height = 'auto';
// pictureDiv.appendChild(dimSumPic);

// const shrimpPic = document.createElement('img');
// shrimpPic.src = '../public/shrimpPic.jpg';
// shrimpPic.classList.add('pictureItem');
// shrimpPic.style.width = '300px';
// shrimpPic.style.height = 'auto';
// pictureDiv.appendChild(shrimpPic);

// const baoPic = document.createElement('img');
// baoPic.src = '../public/baoPic.jpg';
// baoPic.classList.add('pictureItem');
// baoPic.style.width = '200px';
// baoPic.style.height = 'auto';
// pictureDiv.appendChild(baoPic);


/* Image carousel  */

// s̶l̶i̶d̶e̶s̶h̶o̶w̶ c̶o̶n̶t̶a̶i̶n̶e̶r̶ d̶i̶v̶

  // d̶i̶v̶ w̶i̶t̶h̶ c̶l̶a̶s̶s̶e̶s̶ m̶y̶S̶l̶i̶d̶e̶s̶ a̶n̶d̶ f̶a̶d̶e̶
    // d̶i̶v̶ w̶i̶t̶h̶ c̶l̶a̶s̶s̶ n̶u̶m̶b̶e̶r̶T̶e̶x̶t̶ a̶n̶d̶ t̶e̶x̶t̶ o̶f̶ t̶h̶e̶ p̶i̶c̶'̶s̶ r̶e̶l̶a̶t̶i̶v̶e̶   l̶o̶c̶a̶t̶i̶o̶n̶ (̶1̶/̶3̶,̶ 3̶/̶7̶,̶ e̶t̶c̶)̶
    // i̶m̶g̶ w̶i̶t̶h̶ s̶r̶c̶ a̶n̶d̶ 1̶0̶0̶%̶ w̶i̶d̶t̶h̶
    // d̶i̶v̶ w̶i̶t̶h̶ c̶l̶a̶s̶s̶ t̶e̶x̶t̶ a̶n̶d̶ t̶h̶e̶ t̶e̶x̶t̶ o̶f̶ t̶h̶e̶ c̶a̶p̶t̶i̶o̶n̶
  // (̶r̶e̶p̶e̶a̶t̶ a̶b̶o̶v̶e̶ t̶h̶r̶e̶e̶ l̶i̶n̶e̶s̶ f̶o̶r̶ a̶s̶ m̶a̶n̶y̶ i̶m̶a̶g̶e̶s̶ a̶s̶ y̶o̶u̶ h̶a̶v̶e̶)̶

  // n̶e̶x̶t̶ a̶n̶d̶ p̶r̶e̶v̶i̶o̶u̶s̶ b̶u̶t̶t̶o̶n̶s̶
  // anchor tag with class prev and an eventListener on plusSlides function, param of -1. text content is &#10094;
  //// anchor tag with class next and an eventListener on plusSlides function, param of 1. text content is &#10095;

  const imageCarousel = document.createElement('div');
  imageCarousel.classList.add('imageCarousel');
  // imageCarousel.style.width = 'auto';
  // imageCarousel.style.height = 'auto';
  contentGoesHere.appendChild(imageCarousel);

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
    newImage.classList.add('images', 'fade');
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