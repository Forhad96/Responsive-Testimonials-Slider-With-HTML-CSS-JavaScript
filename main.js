
const container = document.getElementById('container')
// const prevBtn = document.querySelector('[data-prev]')
// const nextBtn = document.querySelector('[data-next]')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

const btn = document.querySelectorAll('.btn')

const customers = [
  {
    name:"Sakil hossain",
    image:"img/0.jpg",
    details: "Whatever you see"
  },
  {
    name: "John Doe",
    image: "img/0.jpg",
    detais: "Software Engineer",
  },
  {
    name: "Jane Smith",
    image: "img/1.jpg",
    detais: "Graphic Designer",
  },
  {
    name: "Bob Johnson",
    image: "img/2.jpg",
    detais: "Web Developer",
  },
  {
    name: "Alice Lee",
    image: "img/3.jpg",
    detais: "Project Manager",
  },
  { name: "Tom Wilson",
    image: "img/4.jpg",
    detais: "Data Analyst" },
];

// index initialization
let index = 0
// Event handler
nextBtn.addEventListener('click',nextFun)



function nextFun(){
index++
template(index)
}



//Getting the refareence to the element
log = console.log

const customarImg = document.querySelector("#customar_img")
const title = document.querySelector('#title')
const details = document.getElementById('details')

// setting the content in the html
customarImg.src = customers[index].image
title.textContent = customers[index].name
details.textContent = customers[index].details




// Event handler function goes here
function template(index){

   return container.innerHTML = `<div class="card">
<img src="${customers[index].image}" width="150" id="customar_img" class="img_card" alt="">
<h4 class="customer_name">${customers[index].name}</h4>
<div class="review">
    <span class="star">
        <i class="fas fa-star"></i>
    </span>
    <span class="star">
        <i class="fas fa-star"></i>
    </span>
    <span class="star">
        <i class="fas fa-star"></i>
    </span>
    <span class="star">
        <i class="fas fa-star-half"></i>
    </span>
</div>
<p id="customer_text">${customers[index].detais}</p>
<a href="#" class="btn prevBtn"><i class="fa fa-long-arrow-alt-left"></i></a>
<a href="#" class="btn nextBtn"><i class="fa fa-long-arrow-alt-right"></i></a>
</div>`
}





(function () {

  const customerImage = document.querySelector("#customer-img");
  const customerName = document.querySelector("#customer-name");
  const customerText = document.querySelector("#customer-text");

  const btn = document.querySelectorAll(".btn");
  let index = 0;
  const customers = [];

  function Customer(img, name, text) {
      this.img = img;
      this.name = name;
      this.text = text;
  }

  function createCustomer(img, name, text) {
      let Img = `./img/${img}.jpg`;
      let customer = new Customer(Img, name, text);

      customers.push(customer);
  }

  createCustomer(0, "Jhon", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae, quo minus fugit itaque ipsa placeat unde fugiat doloremque reiciendis?");
  createCustomer(1, "Brishti", "  dolor sit amet consectetur adipisicing elit. Aliquid quae, quo minus fugit itaque ipsa placeat unde fugiat doloremque reiciendis?");
  createCustomer(2, "Mariya", "Lorem ipsum dolor sit amet consectetur Aliquid quae, quo minus fugit itaque ipsa placeat unde fugiat doloremque reiciendis?");
  createCustomer(3, "Srabony", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae, quo minus fugit itaque ipsa placeat unde fugiat doloremque reiciendis?");
  createCustomer(4, "Munna", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae, quo minus fugit itaque ipsa placeat.");

  btn.forEach(function (button) {
      button.addEventListener("click", function (e) {
          if (e.target.parentElement.classList.contains("prevBtn")) {
              if (index == 0) {
                  index = customers.length;
              }
              index--;
              customerImage.src = customers[index].img;
              customerName.textContent = customers[index].name;
              customerText.textContent = customers[index].text;
          }
          if (e.target.parentElement.classList.contains("nextBtn")) {
              index++;
              if (index == customers.length) {
                  index = 0;
              }
              customerImage.src = customers[index].img;
              customerName.textContent = customers[index].name;
              customerText.textContent = customers[index].text;
          }
      })
  })

})();

