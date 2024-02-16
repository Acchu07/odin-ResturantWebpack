import createFrontPage from './page-load-home';
import createContactPage from './page-load-contact';
import { createMenu } from './menu';

createFrontPage();
document.querySelector('.Home-btn').addEventListener('click',createFrontPage);
document.querySelector('.Contact-btn').addEventListener('click',createContactPage);
document.querySelector('.Menu-btn').addEventListener('click',createMenu);
