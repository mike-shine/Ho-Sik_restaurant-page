// const body = document.querySelector('body');
const contentDiv = document.getElementById('content');

const header = document.createElement('div');
header.classList.add('headerParent');
contentDiv.appendChild(header);

const h1 = document.createElement('h1');
h1.classList.add('headerItem');
h1.textContent = '好好食 中国餐厅 (Ho Sik Chinese Restaurant)';
header.appendChild(h1);

const dimSumPic = document.createElement('img');
dimSumPic.src = '../public/dimSumPic.jpg';
header.appendChild(dimSumPic);
