function about () {
const element = document.createElement('div');
element.classList.add('about-ctn');
const h1 = document.createElement('h1');
h1.innerText = 'about farm market.';

const span =document.createElement('span');
span.classList.add('about-txt');
span.innerText= `we love all things health. farm market was created for you health needs. 
we care about providing you with the most nutritious and healthies smoothies and
shakes in the city! Come stop by and support our health movement. `

element.append(h1, span)

}

export default about;