// accessories price set common function
function priceCommonFun(event, selectValue, selectAmout, price) {
  // get the element
  const selectCost = document.getElementById(selectAmout + "-cost");
  // get the element value
  const selectBtnValue = event.target.value;
  //   check element value or event value is equal
  if (selectBtnValue == selectValue.val1) {
    selectCostValue = price.price1;
  } else if (selectBtnValue == selectValue.val2) {
    selectCostValue = price.price2;
  } else if (selectBtnValue == selectValue.val3) {
    selectCostValue = price.price3;
  }
  //   inset value
  selectCost.innerText = selectCostValue;
}

// get best price inner text
const mainAmount = document.getElementById("main-price").innerText;

// get total amount element
const totalPrice = document.getElementById("total-price");
const latesPrice = document.getElementById("lates-price");

// total price calculate common function
function totalPriceCommonFun() {
  // get all accessories inner text
  const memoryCost = document.getElementById("memory-cost").innerText;
  const storageCost = document.getElementById("storage-cost").innerText;
  const deliveryCost = document.getElementById("delivery-cost").innerText;
  //  store total price
  const totalAmount =
    parseInt(mainAmount) +
    parseInt(memoryCost) +
    parseInt(storageCost) +
    parseInt(deliveryCost);
  // set total price in element
  totalPrice.innerText = totalAmount;
  latesPrice.innerText = totalAmount;
}

// select memory button and events bubble
document
  .getElementById("select-memory")
  .addEventListener("click", function (event) {
    const selectValue = { val1: "ram-8gb", val2: "ram-16gb" };
    const price = { price1: 0, price2: 180 };

    priceCommonFun(event, selectValue, "memory", price);

    totalPriceCommonFun();
  });

// select storage button and events bubble
document
  .getElementById("select-storage")
  .addEventListener("click", function (event) {
    const selectValue = {
      val1: "ssd-256gb",
      val2: "ssd-512gb",
      val3: "ssd-1tb",
    };
    const price = { price1: 0, price2: 100, price3: 180 };

    priceCommonFun(event, selectValue, "storage", price);

    totalPriceCommonFun();
  });

// select delivery button and events bubble
document
  .getElementById("select-delivery")
  .addEventListener("click", function (event) {
    const selectValue = { val1: "free-delivery", val2: "fast-delivery" };
    const price = { price1: 0, price2: 20 };

    priceCommonFun(event, selectValue, "delivery", price);

    totalPriceCommonFun();
  });

// get apply-cupon-button and click event
document.getElementById("apply-cupon").addEventListener("click", function () {
  // get input field element
  const cuponInput = document.getElementById("cupon-input");
  const totalPriceValue = parseInt(totalPrice.innerText);

  //   check cupon code
  if (cuponInput.value == "stevekaku") {
    // discount price calculation
    const discount = (totalPriceValue * 20) / 100;

    // set lates price inner text
    latesPrice.innerText = totalPriceValue - discount;
  } else {
    alert("Cupon code invalid");
  }
  cuponInput.value = "";
});
