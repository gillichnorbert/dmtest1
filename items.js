var items = [{
    id: 1,
    name: "Coca-Cola",
    amount: "0,5 l",
    price: 1290,
    category: "Soda"
},{
    id: 2,
    name: "Bombay",
    amount: "0,04 l",
    price: 1390,
    category: "Shot"  
},{
    id: 3,
    name: "Jack Daniel's",
    amount: "0,04 l",
    price: 1390,
    category: "Shot"
},{
    id: 4,
    name: "Jack & Coke",
    amount: "0,3 l",
    price: 3390,
    category: "Longdrink"
},{
    id: 5,
    name: "Bacardi & Coke",
    amount: "0,3 l",
    price: 3390,
    category: "Longdrink"
}];

const itemPlace = document.getElementById('itemPlace');
const cardContainer = document.createElement('div');
cardContainer.className = 'row';
itemPlace.appendChild(cardContainer);

items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'col-md-6 card-item';
    card.style = 'width: 18rem; margin-top: 5px; margin-right: 10px; display: inline-block;';
    card.innerHTML = `
      <div class="card mb-3" id="itemButton${item.id}">
        <div class="card-body">
          <h5 class="card-title" id="itemName">${item.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted" id="itemAmount">${item.amount}</h6>
          <p class="card-text" id="itemPrice">${item.price} Ft</p>
        </div>
      </div>
    `;
    cardContainer.appendChild(card);
    // Eseményfigyelő hozzáadása a kártyákhoz
    card.addEventListener('click', function() {
      addItemToList(item.name, item.price);
    });
});
