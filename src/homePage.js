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

const pictureDiv = document.createElement('div');
pictureDiv.classList.add('pictureParent', 'bodyItem');
bodySection.appendChild(pictureDiv);

const dimSumPic = document.createElement('img');
dimSumPic.src = '../public/dimSumPic.jpg';
dimSumPic.classList.add('pictureItem');
dimSumPic.style.width = '300px';
dimSumPic.style.height = 'auto';
pictureDiv.appendChild(dimSumPic);

const shrimpPic = document.createElement('img');
shrimpPic.src = '../public/shrimpPic.jpg';
shrimpPic.classList.add('pictureItem');
shrimpPic.style.width = '300px';
shrimpPic.style.height = 'auto';
pictureDiv.appendChild(shrimpPic);

const baoPic = document.createElement('img');
baoPic.src = '../public/baoPic.jpg';
baoPic.classList.add('pictureItem');
baoPic.style.width = '200px';
baoPic.style.height = 'auto';
pictureDiv.appendChild(baoPic);

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