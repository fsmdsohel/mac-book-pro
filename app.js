function totalPriceCommonFun() {
  const mainCost = document.getElementById("main-cost").innerText;
  const memoryCost = document.getElementById("extra-memoryCost").innerText;
  const storageCost = document.getElementById("storage-cost").innerText;
  const deliveCost = document.getElementById("delivery-cost").innerText;

  const totalPrice =
    parseInt(mainCost) +
    parseInt(memoryCost) +
    parseInt(storageCost) +
    parseInt(deliveCost);

  document.getElementById("total-price").innerText = totalPrice;

  // start bonus part
  document.getElementById("totalPrice-bonus").innerText = totalPrice;

  // pin matched
}

document.getElementById("8gb-best").addEventListener("click", function () {
  let normalMalMemory = document.getElementById("extra-memoryCost");

  normalMalMemory.innerText = 0;
  totalPriceCommonFun();
});

document.getElementById("16gb-memory").addEventListener("click", function () {
  var extraMemry = document.getElementById("extra-memoryCost");

  extraMemry.innerText = 180;
  totalPriceCommonFun();
});

document.getElementById("best-storage").addEventListener("click", function () {
  var normalStorage = document.getElementById("storage-cost");
  normalStorage.innerText = 0;

  totalPriceCommonFun();
});

document
  .getElementById("extra-storageCost")
  .addEventListener("click", function () {
    var extraStorage = document.getElementById("storage-cost");

    extraStorage.innerText = 100;

    totalPriceCommonFun();
  });

document.getElementById("1tb-extra").addEventListener("click", function () {
  var extraStorage = document.getElementById("storage-cost");

  extraStorage.innerText = 180;

  totalPriceCommonFun();
});

document.getElementById("shipping-cost").addEventListener("click", function () {
  var normalDelivery = document.getElementById("delivery-cost");

  normalDelivery.innerText = 0;

  totalPriceCommonFun();
});

document
  .getElementById("extradelvery-charge")
  .addEventListener("click", function () {
    var normalDelivery = document.getElementById("delivery-cost");

    normalDelivery.innerText = 20;

    totalPriceCommonFun();
  });

document
  .getElementById("apply-discount")
  .addEventListener("click", function () {
    const cuponInput = document.getElementById("cupon-input");
    const totalPrice = document.getElementById("total-price").innerText;
    const totalPriceValue = document.getElementById("totalPrice-bonus");

    if (cuponInput.value == "stevekaku") {
      const discount = (totalPrice * 20) / 100;
      console.log(discount);
      totalPriceValue.innerText = parseInt(totalPrice) - discount;
    } else {
      alert("Invalid cupon");
    }
    cuponInput.value = "";
  });
