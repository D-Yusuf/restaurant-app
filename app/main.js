import { menuArray } from "./src/data.js";

window.onload = (e) => render();

function getItemsHtml() {
  let itemsHtml = "";
  menuArray.forEach((item) => {
    itemsHtml += `
        <!-- OPTION -->
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
          <div class="fle">
            <button
              id="add-btn"
              class="font-inter ring-[1.5px] ring-[#DEDEDE] h-[50px] w-[50px] text-[32px] text-center rounded-full font-extralight"
            >
              +
            </button>
          </div>
        </div>
        <hr />
        <!--// OPTION //-->
        `;
  });
  return itemsHtml;
}
function render() {
  document.getElementById("options").innerHTML = getItemsHtml();
}
// document.getElementById('add-btn').addEventListener('click', console.log("clicked"))

/*

*/
