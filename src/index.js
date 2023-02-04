import header from './header.js';
import footer from './footer.js';
import menu from './menu.js';
import contact from './contact.js';
import about from './about.js';
import home from './home.js';


//homepage - default
const container = document.getElementById('container');
container.append(header());

const mainCtn = document.createElement('MAIN');
mainCtn.classList.add('main-size');
mainCtn.append(home());
container.append(mainCtn);


//remove content from main screen
function remove(){
    mainCtn.innerHTML= "";
}


//event handling 
function renderContent(){
    const buttons = document.querySelectorAll('li');
        buttons.forEach(button => {
            button.addEventListener('click', ()=> {
            const expression = button.id;
            switch(expression){
                case 'about':
                    remove();
                    mainCtn.append(about());
                    break;
                case 'menu':
                    remove();
                    mainCtn.append(menu());
                    break;
                case 'contact':
                    remove();
                    mainCtn.append(contact());
                    break;
                default:
                    remove();
                    mainCtn.append(home());
    }
        })
    })
    
}

container.append(footer());
renderContent();
