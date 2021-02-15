// const body = document.querySelector('body');
const contentDiv = document.getElementById('content');
const lineBreak = document.createElement('br');

const header = document.createElement('div');
header.classList.add('headerParent');
contentDiv.appendChild(header);

const bodySection = document.createElement('div');
bodySection.classList.add('bodyParent');
contentDiv.appendChild(bodySection);

const h1 = document.createElement('h1');
h1.classList.add('headerItem');
h1.textContent = '好好食 中国餐厅 (Ho Sik Chinese Restaurant)';
header.appendChild(h1);

const dimSumPic = document.createElement('img');
dimSumPic.src = '../public/dimSumPic.jpg';
dimSumPic.classList.add('bodyItem');
dimSumPic.style.width = '30%';
dimSumPic.style.height = 'auto';
bodySection.appendChild(dimSumPic);

const introText = document.createElement('div')
introText.classList.add('bodyItem', 'introTextParent');
bodySection.appendChild(introText);

const introHeader = document.createElement('h2');
introHeader.classList.add('introTextItem');
introHeader.textContent = 'Welcome to the website of Ho Sik Chinese Restaurant!';
introHeader.style.fontStyle = 'italic';
introText.appendChild(introHeader);

const paragraph1 = document.createElement('p');
paragraph1.classList.add('introTextItem');
paragraph1.textContent = `We offer our customers delicious, authentically prepared southern Chinese cuisine at a reasonable price.`;
introText.appendChild(paragraph1);

introText.appendChild(lineBreak);

const paragraph2 = document.createElement('p');
paragraph2.classList.add('introTextItem');
paragraph2.textContent = `Available for delivery on UberEats, GrubHub, PostMates, and Fantuan. For in-store pickup, please give us a call to place your order.`;
introText.appendChild(paragraph2);


