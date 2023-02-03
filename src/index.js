import header from './header.js';
import footer from './footer.js';

const container = document.getElementById('container');
container.append(header());

const mainCtn = document.createElement('MAIN');
mainCtn.classList.add('main-size');

const mainDiv = document.createElement('div')
mainDiv.classList.add('main-ctn');

mainCtn.append(mainDiv);
container.append(mainCtn);

container.append(footer());

