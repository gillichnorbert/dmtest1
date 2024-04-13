// itemList inicializálása üres tömbként
let itemList = [];

// Az itemList inicializálásának helye a többi változóval együtt
const summaryBody = document.getElementById('summeryBody');
const total = document.getElementById('total');
const clearListBtn = document.getElementById('clearListBtn');

// Tétel hozzáadása a listához vagy darabszám növelése
function addItemToList(name, price) {
  let existingItem = itemList.find(item => item.name === name);

  if (existingItem) {
    existingItem.piece++;
  } else {
    itemList.push({ name, price, piece: 1 });
  }

  updateListAndTotal();
}

// Lista és végösszeg frissítése
function updateListAndTotal() {
  summaryBody.innerHTML = ""; // Lista tartalmának törlése
  itemList.forEach(item => {
    var row =`
      <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.piece}</td>
      </tr>
    `;
    summaryBody.innerHTML += row;
  });

  updateTotal();
}

// Végösszeg frissítése
function updateTotal() {
  var sum = 0;
  itemList.forEach(item => {
    sum += item.price * item.piece; // Darabszámot is figyelembe vesszük
  });
  total.innerText = ` ${sum} Ft`;
}

// Lista törlése gomb eseménykezelője
clearListBtn.addEventListener('click', function() {
  itemList.length = 0; // Törlés az itemList tömbből
  updateListAndTotal(); // Lista és végösszeg frissítése
});
