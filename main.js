const students = [
  {
    id: 1,
    house: "Ravenclaw",
    name: "Dede",
    traits: "Brave and Loyal",
    imageUrl: "https://www.symbols.com/images/symbol/2149_ravenclaw-house.png"
  },
  {
    id: 2,
    house: "Gryffindor",
    name: "Troy",
    traits: "Smart and Slick",
    imageUrl: "https://cdn.shopify.com/s/files/1/0706/6127/products/21249HP_2048x.jpg?v=1532380285"
  },
  {
    id: 3,
    house: "Hufflepuff",
    name: "Linnard",
    traits: "Scared but Tuff",
    imageUrl: "https://m.media-amazon.com/images/I/510x1R12eKL._AC_SY580_.jpg"
  },
  {
    id: 4,
    house: "Slytherin",
    name: "Barry",
    traits: "Mean and Fearless",
    imageUrl: "https://www.symbols.com/images/symbol/2150_slytherin-house.png"
  },
  {
    id: 1,
    house: "Voldemorts Army",
    name: "Zor",
    imageUrl: "https://c.shld.net/rpx/i/s/pi/mp/10141520/prod_18059391719?src=https%3A%2F%2Fres.cloudinary.com%2Ffifthsun-product-images%2Fimage%2Fupload%2Fv1612826599%2F15MARV863WC--Punisher-Grunge-comp-swatch.jpg&d=6510a499e5423305ad89c7199d1a21fb56ba94a7&?hei=64&wid=64&qlt=50"
  }
  
  
]
const expelled = [{ id: 1, name: "Zor", house: "VoldemortsArmy"}];
  


  

const rootDiv = document.getElementById("root");

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const studentsOnDom = (students) => {
  let domString = " ";
  for (const student of students) {
    domString += `
    <div class="card" style="width: 18rem;">
    <img src="${student.imageUrl}" class="card-img-top" alt="...">
    <h5 class="card-title">${student.name}</h5>
    <div class="card-body">
      <p class="card-team">${student.house}</p>
      <p class="card-traits">${student.traits}</p>
      <button class="btn btn-danger" id="expel--${student.id}">Expel</button>
     </div>
  </div>`;
  }
  
  
  return domString;
};




renderToDom("#root",studentsOnDom(students));


studentsOnDom(students);

const filter = (array, studentString) => {
  const studentArray = [];
  console.log("array", array);
  console.log('studentString', studentString);

  for (const student of array) {
    if (student.house === studentString) {
      studentArray.push(student)
    }
  }
  return studentArray;
}


const allButton = document.querySelector("#all");
const gryffindorButton = document.querySelector("#gryffindor");
const hufflepuffButton = document.querySelector("#hufflepuff");
const ravenclawButton = document.querySelector("#ravenclaw");
const slytherinButton = document.querySelector("#slytherin");


allButton.addEventListener('click', () => {
  renderToDom("root",studentsOnDom(students))
});

gryffindorButton.addEventListener('click', () => {
  const teamGry = filter(students, 'Gryffindor');
  renderToDom("#root",studentsOnDom(teamGry))
});

hufflepuffButton.addEventListener('click', () => {
  const teamHuff = filter(students, 'Hufflepuff');
  renderToDom("#root",studentsOnDom(teamHuff))
});

ravenclawButton.addEventListener('click', () => {
  const teamRaven = filter(students, 'Ravenclaw');
  renderToDom("#root",studentsOnDom(teamRaven))
});

slytherinButton.addEventListener('click', () => {
  const teamSly = filter(students, 'Slytherin');
  renderToDom("#root",studentsOnDom(teamSly))
});

const sortButton = document.querySelector("#Sort");


const sortfunc = () => {
  const name = document.querySelector("#name").value;
  const houses = [
    "Ravenclaw",
    "Slytherin",
    "Hufflepuff",
    "Gryffindor"

  ];
  const randomnumber = Math.floor(Math.random() * houses.length);
  const randomHouse = houses[randomnumber];
  const newStudent = { name: name, house: randomHouse};
  renderToDom("#root", studentsOnDom(students));
  students.push(newStudent);
  

};



sortButton.addEventListener('click', (e) => {
  e.preventDefault()
  sortfunc()

});

const form = document.querySelector('form');

const expelButton = document.querySelector("#root")

root.addEventListener('click', (e) => {
  
  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");

    const index = students.findIndex(e => e.id === Number(id));
    students.splice(index, 1);
    
    studentsOnDom(students);
  }


});


const startApp = () => {
  studentsOnDom(students);
}

startApp();
