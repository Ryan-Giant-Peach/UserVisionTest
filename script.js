const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const alertBar1 = document.getElementsByClassName("alertbar")[0];
const products = [
  { name: "Goomba the dog", type: "dog" },
  { name: "Kat the cat", type: "cat" },
  { name: "Doug the dog", type: "dog" },
  { name: "Martin the dog", type: "dog" },
  { name: "Moira the cat", type: "cat" },
];

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
    alertBar1.style.display = "block";
  }

  if (password.value.length <= 6) {
    messages.push("Password must be at least 6 characters");
  }

  if (password.value.length >= 12) {
    messages.push("Password must be less than 12 characters");
  }

  if (password.value === "password") {
    messages.push("Password cannot be password");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

onDogs = (e) => {
  let filteredProducts = products.filter((product) => product.type === "dog");
  var list = document.createElement("ul");
  for (let i = 0; i < filteredProducts.length; i++) {
    var item = document.createElement("li");
    item.innerText = filteredProducts[i].name;
    list.appendChild(item);
  }
  document.getElementById("animallist").innerHTML =
    filteredProducts.length + " results found";
  document.getElementById("animallist").appendChild(list);
};

onCats = (e) => {
    let filteredProducts = products.filter((product) => product.type === "cat");
    var list = document.createElement("ul");
    for (let i = 0; i < filteredProducts.length; i++) {
      var item = document.createElement("li");
      item.innerText = filteredProducts[i].name;
      list.appendChild(item);
    }
    document.getElementById("animallist").innerHTML =
      filteredProducts.length + " results found";
    document.getElementById("animallist").appendChild(list);
  };

onAll = (e) => {
  var list = document.createElement("ul");
  for (let i = 0; i < products.length; i++) {
    var item = document.createElement("li");
    item.innerText = products[i].name;
    list.appendChild(item);
  }
  document.getElementById("animallist").innerHTML =
    products.length + " results found";
  document.getElementById("animallist").appendChild(list);
};

onAll();
