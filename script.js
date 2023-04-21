const ham = document.getElementById('ham-menu');
const menu = document.getElementById('menu');
const cardSection = document.getElementById('featured-speakers');
function clickMenu() {
  ham.style.display = 'inline';
  menu.style.display = 'none';
}
function clickX() {
  ham.style.display = 'none';
  menu.style.display = 'inline';
}

const speakers = [
  {
    image_url: './Images/p1-yochai.png',
    name: 'Yochai Benkler',
    designation: 'Pilot',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    image_url: './Images/p2-kilnam.png',
    name: 'Kilnam Chon',
    designation: 'Senior Trainer',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    image_url: './Images/p3-sohyeong.png',
    name: 'SohYeong Noh',
    designation: 'Tour Guide',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    image_url: './Images/p4-julia.png',
    name: 'Julia Leda',
    designation: 'CEO of Administration Department',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    image_url: './Images/p5-lila.png',
    name: 'Lila Tretikov',
    designation: 'Manager',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
  {
    image_url: './Images/p6-ryan.png',
    name: 'Ryan Merkley',
    designation: 'Cordinator',
    introduction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.',
  },
];

const x = window.matchMedia('(max-width: 768px)');

if (x.matches) {
  speakers.forEach((speaker) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <div class="grp-1">
          <img class="partner-img" src="${speaker.image_url}" alt="logo">
          <div class="flex-column grp-2">
          <h2>${speaker.name}</h2>
          <h4>${speaker.designation}</h4>
          <p>${speaker.introduction}</p>
          </div>
        </div>`;
    cardSection.append(newDiv);
  });
} else {
  speakers.forEach((speaker) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <div class="grp-1">
          <img class="partner-img" src="${speaker.image_url}" alt="logo">
          <div class="flex-column grp-2">
          <h2>${speaker.name}</h2>
          <h4>${speaker.designation}</h4>
          <p>${speaker.introduction}</p>
          </div>
        </div>`;
    cardSection.append(newDiv);
  });
}
