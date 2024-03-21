import './menu.css';

// create object food with name and price insert random ancient food item
const food = [
    { name: 'Chicken Biryani', price: '$10.00' },   
    { name: 'Kebab', price: '$5.00' },
    { name: 'Shawarma', price: '$7.00' },
    { name: 'Falafel', price: '$6.00' },
    { name: 'Hummus', price: '$4.00'},
];

function createMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    const h2 = document.createElement('h2');
    h2.textContent = 'Menu.';
    menu.appendChild(h2);

    const table = document.createElement('table');
    const th = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = 'No.';
    const td2 = document.createElement('td');
    td2.textContent = 'Item';
    const td3 = document.createElement('td');
    td3.textContent = 'Price';
    th.appendChild(td1);
    th.appendChild(td2);
    th.appendChild(td3);
    table.appendChild(th);

    food.forEach((item, index) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.textContent = index + 1;
        const td2 = document.createElement('td');
        td2.textContent = item.name;
        const td3 = document.createElement('td');
        td3.textContent = item.price;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    });

    menu.appendChild(table);

    return menu;
}

export default createMenu;