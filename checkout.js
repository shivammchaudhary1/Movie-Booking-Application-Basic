let showClickedVideos = () => {
  let card = document.createElement("div");

  let data = localStorage.getItem("clicked_videos");
  data = JSON.parse(data);
  console.log(data);

  let img = document.createElement("img");
  let h2 = document.createElement("h2");

  img.src = data.img;
  h2.innerText = data.name;

  card.append(img, h2);

  document.getElementById("movie").append(card);
};

showClickedVideos();

let booking = () => {
  let money = localStorage.getItem("amount");
  money = +money;
  //   console.log(typeof money);

  let seat = document.getElementById("number_of_seats").value;
  seat = +seat;

  let total_amount = 100 * seat;

  let msg = document.getElementById("booking_status");

  if (total_amount > money) {
    msg.innerText = "Insufficient Balance!";
  } else {
    let k = money - total_amount;
    localStorage.setItem("amount", k);

    msg.innerText = "Booking Successful!";
    showWalletAmount();

    // window.location.replace("checkout.html");
  }

  //   console.log(total_amount);
};

document.getElementById("confirm").addEventListener("click", booking);

// booking();

let showWalletAmount = () => {
  let amount = localStorage.getItem("amount");
  console.log(amount);

  let wallet = document.getElementById("wallet");
  wallet.innerText = amount;
};
showWalletAmount();
