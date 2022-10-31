let addmoney = () => {
  let btn1 = document.getElementById("add_to_wallet");

  let myfun = () => {
    let money = document.getElementById("amount").value;
    money = +money;
    // console.log(typeof money);

    let added = localStorage.getItem("amount") || 0;
    added = +added;
    console.log(typeof added);
    if (0) {
      localStorage.setItem("amount", money);
    } else {
      let t = money + added;
      localStorage.setItem("amount", t);
    }
    window.location.replace("index.html");
  };

  btn1.addEventListener("click", myfun);
};
addmoney();

//show  amount
let showWalletAmount = () => {
  let amount = localStorage.getItem("amount");
  console.log(amount);

  let wallet = document.getElementById("wallet");
  wallet.innerText = amount;
};
showWalletAmount();
