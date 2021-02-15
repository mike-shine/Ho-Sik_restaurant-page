console.log('Gong hey fat choi!');

const body = document.querySelector('body');

const header = document.createElement('div');
header.classList.add('headerParent');
body.appendChild(header);

const h1 = document.createElement('h1');
h1.classList.add('headerItem');
h1.textContent = '好好食 中国餐厅 (Ho Sik Chinese Restaurant)';
header.appendChild(h1);
