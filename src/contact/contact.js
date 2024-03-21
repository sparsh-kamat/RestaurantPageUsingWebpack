import './contact.css';

function createContact() {

    const contact = document.createElement('div');
    contact.id = 'contact';

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';
    contact.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = 'We are located at 123 Forklore Street, Forklore City, Forklore Country. You can reach us at 123-456-7890 or email us at forklore@gmail.com';

    contact.appendChild(p);

    return contact;
}
  

export default createContact;