import { menuArray } from "./src/data.js";
// let orderedItems = [];

window.onload = () => render();

document.addEventListener("click", (e) => {
  if (e.target.dataset.id) {
    addToOrderList(e.target.dataset.id);
  }
  if (e.target.dataset.remove) {
    removeFromOrderList(e.target.dataset.remove);
  }
  // render()
});
function addToOrderList(targetId) {
  const addedItemObj = menuArray.filter((item) => {
    return item.id == targetId;
  })[0];
  document.getElementById("items").innerHTML += `
  <div data-item-id="${targetId}"" class="item flex justify-between">
    <span class="flex gap-x-3">
      <h2 class="text-[28px]">${addedItemObj.name}</h2>
      <button class="delete-btn text-xs text-[#BBBBBB] font-open-sans" data-remove="${targetId}">remove</button>
    </span>
    <h6 data-value="${addedItemObj.price}">$${addedItemObj.price}</h6>
  </div>
`;

totalOrderPrice()
}
function removeFromOrderList(targetId) {
  const itemToRemove = document.querySelector(`[data-item-id="${targetId}"]`);
  const removeBtn = document.querySelector(`[data-remove="${targetId}"]`);
  // console.log(itemToRemove)
  if (removeBtn) {
    itemToRemove.remove();
  }
}
function totalOrderPrice() {
  const orderedItems = document.querySelectorAll('[data-value]');
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += parseFloat(item.dataset.value);
  });
  document.getElementById("total-price").innerText = `$${totalPrice}`
}

function getItemsHtml() {
  let itemsHtml = "";
  menuArray.forEach((item) => {
    itemsHtml += `
        <!-- OPTION -->
            <div class="container">
            <div class="flex justify-between flex-wrap mt-[67px] pb-[51px]">
            <!-- Specs -->
            <div class="flex flex-row">
            <!-- Pic (emoji) -->
            <img alt="${item.name}pic" src="${item.emoji}" class="mr-6 w-[70px h-[89px]" />
            <div class="flex flex-col">
                <h1 class="text-[28px]">${item.name}</h1>
                <h3 class="text-[#8B8B8B] text-base mt-2">
                ${item.ingredients}
                </h3>
                <h4 class="text-xl mt-2">$${item.price}</h4>
                </div>
                </div>
                <!--// Specs //-->
                <!-- Add Btn -->
                <div class="flex">
                <button
                data-id = "${item.id}"
                class="font-inter ring-[1.5px] ring-[#DEDEDE] h-[50px] w-[50px] text-[32px] text-center rounded-full font-extralight"
                >
                +
                </button>
                </div>
                </div>
                <hr />
              </div>
              <!--// OPTION //-->
              `;
  });
  return itemsHtml;
}
function render() {
  document.getElementById("options").innerHTML = getItemsHtml();
}

/*
<!-- TOTAL -->
          <div class="flex justify-between mt-[14px]">
            <span class="flex gap-x-3">
              <h2 class="text-[28px]">Total:</h2>
            </span>
            <h3>$21</h3>
          </div>
          <!--// TOTAL //-->

*/
