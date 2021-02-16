const menu = () => {
  const contentDiv = document.getElementById('content');

  const header = document.createElement('div');
  header.classList.add('headerParent');
  contentDiv.appendChild(header);

  const bodySection = document.createElement('div');
  bodySection.classList.add('bodyParent');
  contentDiv.appendChild(bodySection);

  const h1 = document.createElement('h1');
  h1.classList.add('headerItem');
  h1.textContent = '菜单 (Menu)';
  header.appendChild(h1);

  const appetizerSection = document.createElement('div');
  appetizerSection.classList.add('bodyItem', "sectionParent");
  bodySection.appendChild(appetizerSection);

  const appetizerHeading = document.createElement('h2');
  appetizerHeading.classList.add('sectionItem');
  appetizerHeading.textContent = 'Appetizers';
  appetizerSection.appendChild(appetizerHeading);

  const appetizerItems = document.createElement('p');
  appetizerItems.classList.add('sectionItem');
  appetizerItems.setAttribute('style', 'white-space: pre;');
  appetizerItems.textContent = 'House Egg Roll - $1.79 \nPan-Fried Pork Dumplings (8) - $7.99 \nBeef on Sticks (4) - $9.99 \nEdamame - $3.99 \nSweet and Sour Ribs - $7.99';
  appetizerSection.appendChild(appetizerItems);

  const soupSection = document.createElement('div');
  soupSection.classList.add('bodyItem', "sectionParent");
  bodySection.appendChild(soupSection);

  const soupHeading = document.createElement('h2');
  soupHeading.classList.add('sectionItem');
  soupHeading.textContent = 'Soups';
  soupSection.appendChild(soupHeading);

  const soupItems = document.createElement('p');
  soupItems.classList.add('sectionItem');
  soupItems.setAttribute('style', 'white-space: pre;');
  soupItems.textContent = 'Hot and Sour Soup - $4.49 \nWon Ton Soup - $4.49 \nSeafood Bean Curd Soup - $4.49 \nVegetable Soup - $4.49';
  soupSection.appendChild(soupItems);

  const noodlesAndRiceSection = document.createElement('div');
  noodlesAndRiceSection.classList.add('bodyItem', "sectionParent");
  bodySection.appendChild(noodlesAndRiceSection);

  const noodlesAndRiceHeading = document.createElement('h2');
  noodlesAndRiceHeading.classList.add('sectionItem');
  noodlesAndRiceHeading.textContent = 'Noodles & Rice';
  noodlesAndRiceSection.appendChild(noodlesAndRiceHeading);

  const noodlesAndRiceItems = document.createElement('p');
  noodlesAndRiceItems.classList.add('sectionItem');
  noodlesAndRiceItems.setAttribute('style', 'white-space: pre;');
  noodlesAndRiceItems.textContent = 'Vegetarian Chow Mein - $8.99 \nBBQ Pork or Chicken Chow Mein - $10.99 \nShrimp Chow Mein - $11.49 \nHouse Special Lo Mein - $8.99 \nCurry Beef Noodle - $8.99 \nVegetarian Fried Rice (entrée size) - $7.99 \nChicken or Pork Fried Rice (entrée size) - $9.99';
  noodlesAndRiceSection.appendChild(noodlesAndRiceItems);

  const chefSpecialsSection = document.createElement('div');
  chefSpecialsSection.classList.add('bodyItem', "sectionParent");
  bodySection.appendChild(chefSpecialsSection);

  const chefSpecialsHeading = document.createElement('h2');
  chefSpecialsHeading.classList.add('sectionItem');
  chefSpecialsHeading.textContent = 'Chef Specials';
  chefSpecialsSection.appendChild(chefSpecialsHeading);

  const chefSpecialsItems = document.createElement('p');
  chefSpecialsItems.classList.add('sectionItem');
  chefSpecialsItems.setAttribute('style', 'white-space: pre;');
  chefSpecialsItems.textContent = 'Ma Po Tofu - $10.99 \nJalapeño Chicken - $11.99 \nOrange Sesame Beef - $12.99 \nShrimp with Lobster Sauce - $11.99 \nSeafood Delight - $15.99 \nSalt & Black Pepper Squid - $15.99  ';
  chefSpecialsSection.appendChild(chefSpecialsItems);

  const entreeSection = document.createElement('div');
  entreeSection.classList.add('bodyItem', "sectionParent");
  bodySection.appendChild(entreeSection);

  const entreeHeading = document.createElement('h2');
  entreeHeading.classList.add('sectionItem');
  entreeHeading.textContent = 'Classic Entrees';
  entreeSection.appendChild(entreeHeading);

  const entreeItems = document.createElement('p');
  entreeItems.classList.add('sectionItem');
  entreeItems.setAttribute('style', 'white-space: pre;');
  entreeItems.textContent = 'Chow Mein - $11.99 \nMoo Shu - $11.99 \nHunan - $11.99 \nSzechuan - $11.99 \nGarlic Sauce - $10.99 \nBlack Bean Sauce - $10.99 \nPeanut Kung Pao - $11.99 \nCashew - $11.99 \nMongolian - $10.99 \nPepper Steak Style - $11.99 \nGeneral Tso\'s Style - $10.99 \nOrange Chicken Style - $11.99 ';
  entreeSection.appendChild(entreeItems);
}

export default menu;