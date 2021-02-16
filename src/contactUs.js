const contactUs = () => {

  const contentDiv = document.getElementById('content');

  const header = document.createElement('div');
  header.classList.add('headerParent');
  contentDiv.appendChild(header);

  const bodySection = document.createElement('div');
  bodySection.classList.add('bodyParent');
  contentDiv.appendChild(bodySection);

  const h1 = document.createElement('h1');
  h1.classList.add('headerItem');
  h1.textContent = '联系我们 (Contact Us)';
  header.appendChild(h1);

  const hoursHeading = document.createElement('h2');
  hoursHeading.classList.add('bodyItem');
  hoursHeading.textContent = 'Hours of Operation';
  bodySection.appendChild(hoursHeading);

  const hoursText = document.createElement('p');
  hoursText.classList.add('bodyItem');
  hoursText.setAttribute('style', 'white-space: pre;');
  hoursText.textContent = 'Monday: CLOSED \r\nTuesday: 11:00 A.M. - 10:00 P.M. \r\nWednesday: 11:00 A.M. - 10:00 P.M. \r\nThursday: 11:00 A.M. - 10:00 P.M. \r\nFriday: 8:00 A.M. - 10:00 P.M. \r\nSaturday: 8:00 A.M. - 10:00 P.M. \r\nSunday: 8:00 A.M. - 10:00 P.M. \r\n';
  bodySection.appendChild(hoursText);

  const mealTimes = document.createElement('p');
  mealTimes.classList.add('bodyItem');
  mealTimes.setAttribute('style', 'white-space: pre;');
  mealTimes.textContent = 'Dim Sum: 8:00 A.M. - 1:30 P.M. (only on Friday, Saturday, and Sunday)\r\n Lunch: 11:00 A.M. - 4:30 P.M. \r\n Dinner: 4:30 P.M. - 10:00 P.M.';
  mealTimes.style.textDecoration = 'underline';
  bodySection.appendChild(mealTimes);

  const locationHeading = document.createElement('h2');
  locationHeading.classList.add('bodyItem');
  locationHeading.textContent = 'Location/Contact';
  bodySection.appendChild(locationHeading);

  const locationText = document.createElement('p');
  locationText.classList.add('bodyItem');
  locationText.setAttribute('style', 'white-space: pre;');
  locationText.textContent = 'Street Address: 418 Maynard Ave S, Seattle, WA 98104 \r\nPhone Number: 206-000-0000 \r\nWe are located in the heart of the International District (ID) of Seattle, \r\nwalking distance to King Station, Hing Hay Park, Pioneer Square, \r\nLumen Field, and more.';
  bodySection.appendChild(locationText);




}

export default contactUs;