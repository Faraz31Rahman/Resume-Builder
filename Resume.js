//FOR REDIRECTING USING BUTTONS
function scrollToSection(sectionId) {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
}

//PROJECT_NUMBER
//FOR EXTRA PROJECTS
const numInput = document.querySelector('.js-num-field');
const newProject = document.querySelector('.new-project');

let projectHTML = '';
const html = `<p class="info">
                <p class="p-info">Name:</p>
                  <input type="text" class="input-field second-project-name">
              </p>

              <p class="info">
                <p class="p-info">About:</p> 
              </p>
                <textarea cols="30" rows="7" maxlength="50" placeholder="max:50 letters" class="textarea js-textarea2"></textarea>`;
numInput.addEventListener('click', () => {
  if (numInput.value === '1') {
    newProject.innerHTML = '';
  } else if (numInput.value === '2') {
    projectHTML = `<p style="font-size: 25px; margin: 0;
    margin-top: 20px;font-weight: bold;">Second Project</p><br>
    ${html}`;
    newProject.innerHTML = projectHTML;
  } 
})
//CHANGING THEMES
const profileLayer = document.querySelector('.js-profile');
const midLayer = document.querySelector('.js-box-info');
const mainLayer = document.querySelector('.js-info-page');
function changeThemes(theme) {
  if (theme === 'Default') {
    removeClass();
    profileLayer.classList.add('page');
    midLayer.classList.add('quality');
    mainLayer.classList.add('quality-box');
  } else if (theme === 'Blue') {
    removeClass();
    profileLayer.classList.add('profile-layer-blue');
    midLayer.classList.add('mid-layer-blue');
    mainLayer.classList.add('main-layer-blue');
  } else if (theme === 'Pink') {
    removeClass();
    profileLayer.classList.add('profile-layer-pink');
    midLayer.classList.add('mid-layer-pink');
    mainLayer.classList.add('main-layer-pink');
  }
};

//FUNCTION TO REMOVE CLASSES
function removeClass() {
  //Default
  profileLayer.classList.remove('page');
  midLayer.classList.remove('quality');
  mainLayer.classList.remove('quality-box');
  //Blue
  profileLayer.classList.remove('profile-layer-blue');
  midLayer.classList.remove('mid-layer-blue');
  mainLayer.classList.remove('main-layer-blue');
  //Pink
  profileLayer.classList.remove('profile-layer-pink');
  midLayer.classList.remove('mid-layer-pink');
  mainLayer.classList.remove('main-layer-pink');
}
//SHORTCUTS
//NAME
const nameElement = document.querySelector('.js-name-input');
const nameOutput = document.querySelector('.js-name-output');
//AGE
const ageElement = document.querySelector('.js-age-input');
const ageOutput = document.querySelector('.js-age-output');
//ADDRESS
const addressElement = document.querySelector('.js-address-input');
const countryElement = document.getElementById('country');
const zipElement = document.querySelector('.js-zip-input');

const addressOutput = document.querySelector('.js-address-output');
//EMAIL
const emailElement = document.querySelector('.js-email-input');
const emailOutput = document.querySelector('.js-email-output');
//GENDER
const genderElement = document.getElementsByName('gender');
const genderOutput = document.querySelector('.js-gender-output');
//LANGUAGE
const languageElement = document.querySelectorAll('.info .lang');
const languageOutput = document.querySelector('.js-language-output');
//ABOUT-ME
const aboutElement = document.querySelector('.js-textarea');
const aboutOutput = document.querySelector('.js-about-me');
//DEGREE
const degreeElement = document.querySelector('.js-degree');
const degreeOutput = document.querySelector('.js-degree-output');
//YEAR
const yearElement = document.querySelector('.js-year');
const yearOutput = document.querySelector('.js-year-output');
//INSTITUTE
const instituteElement = document.querySelector('.js-institution');
const instituteOutput = document.querySelector('.js-institute-output');
//RESULT
const resultElement = document.querySelector('.js-result');
const resultOutput = document.querySelector('.js-result-output');
//POSITION
const positionElement = document.querySelector('.js-position');
const positionOutput = document.querySelector('.js-position-output');
//FIRM
const firmElement = document.querySelector('.js-firm');
const companyOutput = document.querySelector('.js-company-output');
//DURATION
const durationElement = document.querySelector('.js-duration');
const durationOutput = document.querySelector('.js-duration-output');
//PROJECT
const projectNameElement = document.querySelector('.js-project-name');
const projectAboutElement = document.querySelector('.js-project-textarea');

const projectNameOutput = document.querySelector('.js-project-name-output');
const projectAboutOutput = document.querySelector('.js-project-about-output');
//IMAGE
const imageElement = document.querySelector('input.js-image-input');
const imageOutput = document.querySelector('.js-image-output');
//END
let address;
let selectedCountry;
let country;
let zip;
let line;
let selectedLanguages;

//Submitting
const submit = document.querySelector('.js-submit');

  submit.addEventListener('click', () => {
    inputValue();
  }); 


  function inputValue() {
    //GENDER
    for (let i = 0; i < genderElement.length; i++) {
      if (genderElement[i].checked) {
        genderOutput.innerHTML = genderElement[i].value;
      }
    }

    //AGE
    ageOutput.innerHTML = ageElement.value;

    //EMAIL
    emailOutput.innerHTML = emailElement.value;

    //ADDRESS
    line = addressElement.value;
    zip = zipElement.value;
    selectedCountry = countryElement.options[countryElement.selectedIndex];
    country = selectedCountry.value;

    addressOutput.innerHTML = `${country}<br>
    ${zip}<br>
    ${line}`;

    //LANGUAGES
    selectedLanguages = Array.from(languageElement)
      .filter(checkbox => checkbox.previousElementSibling.checked)
      .map(checkbox => checkbox.textContent);
    languageOutput.innerHTML = `${selectedLanguages.join(`<br>`)}`;

    //Name
    nameOutput.innerHTML = nameElement.value;

    //ABOUT ME
    aboutOutput.innerHTML = aboutElement.value;

    //DEGREE
    degreeOutput.innerHTML = degreeElement.value;

    //YEAR
    yearOutput.innerHTML = yearElement.value;

    //INSTITUTE
    instituteOutput.innerHTML = instituteElement.value;

    //RESULT
    resultOutput.innerHTML = resultElement.value;

    //POSITION
    positionOutput.innerHTML = positionElement.value;

    //COMPANY
    companyOutput.innerHTML = firmElement.value;

    //DURATION
    durationOutput.innerHTML = durationElement.value;

    //PROJECT
    if (numInput.value === '1') {
      projectNameOutput.innerHTML = projectNameElement.value;
      projectAboutOutput.innerHTML = projectAboutElement.value;
    } else if (numInput.value === '2') {
      projectNameOutput.innerHTML = `${projectNameElement.value}<br>
      ${projectAboutElement.value}
      `;

      projectAboutOutput.innerHTML = `<p style="font-size: 20px; font-weight: 700; margin-top: 1px; margin-bottom: 3px;">Second Project</p>${document.querySelector('.second-project-name').value}<br>
      ${document.querySelector('.js-textarea2').value}`;
    }
    //IMAGE
    image();
  }    
    
  function image() {
    let profileimg = imageElement.files[0];
    const profileimgURL = URL.createObjectURL(profileimg);
    imageOutput.setAttribute('src', profileimgURL);
  }
  
  
  /*
  function imageValue() {
    const imageUrl = imageElement.value;

    const imgElement = document.createElement('img');

    imgElement.src = imageUrl;

    imageOutput.innerHTML = '';
    imageOutput.appendChild(imgElement);
  }
  */