//67379c73
//https://www.omdbapi.com/?s=${searchquery}&page=1&apikey={your api key}

let showWalletAmount = () => {
  let amount = localStorage.getItem("amount");
  console.log(amount);

  let wallet = document.getElementById("wallet");
  wallet.innerText = amount;
};
showWalletAmount();

let searchMovies = async () => {
  let MovieName = document.getElementById("search").value;

  let response = await fetch(
    `https://www.omdbapi.com/?s=${MovieName}&page=1&apikey=67379c73`
  );
  let data = await response.json();
  let actual_data = data.Search;
  //   console.log(actual_data);
  append_movie(actual_data);
};

let append_movie = (data) => {
  let movie_div = document.getElementById("movies");
  movie_div.innerHTML = null;

  data.forEach((el) => {
    let div = document.createElement("div");
    div.className = "movie_tab";

    let img = document.createElement("img");
    let p = document.createElement("p");
    let btn = document.createElement("button");
    btn.className = "book_now";
    btn.innerText = "Book Now";

    img.src = el.Poster;
    p.innerText = el.Title;

    div.append(img, p, btn);

    btn.onclick = () => {
      let data = {
        img: el.Poster,
        name: el.Title,
      };

      data = JSON.stringify(data);
      localStorage.setItem("clicked_videos", data);
      window.location.replace("checkout.html");

      //   window.location.replace("checkout.html");
    };

    document.getElementById("movies").append(div);
  });
};
