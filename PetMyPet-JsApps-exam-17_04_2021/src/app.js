import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js'

import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { myPets } from './views/myPets.js';

import * as api from'./api/data.js';

window.api = api;

const main = document.querySelector('#site-content')
// const userId = sessionStorage.getItem('userId');
document.getElementById('logoutBtn').addEventListener('click', logout)
// setUserNav();

page('/', decorateContext, dashboardPage);
page('/data/pets?sortBy=_createdOn%20desc', decorateContext, dashboardPage);
page('/data/pets/:id', decorateContext, detailsPage);
page('/data/pets/edit/:id', decorateContext, editPage);
page('/data/myPets', decorateContext, myPets);
page('/data/pets', decorateContext, createPage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);


page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

//navigation buttons visibility
function setUserNav() {
    /**
    *Sets the visibility of navbar btn-s for logged and guest users.
    */
    const userId = sessionStorage.getItem('userId');
    const email = sessionStorage.getItem('email');

    if (userId != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        document.getElementById('userEmail').textContent = `Welcome, ${email}`;
    } else {
        document.getElementById('userEmail').textContent = '';
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

async function logout() {
    await api.logout();
    setUserNav();
    page.redirect('/');
}