import './home.css';

function createHome() {
    const home = document.createElement('div');
    home.id = 'home';

    const h2 = document.createElement('h2');
    h2.textContent = 'Welcome to Forklore';
    home.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = 'We are a family-owned restaurant that serves delicious food made from fresh ingredients. We have been in business for over 20 years and have been serving our customers with love and care. We are proud to be a part of the community and we look forward to serving you.';
    home.appendChild(p);

    return home;
}

export default createHome;

