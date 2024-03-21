import createHome from './home/home.js';
import createMenu from './menu/menu.js';
import createContact from './contact/contact.js';


const buttons = document.querySelectorAll('button');
const content = document.getElementById('content');


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonId = e.target.id;
        if (buttonId === 'homebtn') {
            content.textContent = '';
            content.appendChild(createHome());
        }
        if (buttonId === 'menubtn') {
            content.textContent = '';
            content.appendChild(createMenu());
        }
        if (buttonId === 'contactbtn') {
            content.textContent = '';
            content.appendChild(createContact());
        }
    });
});


content.appendChild(createHome());



