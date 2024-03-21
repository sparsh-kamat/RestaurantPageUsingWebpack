import createHome from './home/home';
import createMenu from './menu/menu';
import createContact from './contact/contact';


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

content.appendChild(createMenu());



