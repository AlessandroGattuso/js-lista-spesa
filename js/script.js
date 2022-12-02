const list = [
  "Pomodoro",
  "Pasta",
  "Sale",
  "Acqua",
  "Peperoni",
  "Fesa di tacchino"
]

let item;
let i = 0;
const shoppingList = document.querySelector("ul");

while(i < list.length){
  item = document.createElement("li");
  item.innerText = list[i++];
  item.classList.add("list-group-item")
  shoppingList.append(item);
}