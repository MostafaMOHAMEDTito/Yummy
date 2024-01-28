//loading.......
$(function () {
  $(".loader").fadeOut(400, function () {
    $(".loadding").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
      $("#load").remove();
      $("body").animate({ scrollTop: 0 }, 0);
      $(".loader").removeClass("animation");
    });
  });
});

/* saide navbar */
function toggleNav() {
  let sidenav = document.getElementById("mySidenav");
  let main = document.getElementById("main");
  let incor = document.getElementById("incor");
  if (sidenav.style.width == "250px") {
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
    $(incor).removeClass("fa-x");
    $(incor).addClass("fa-bars");
  } else {
    sidenav.style.width = "250px";
    main.style.marginLeft = "250px";
    $(incor).removeClass("fa-bars");
    $(incor).addClass("fa-x");
  }
}

// Home
const showRow = document.getElementById("row");
const showSearch = document.getElementById("row-Search");
const showDataMeal = document.getElementById("showdata")
const searchName = document.getElementById("search-name");
const searchLetter = document.getElementById("search-frist");
let meal = [];
let mealDAtaAll = "";
const searchInPut = document.getElementById("search-button");
const searchCategor = document.getElementById("search-categor");
const searchArea = document.getElementById("search-area");
const searchIngrad = document.getElementById("search-ingrad");
const searchDiv = document.getElementById("Search");


// show meal
async function getmeal(food = "") {
  let respons = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
  );
  let mealdata = await respons.json();
  meal = mealdata.meals;
  console.log(meal);
  disPlayMeal();
}
getmeal();

function disPlayMeal() {
  let cartona = "";
  for (let i = 0; i < meal.length; i++) {
    cartona += `
    <div class=" col-md-3">
    <div class="meal overflow-hidden position-relative">
      <div>
        <img
          class="w-100"
          src=${meal[i].strMealThumb}
          alt="meal"
        />
      </div>
      <div id="hover" class="meal-layer d-flex justify-content-center align-items-center"
      onclick="showMealData('${meal[i].strMeal}')">
        <h3>${meal[i].strMeal}</h3>
      </div>
    </div>
  </div>
    `;
  }
  showRow.innerHTML = cartona;
}
// search meal
$(searchInPut).on("click", function () {
  toggleNav();
  $("#Search").removeClass("d-none");
  $(showRow).addClass("d-none");
  $(".data-meal").removeClass("d-block");
  $(".data-meal").addClass("d-none");
  $('.show-all-meal').removeClass("d-none")
  $('.show-all-meal').addClass("d-block");
  $("#Search").addClass("d-block");
});

$(searchName).on("input", function () {
  let mealName = searchName.value;
  getSearchMeal(mealName);
});
async function getSearchMeal(food) {
  let respons = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
  );
  let mealdata = await respons.json();
  meal = mealdata.meals;
  disPlaySearchMeal();
}
function disPlaySearchMeal() {
  let cartona = "";
  for (let i = 0; i < meal.length; i++) {
    cartona += `
    <div class=" col-md-3">
    <div class="meal overflow-hidden position-relative">
      <div>
        <img
          class="w-100"
          src=${meal[i].strMealThumb}
          alt="meal"
        />
      </div>
      <div id="hover" class="meal-layer d-flex justify-content-center align-items-center"
      onclick="showMealData('${meal[i].strMeal}')">
        <h3>${meal[i].strMeal}</h3>
      </div>
    </div>
  </div>
    `;
  }
  showSearch.innerHTML = cartona;
}
// show Categories
$(searchCategor).on("click", function () {
  getCategorMeal();
  toggleNav();
  $(searchDiv).removeClass("d-block");
  $(searchDiv).addClass("d-none");
  $(showRow).removeClass("d-none");
  $(showRow).addClass("d-flex");
  $(".data-meal").addClass("d-none");
  $(".data-meal").removeClass("d-block");
  $('.show-all-meal').removeClass("d-none")
  $('.show-all-meal').addClass("d-block");
});

async function getCategorMeal(food) {
  let respons = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let mealdata = await respons.json();
  meal = mealdata.categories;
  console.log(meal);
  disPlaycategorMeal();
}
function disPlaycategorMeal() {
  showRow.innerHTML = "";
  let cartona = "";
  for (let i = 0; i < meal.length; i++) {
    cartona += `
    <div class=" col-md-3 data-img-meal">
    <div class="meal overflow-hidden position-relative" >
      <div>
        <img
          class="w-100"
          src=${meal[i].strCategoryThumb}
          alt="meal"
        />
      </div>
      <div id="hover" class="meal-layer d-flex justify-content-center align-items-center" onclick="showMealData('${meal[i].strCategory}')">
        <h3>${meal[i].strCategory}</h3>
      </div>
    </div>
  </div>
    `;
  }
  showRow.innerHTML = cartona;
}
// show Area
$(searchArea).on("click", function () {
  getAreaMeal();
  toggleNav();
  $(searchDiv).removeClass("d-block");
  $(searchDiv).addClass("d-none");
  $(showRow).removeClass("d-none");
  $(showRow).addClass("d-flex");
  $(".data-meal").addClass("d-none");
  $(".data-meal").removeClass("d-block");
  $('.show-all-meal').removeClass("d-none")
  $('.show-all-meal').addClass("d-block");
});

async function getAreaMeal(area = "Egyptian") {
  let respons = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  let mealdata = await respons.json();
  meal = mealdata.meals;
  console.log(meal);
  disPlayAreaMeal();
}
function disPlayAreaMeal() {
  showRow.innerHTML = "";
  let cartona = "";
  for (let i = 0; i < meal.length; i++) {
    cartona += `
    <div class=" col-md-3 data-img-meal">
    <div class="meal overflow-hidden position-relative" onclick="showMealData('${meal[i].strMeal}')">
      <div>
        <img
          class="w-100"
          src=${meal[i].strMealThumb}
          alt="meal"
        />
      </div>
      <div id="hover" class="meal-layer d-flex justify-content-center align-items-center" onclick="showMealData('${meal[i].strMeal}')">
        <h3>${meal[i].strMeal}</h3>
      </div>
    </div>
  </div>
    `;
  }
  showRow.innerHTML = cartona;
}
// show Ingredients
$(searchIngrad).on("click", function () {
  getChingradMeal();
  toggleNav();
  $(searchDiv).removeClass("d-block");
  $(searchDiv).addClass("d-none");
  $(showRow).removeClass("d-none");
  $(showRow).addClass("d-flex");
  $(".data-meal").addClass("d-none");
  $(".data-meal").removeClass("d-block");
  $('.show-all-meal').removeClass("d-none")
  $('.show-all-meal').addClass("d-block");
});

async function getChingradMeal(inChingrad) {
  let respons = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
  );
  let mealdata = await respons.json();
  meal = mealdata.meals;
  console.log(mealdata);
  disPlayChingradMeal();
}
function disPlayChingradMeal() {
  showRow.innerHTML = "";
  let cartona = "";
  for (let i = 0; i < meal.length; i++) {
    cartona += `
    <div class=" col-md-3 data-img-meal">
    <div class="meal overflow-hidden position-relative" >
      <div>
        <img
          class="w-100"
          src=${meal[i].strMealThumb}
          alt="meal"
        />
      </div>
      <div id="hover" class="meal-layer d-flex justify-content-center align-items-center" onclick="showMealData('${meal[i].strMeal}')">
        <h3>${meal[i].strMeal}</h3>
      </div>
    </div>
  </div>
    `;
  }
  showRow.innerHTML = cartona;
}
// show meal data
function showMealData(mealName) {
  mealDAtaAll = mealName;
  // console.log(mealDAtaAll);
  getDataMeal(mealDAtaAll)
  $('.show-all-meal').addClass("d-none");
  $(".data-meal").removeClass("d-none")
  $(".data-meal").addClass("d-block");

}
async function getDataMeal(food) {
  let respons = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
  );
  let mealdata = await respons.json();
  meal = mealdata.meals;
  // console.log(meal);
   disPlayDataMeal();
}
function disPlayDataMeal() {
  
  let cartona = "";
  for (let i = 0; i < meal.length; i++) {
    cartona += `
    <div
    class="datameal  d-flex row justify-content-center pt-5"
  >
    <div class="img-meal col-md-4">
      <div class="img"><img src="${meal[i].strMealThumb}" alt="img" class="w-100" /></div>
      <h2>${meal[i].strMeal}</h2>
    </div>
    <div class="data col-md-7">
      <h2 class="fw-bold">Instructions</h2>
      <p>
       ${meal[i].strInstructions}
      </p>
      <p class="fs-6 fw-bold">Area : ${meal[i].strArea}</p>
      <p class="fs-6 fw-bold">Category : ${meal[i].strCategory}</p>
      <p class="fs-6 fw-bold">Recipes : ${meal[i].strTags}</p>
      <p class="fs-6 fw-bold">
        Tags : <a class="btn btn-success" href="${meal[i].strSource}">Sours</a>
        <a class="btn btn-danger" href="${meal[i].strYoutube}">Youtube</a>
      </p>
    </div>
  </div>
    `;
  }
  showDataMeal.innerHTML = cartona;
}
//  sgin in
