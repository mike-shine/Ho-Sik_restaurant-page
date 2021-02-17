const contactUs = () => {

  const contentGoesHere = document.getElementById('contentGoesHere');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('mainContainer');
  contentGoesHere.appendChild(mainContainer);

  const header = document.createElement('div');
  header.classList.add('headerParent');
  mainContainer.appendChild(header);

  const bodySection = document.createElement('div');
  bodySection.classList.add('bodyParent');
  mainContainer.appendChild(bodySection);

  const h1 = document.createElement('h1');
  h1.classList.add('headerItem');
  h1.textContent = '联系我们 (Contact Us)';
  header.appendChild(h1);

  const allHoursContent = document.createElement('div');
  allHoursContent.classList.add('bodyItem');
  bodySection.appendChild(allHoursContent);

  const hoursHeadingContainer = document.createElement('div');
  hoursHeadingContainer.classList.add('headingContainer');
  allHoursContent.appendChild(hoursHeadingContainer);

  const hoursHeading = document.createElement('h2');
  hoursHeading.classList.add('headingItem');
  hoursHeading.textContent = 'Hours of Operation';
  hoursHeadingContainer.appendChild(hoursHeading);

  const hoursTextContainer = document.createElement('div');
  hoursTextContainer.classList.add('textContainer');
  allHoursContent.appendChild(hoursTextContainer);

  const hoursText = document.createElement('p');
  hoursText.classList.add('textItem');
  hoursText.setAttribute('style', 'white-space: pre;');
  hoursText.textContent = 'Monday: CLOSED \r\nTuesday: 11:00 A.M. - 10:00 P.M. \r\nWednesday: 11:00 A.M. - 10:00 P.M. \r\nThursday: 11:00 A.M. - 10:00 P.M. \r\nFriday: 8:00 A.M. - 10:00 P.M. \r\nSaturday: 8:00 A.M. - 10:00 P.M. \r\nSunday: 8:00 A.M. - 10:00 P.M. \r\n';
  hoursTextContainer.appendChild(hoursText);

  const mealTimes = document.createElement('p');
  mealTimes.classList.add('textItem');
  mealTimes.setAttribute('style', 'white-space: pre;');
  mealTimes.textContent = 'Dim Sum: 8:00 A.M. - 1:30 P.M. \n    *(only on Friday, Saturday, and Sunday)*\nLunch: 11:00 A.M. - 4:30 P.M. \nDinner: 4:30 P.M. - 10:00 P.M.';
  mealTimes.style.textDecoration = 'underline';
  hoursTextContainer.appendChild(mealTimes);

  const allLocationContent = document.createElement('div');
  allLocationContent.classList.add('bodyItem');
  bodySection.appendChild(allLocationContent);

  const locationHeadingContainer = document.createElement('div');
  locationHeadingContainer.classList.add('headingContainer');
  allLocationContent.appendChild(locationHeadingContainer);

  const locationHeading = document.createElement('h2');
  locationHeading.classList.add('headingItem');
  locationHeading.textContent = 'Location/Contact';
  locationHeadingContainer.appendChild(locationHeading);

  const locationTextContainer = document.createElement('div');
  locationTextContainer.classList.add('textContainer');
  allLocationContent.appendChild(locationTextContainer);

  const locationText = document.createElement('p');
  locationText.classList.add('textItem');
  locationText.setAttribute('style', 'white-space: pre;');
  locationText.textContent = 'Street Address: 418 Maynard Ave S, Seattle, WA 98104 \r\nPhone Number: 206-000-0000 \r\nWe are located in the heart of the International District (ID) of Seattle, \r\nwalking distance to King Station, Hing Hay Park, Pioneer Square, \r\nLumen Field, and more.';
  locationTextContainer.appendChild(locationText);




}

export default contactUs;