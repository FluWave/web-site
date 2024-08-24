const searchForm = document.querySelector(".search-form");

const searchBtn = document.querySelector("#search-btn");

const cartItem = document.querySelector(".cart-items-container");

const cartBtn = document.querySelector("#cart-btn")



searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
})

cartBtn.addEventListener("click", function(){
    cartItem.classList.toggle("active");
})

