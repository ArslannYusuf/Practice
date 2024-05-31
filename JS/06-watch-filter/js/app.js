import { data } from "../data/data.js";
//console.log(data)

let searchInp = document.getElementById("search");
let catContainer = document.querySelector(".cats");
let priceRange = document.querySelector(".priceRange");
let priceValue = document.querySelector(".priceValue");
let productsContainer = document.querySelector(".products");

const displayProducts = (filteredData) => {
  let showFilteredProducts = filteredData
    .map(
      (product) => `
    
    <div class="product">
         <img src=${product.img} alt="">
            <span class="name">${product.name}</span>
            <span class="price">$ ${product.price}</span>
        </div>
    `
    )
    .join("");
  productsContainer.innerHTML = showFilteredProducts;
};

//!search islemi yapılacak

searchInp.addEventListener("keyup", (e) => {
  let value = e.target.value.toLowerCase().trim();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().includes(value))
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  let allCategories = data.map((item) => item.cat);
  console.log(allCategories);
  /*    let filteredCategories = ["All",...allCategories.filter((cats, index) => {
        return allCategories.indexOf(cats) == index
    })];  */

  let filteredCategories = [...new Set(allCategories)];
  filteredCategories = ["All", ...filteredCategories];

  // console.log(filteredCategories)

  catContainer.innerHTML = filteredCategories
    .map((cat) => `<span>${cat}</span>`)
    .join("");

  catContainer.addEventListener("click", (e) => {
    let selectedCat = e.target.textContent;

    //console.log(selectedCat)

    /* selectedCat=="All" ? displayProducts(data) :displayProducts(data.filter((item)=>item.cat===selectedCat)) */
    if (selectedCat == "All") {
      displayProducts(data);
    } else {
      displayProducts(data.filter((item) => item.cat === selectedCat));
    }
  });

  const setPrice = () => {
    let priceList = data.map((item) => item.price);
    let minPrice = Math.min(...priceList);
    let maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;

    priceValue.textContent = `${maxPrice}$`;

    priceRange.addEventListener("input", (e) => {
      let value = e.target.value;
      priceValue.textContent = `${value}$`;

      displayProducts(data.filter((item) => item.price <= value));
    });
  };

  setPrice();
};

setCategories();
