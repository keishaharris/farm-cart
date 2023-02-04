import _ from 'lodash';

function header () {

    //header container
    const header = document.createElement('HEADER');
    header.classList.add('header-size');

    const logoCtn = document.createElement('div');
    logoCtn.classList.add('logo-ctn');

    //Div container with logo 
    const logoImgDiv = document.createElement('div');
    const logo = document.createElement('img');
    logo.setAttribute('src', 'images/citrus-fruit-brunch-icon.jpg');
    logo.setAttribute('alt', 'Sliced Citrus Fruits Logo');
    logo.setAttribute('class', 'logo-img');
    logoImgDiv.appendChild(logo);  

    //Div container with logo title
    const logoTitleDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.innerText = 'farm';
    const h4 = document.createElement('h4');
    h4.innerHTML = 'market';
    logoTitleDiv.append(h3, h4);

    logoCtn.append(logoImgDiv, logoTitleDiv);

    //Nav container
    const navCtn = document.createElement('div');
    navCtn.classList.add('nav-ctn');

    const list = document.createElement('ul');
    list.classList.add('nav');
    

    let navArray = ['home', 'about', 'menu', 'contact'];

    for(let i=0; i < navArray.length; i++){
        let item = document.createElement('li');
  
        item.innerText= navArray[i];
        item.setAttribute("id", navArray[i]);
        list.appendChild(item);
    }

    navCtn.append(list);

    

    //append all content to header
   
    header.append(logoCtn, navCtn);

    return header;
}

export default header;

