const menu = () => {
  const contentGoesHere = document.getElementById('contentGoesHere');

  class MenuItem {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }
  }



  /* Large structural elements  */
  const header = document.createElement('div');
  header.classList.add('headerParent');
  contentGoesHere.appendChild(header);

  const bodySection = document.createElement('div');
  bodySection.classList.add('bodyParent');
  contentGoesHere.appendChild(bodySection);

  const h1 = document.createElement('h1');
  h1.classList.add('headerItem');
  h1.textContent = '菜单 (Menu)';
  header.appendChild(h1);




  /* Appetizer menu section  */

  const appetizerSection = document.createElement('div');
  appetizerSection.classList.add('bodyItem', "sectionParent");
  bodySection.appendChild(appetizerSection);

  const appetizerHeading = document.createElement('h2');
  appetizerHeading.classList.add('sectionItem');
  appetizerHeading.textContent = 'Appetizers';
  appetizerSection.appendChild(appetizerHeading);

  const appetizerItemsContainer = document.createElement('div');
  appetizerItemsContainer.classList.add('sectionItem');
  appetizerSection.appendChild(appetizerItemsContainer);

  const eggRoll = new MenuItem('House Egg Roll', '1.79');
  addItemToMenu(eggRoll, appetizerItemsContainer, 'menuItem', 'menuItemName');

  const dumplings = new MenuItem('Pan-Fried Pork Dumplings (8)', '7.99');
  addItemToMenu(dumplings, appetizerItemsContainer, 'menuItem', 'menuItemName');

  const beefOnStick = new MenuItem('Beef on Sticks (4)', '9.99');
  addItemToMenu(beefOnStick, appetizerItemsContainer, 'menuItem', 'menuItemName');

  const edamame = new MenuItem('Edamame', '3.99');
  addItemToMenu(edamame, appetizerItemsContainer, 'menuItem', 'menuItemName');

  const sweetnsourribs = new MenuItem('Sweet and Sour Ribs', '7.99');
  addItemToMenu(sweetnsourribs, appetizerItemsContainer, 'menuItem', 'menuItemName');




  /* soup menu section  */

  const soupSection = document.createElement('div');
  soupSection.classList.add('bodyItem', "sectionParent");
  bodySection.appendChild(soupSection);

  const soupHeading = document.createElement('h2');
  soupHeading.classList.add('sectionItem');
  soupHeading.textContent = 'Soups';
  soupSection.appendChild(soupHeading);

  const soupItemsContainer = document.createElement('div');
  soupItemsContainer.classList.add('sectionItem');
  soupSection.appendChild(soupItemsContainer);

  const hotAndSourSoup = new MenuItem('Hot and Sour Soup', '4.49');
  addItemToMenu(hotAndSourSoup, soupItemsContainer, 'menuItem', 'menuItemName');

  const wontonSoup = new MenuItem('Won Ton Soup', '4.49');
  addItemToMenu(wontonSoup, soupItemsContainer, 'menuItem', 'menuItemName');

  const seafoodSoup = new MenuItem('Seafood Bean Curd Soup', '4.49');
  addItemToMenu(seafoodSoup, soupItemsContainer, 'menuItem', 'menuItemName');

  const vegetableSoup = new MenuItem('Vegetable Soup', '3.99');
  addItemToMenu(vegetableSoup, soupItemsContainer, 'menuItem', 'menuItemName');


  // 'Hot and Sour Soup - $4.49 \nWon Ton Soup - $4.49 \nSeafood Bean Curd Soup - $4.49 \nVegetable Soup - $4.49';


  /* noodles and rice menu section  */

  const noodlesAndRiceSection = document.createElement('div');
  noodlesAndRiceSection.classList.add('bodyItem', "sectionParent");
  bodySection.appendChild(noodlesAndRiceSection);

  const noodlesAndRiceHeading = document.createElement('h2');
  noodlesAndRiceHeading.classList.add('sectionItem');
  noodlesAndRiceHeading.textContent = 'Noodles & Rice';
  noodlesAndRiceSection.appendChild(noodlesAndRiceHeading);

  const noodlesAndRiceItemsContainer = document.createElement('div');
  noodlesAndRiceItemsContainer.classList.add('sectionItem');
  noodlesAndRiceSection.appendChild(noodlesAndRiceItemsContainer);

  const vegetarianChowMein = new MenuItem('Vegetarian Chow Mein', '8.99', 'add chicken - $2 \nadd BBQ pork - $2 \nadd shrimp - $2.50');
  addItemToMenu(vegetarianChowMein, noodlesAndRiceItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const vegetarianFriedRice = new MenuItem('Vegetarian Fried Rice', '7.99', 'add chicken - $2 \nadd BBQ pork - $2 \nadd shrimp - $2.50');
  addItemToMenu(vegetarianFriedRice, noodlesAndRiceItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const loMein = new MenuItem('House Special Lo Mein', '7.99');
  addItemToMenu(loMein, noodlesAndRiceItemsContainer, 'menuItem', 'menuItemName');

  const curryBeefNoodle = new MenuItem('Curry Beef Noodle', '8.99');
  addItemToMenu(curryBeefNoodle, noodlesAndRiceItemsContainer, 'menuItem', 'menuItemName');



  // 'House Special Lo Mein - $8.99 \nCurry Beef Noodle - $8.99 ;




  /* chef specials menu section  */

  const chefSpecialsSection = document.createElement('div');
  chefSpecialsSection.classList.add('bodyItem', "sectionParent");
  bodySection.appendChild(chefSpecialsSection);

  const chefSpecialsHeading = document.createElement('h2');
  chefSpecialsHeading.classList.add('sectionItem');
  chefSpecialsHeading.textContent = 'Chef Specials';
  chefSpecialsSection.appendChild(chefSpecialsHeading);

  const chefSpecialsItemContainer = document.createElement('div');
  chefSpecialsItemContainer.classList.add('sectionItem');
  chefSpecialsSection.appendChild(chefSpecialsItemContainer);

  /* Chef's specials being constructed and added to menu  */

  const maPoTofu = new MenuItem('Ma Po Tofu', '10.99', 'Spicy home-style sauce slow cooked with soft tofu, \npeas, and carrots');
  addItemToMenu(maPoTofu, chefSpecialsItemContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const jalepenoChicken = new MenuItem('Jalepeno Chicken', '11.99', 'Jalepeno home-style sauce, thigh meat, green bell peppers, \nred bell peppers, and white onion');
  addItemToMenu(jalepenoChicken, chefSpecialsItemContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const orangeSesameBeef = new MenuItem('Orange Sesame Beef', '12.99', 'Sweet chili red-brown glaze, broccoli topped with  \norange peel');
  addItemToMenu(orangeSesameBeef, chefSpecialsItemContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const shrimpWithLobsterSauce = new MenuItem('Shrimp with Lobster Sauce', '11.99', 'Creamy egg sauce, shrimp, water chestnuts, peas, \nand carrots');
  addItemToMenu(shrimpWithLobsterSauce, chefSpecialsItemContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const seafoodDelight = new MenuItem('Seafood Delight', '15.99', 'White sauce, scallop, shrimp, imitation crab meat, \nbroccoli, snow peas, green bell peppers, mushroom, \nwater chestnuts, bamboo shoots, Chinese cabbage, \nbaby corn and carrots');
  addItemToMenu(seafoodDelight, chefSpecialsItemContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const saltAndBlackPepperSquid = new MenuItem('Salt and Black Pepper Squid', '15.99', 'Sauteed squid with green bell peppers, red bell \npeppers, and white onion');
  addItemToMenu(saltAndBlackPepperSquid, chefSpecialsItemContainer, 'menuItem', 'menuItemName', 'menuItemDescription');



  /* entree menu section  */

  const entreeSection = document.createElement('div');
  entreeSection.classList.add('bodyItem', "sectionParent");
  bodySection.appendChild(entreeSection);

  const entreeHeadingContainer = document.createElement('div');
  entreeHeadingContainer.classList.add('sectionItem');
  entreeSection.appendChild(entreeHeadingContainer);

  const entreeHeading = document.createElement('h2');
  entreeHeading.classList.add('headingItem', 'mainHeading');
  entreeHeading.textContent = 'Classic Entrees';
  entreeHeadingContainer.appendChild(entreeHeading);

  const entreeSubHeading = document.createElement('h5');
  entreeSubHeading.classList.add('headingItem', 'subHeading');
  entreeSubHeading.setAttribute('style', 'white-space: pre;');
  entreeSubHeading.textContent = 'Choice of Veggie, Pork, Chicken, \nTofu, Shrimp (+$1), or Steak (+$2)';
  entreeSubHeading.style.fontStyle = 'italic'
  entreeHeadingContainer.appendChild(entreeSubHeading);

  const entreeItemsContainer = document.createElement('div');
  entreeItemsContainer.classList.add('sectionItem');
  entreeSection.appendChild(entreeItemsContainer);

  /* Entrees being constructed and added to menu  */

  const chowMein = new MenuItem('Chow Mein', '11.99', 'White sauce, bean sprouts, cabbages, celery, \ngreen and white onions, and bamboo shoots');
  addItemToMenu(chowMein, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const mooShu = new MenuItem('Moo Shu', '11.99', 'Sweet brown sauce, broccoli, red bell \npeppers, snow peas, green bell peppers, white \nonion, mushroom, water chestnuts, bamboo shoots, \ncabbage, and baby corn');
  addItemToMenu(mooShu, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const hunan = new MenuItem('Hunan', '11.99', 'Chili brown sauce, broccoli, red bell \npeppers, snow peas, green bell peppers, \nwhite onion, mushroom, water chestnut, \nbamboo shoots, and Chinese cabbage');
  addItemToMenu(hunan, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const szechuan = new MenuItem('Szechuan', '11.99', 'Chili brown sauce, carrot, green onion, \ncelery, and bamboo shoots');
  addItemToMenu(szechuan, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const garlicSauce = new MenuItem('Garlic Sauce', '10.99', 'Sweet chili brown sauce, red and \n green bell peppers, white onions, bamboo \nshoots, and carrots');
  addItemToMenu(garlicSauce, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const blackBeanSauce = new MenuItem('Black Bean Sauce', '10.99', 'Spicy black bean sauce, red and \n green bell peppers, white onions, and bamboo shoots');
  addItemToMenu(blackBeanSauce, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const peanutKungPao = new MenuItem('Peanut Kung Pao', '11.99', 'Chili brown sauce, carrots, celery, water chestnuts, and \ngreen bell pepper, topped with peanuts')
  addItemToMenu(peanutKungPao, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const cashew = new MenuItem('Cashew', '11.99', 'Brown sauce with mushrooms, carrots, celery, water \nchestnuts, and green bell pepper, topped with cashews');
  addItemToMenu(cashew, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const mongolian = new MenuItem('Mongolian Style', '10.99', 'Sweet Mongolian sauce with white and \ngreen onions');
  addItemToMenu(mongolian, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const pepperSteak = new MenuItem('Pepper Steak style', '11.99', 'Brown sauce with white and green onion');
  addItemToMenu(pepperSteak, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const generalTsosStyle = new MenuItem('General Tso\'s style', '10.99', 'Sweet chili with red-brown glaze');
  addItemToMenu(generalTsosStyle, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');

  const orangeChickenStyle = new MenuItem('Orange Chicken style', '11.99', 'Sweet chili with red-brown glaze orange drizzle');
  addItemToMenu(orangeChickenStyle, entreeItemsContainer, 'menuItem', 'menuItemName', 'menuItemDescription');




  /* side menu section  */

  const sideSection = document.createElement('div');
  sideSection.classList.add('bodyItem', "sectionParent");
  bodySection.appendChild(sideSection);

  const sideHeading = document.createElement('h2');
  sideHeading.classList.add('sectionItem');
  sideHeading.textContent = 'Side Orders';
  sideSection.appendChild(sideHeading);

  const sideItems = document.createElement('p');
  sideItems.classList.add('sectionItem');
  sideItems.setAttribute('style', 'white-space: pre;');
  sideItems.textContent = 'White or Brown Rice - $0.99 \nFried Rice (vegetarian) - $1.99 \nFried Rice (choice of chicken or pork) - $2.49 \nChinese Pickled Cucumber - $2.99 \nVegetable of the Day - $4.99  ';
  sideSection.appendChild(sideItems);


/* function that takes constructed items and puts it on the menu/DOM  */

  function addItemToMenu(menuItem, container, itemClass, itemNameClass, itemDescriptionClass) {
    const name = menuItem.name;
    const price = menuItem.price;
    const description = menuItem.description;

    let wholeItem = document.createElement('div');
    wholeItem.classList.add(itemClass);
    container.appendChild(wholeItem);

    let itemNameAndPrice = document.createElement('p');
    itemNameAndPrice.classList.add(itemNameClass);
    itemNameAndPrice.textContent = `${name} - $${price}`;
    wholeItem.appendChild(itemNameAndPrice);

    let itemDescription = document.createElement('p');
    itemDescription.classList.add(itemDescriptionClass);
    itemDescription.setAttribute('style', 'white-space: pre;');
    (!description)
    ? itemDescription.textContent = ''
    : itemDescription.textContent = `${description}`;
    wholeItem.appendChild(itemDescription);
  }
}

export default menu;