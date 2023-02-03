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

    //Nav container
    const navCtn = document.createElement('div');
    navCtn.classList.add('nav-ctn');

    //Div container with navigation links
    const navigation = document.createElement('NAV');
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    const navArray = ['home', 'about', 'menu', 'contact'];

    // navArray.forEach = (link) => {
        li.innerText= 'home about menu contact';
        ul.append(li);
        navigation.append(ul);
        navCtn.appendChild(navigation)

        // return navigation;

    // }

    //append all content to header
    logoCtn.append(logoImgDiv, logoTitleDiv);
    header.append(logoCtn, navCtn);

    return header;
}

export default header;

