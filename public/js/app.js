let submitBtn = document.getElementById("submit-btn");
let searchBox = document.getElementById("search-box");

submitBtn.addEventListener("click", submitForm);
// console.log(navSearch.value);
const cardPlace = ["#num1", "#num2", "#num3"];
let index = 0;
function submitForm(e) {
  let status = document.querySelectorAll(".card");
  status.forEach(element => element.remove());
  let searchInput;

  //   searchInput = (searchBox.value == (undefined|| "")) ? searchBox.value:navSearch.value;
  if (searchBox.value) {
    searchInput = searchBox.value;
  } else {
    searchInput = navSearch.value;
  }

  // console.log(navSearch.value);
  // console.log(searchInput);

  fetch(`https://www.omdbapi.com/?apikey=889643e1&s=${searchInput}`)
    .then(result => result.json())
    .then(data => {
      let output;
      data.Search.forEach(array => {
        let imgSrc = array.Poster;
        let title = array.Title;
        let year = array.Year;
        let genre = array.Type;
        // let imdb = arrayimdb;

        let place = document.querySelector(cardPlace[index]);

        // console.log(place);
        index++;
        if (index === 3) index = 0;
        const text = textOutput(imgSrc, title, year, genre);
        const div = document.createElement("div");
        const p = document.createElement("p");
        div.className = "card";
        div.innerHTML = text;
        place.append(div);
        place.append(p);
      });
    })
    .catch(error => console.log(error));
}
function textOutput(imgSrc, title, year, genre, imdb) {
  let trucTitle = truncate(title);
  // console.log(trucTitle);
  let text = `
              <img
                src='${imgSrc}'
                class="card-img-top"
                alt=""
                style="overflow: hidden"
              />

              <div class="card-body">
                    <h6 class="card-title"> Title: <span>${trucTitle}</span></h6>
                    <div class="card-text">
                      <label for=""></label>
                      <label for=""><strong> Year: </strong><span>${year}</span></label>
                      <label for=""><strong> Genre: </strong><span>${genre}</span></label>
                </div>
                    <a href="#" class="btn btn-primary btn-block">More</a>
              </div>
            
           
    `;
  return text;
}
function truncate(str) {
  return str
    .split(" ")
    .splice(0, 4)
    .join(" ");
}
// function inputValidation(input) {
//   if (input.length < 3) {
//     console.log("display modal");
//   }
//   return true;
// }

// let a = textOutput("img.jpg", "Hello", "2017", "Adventure", "5.5");
// document.getElementById("test").innerHTML = a;
// console.log(a)
