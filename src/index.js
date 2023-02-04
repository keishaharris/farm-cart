import header from './header.js';
import footer from './footer.js';

const container = document.getElementById('container');
container.append(header());

const mainCtn = document.createElement('MAIN');
mainCtn.classList.add('main-size');

const mainDiv = document.createElement('div')
mainDiv.classList.add('main-ctn');


//home page 
const mainTitle = document.createElement('div');
mainTitle.classList.add('main-title');

const paragraph = document.createElement('p');
paragraph.classList.add('typed');
paragraph.innerText = '&lemon &lime &mango &kale &apples &ginger . . .';

const miniTitle = document.createElement('p');
miniTitle.classList.add('mini-title');
miniTitle.innerText = '&mango &avocado &orange &lemon &papaya &cucmber &spinach &beets &banana & apples &berries &coconut &';

const h2 = document.createElement('h2');
h2.innerText = 'your one-stop for all your smoothie & juice needs';

mainTitle.append(paragraph);
mainDiv.append(mainTitle, paragraph, h2);




mainCtn.append(mainDiv);
container.append(mainCtn);

container.append(footer());

