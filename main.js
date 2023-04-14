const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

let cards = ''; 

for (i = 0; i < team.length; i++) {
  let teamMember = team[i];

  cards += `
    <div class="card m-3" style="width: 18rem;">
      <img src="asset/img/${ teamMember.image }" class="card-img-top" alt="img of ${ teamMember.name}">
      <div class="card-body">
        <h5 class="card-title">${ teamMember.name }</h5>
        <p class="card-text">Role: ${ teamMember.role }</p>
      </div>
    </div>
  `; 
  
}

document.querySelector(".row").innerHTML = cards;
  