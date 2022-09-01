// ----------БУРГЕР-МЕНЮ---------------

let burgerBtn = document.querySelector('.burger-button');
let burgerMenu = document.querySelector('.burger-menu');
let blackout = document.querySelector('.blackout');
let body = document.querySelector('body');

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('burger-button_active');
    burgerMenu.classList.toggle('burger-menu_active');
    if (blackout.style.display === 'block')  {
        blackout.style.display = 'none'; 
    } else {
        blackout.style.display = 'block';
    }
    body.classList.toggle('body_hidden');
})

burgerMenu.addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName != 'A') return;
    burgerMenu.classList.toggle('burger-menu_active');
    burgerBtn.classList.toggle('burger-button_active');
    body.classList.remove('body_hidden');
    blackout.style.display = 'none';
})

blackout.addEventListener('click', function() {
    burgerBtn.classList.toggle('burger-button_active');
    burgerMenu.classList.toggle('burger-menu_active');
    if (blackout.style.display === 'block')  {
        blackout.style.display = 'none'; 
    } else {
        blackout.style.display = 'block';
    }
    body.classList.remove('body_hidden');
})

// ----СЛАЙДЕР---------------------------------------------
let pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.jpg",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.jpg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.jpg",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]

let currentPets = [pets[4], pets[0], pets[2]];
let petsSlider = document.querySelector('.pets__slider');
let cards = document.querySelectorAll('.card');
let sliderCards = document.querySelector('.slider__cards');

petsSlider.addEventListener('click', function(event) {
    let target = event.target;
    if (!target.classList.contains('slider__arrow')) return;
    if (target.classList.contains('slider__arrow_right')) { // Если нажали правую кнопку
      sliderCards.classList.add('_animation-right-first');
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          cards[i].children[0].src = numbers[i].img;
          cards[i].children[1].textContent = numbers[i].name;
      }
      currentPets = numbers;
      }, 551);
      setTimeout(() => {
        sliderCards.classList.add('_animation-right-second');
      }, 551);
      setTimeout(() => {
        sliderCards.classList.remove('_animation-right-first');
        sliderCards.classList.remove('_animation-right-second');
      }, 1100)
    } else if (target.classList.contains('slider__arrow_left')) { // Если нажали левую кнопку
      sliderCards.classList.add('_animation-left-first');
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          cards[i].children[0].src = numbers[i].img;
          cards[i].children[1].textContent = numbers[i].name;
      }
      currentPets = numbers;
      }, 551);
      setTimeout(() => {
        sliderCards.classList.add('_animation-left-second');
      }, 551);
      setTimeout(() => {
        sliderCards.classList.remove('_animation-left-first');
        sliderCards.classList.remove('_animation-left-second');
      }, 1100)
    }
    numbers = [];
    function getRandomNumbers() {
        while (numbers.length < 4) {
            let randomNumber = Math.floor(Math.random() * 8);
            if (numbers.includes(pets[randomNumber]) || currentPets.includes(pets[randomNumber])) {
                getRandomNumbers();
            } else {
                numbers.push(pets[randomNumber]);
            }
        }
    }
    getRandomNumbers();
})

// ----ПОЯВЛЕНИЕ-МОДАЛЬНОГО-ОКНА------------------------------------------------------------------------
let petsBlackout = document.querySelector('.pets__blackout');
let popup = document.querySelector('.pets__popup')
let popupImage = document.querySelector('.modal-window__image');
let popupType = document.querySelector('.content__type');
let popupDescription = document.querySelector('.content__description');
let popupList = document.querySelectorAll('.content__list li');
let closeBtn = document.querySelector('.popup__close-button');
let petsSection = document.querySelector('.pets');
let popupName = document.querySelector('.modal-window__content h3');

petsSlider.addEventListener('click', function(event) {
  event.preventDefault();
  let target = event.target.closest('.card');
  if (!target) return;
  petsBlackout.style.display = 'block';
  popup.style.display = 'block';
  let cardName = target.children[1].firstChild.textContent;
  popupImage.src = pets.find((pet) => pet.name == cardName).img;
  popupType.textContent = `${pets.find((pet) => pet.name == cardName).type} - ${pets.find((pet) => pet.name == cardName).breed}`;
  popupDescription.textContent = `${pets.find((pet) => pet.name == cardName).description}`;
  popupName.innerHTML = `${pets.find((pet) => pet.name == cardName).name}`;
  popupList[0].innerHTML = `<b>Age</b>: ${pets.find((pet) => pet.name == cardName).age}`;
  popupList[1].innerHTML = `<b>Inoculations:</b> ${pets.find((pet) => pet.name == cardName).inoculations}`;
  popupList[2].innerHTML = `<b>Diseases:</b> ${pets.find((pet) => pet.name == cardName).diseases}`;
  popupList[3].innerHTML = `<b>Parasites:</b> ${pets.find((pet) => pet.name == cardName).parasites}`;
  petsSection.classList.add('pets_fixed');
  body.classList.add('body_hidden');
});

document.onclick = function(event) {
  if (event.target === petsBlackout || event.target === closeBtn) {
    petsBlackout.style.display = 'none';
    popup.style.display = 'none';
  petsSection.classList.remove('pets_fixed');
  body.classList.remove('body_hidden');
  }
}