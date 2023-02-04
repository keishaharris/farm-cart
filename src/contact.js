function contact(){

    const contactCtn = document.createElement('div');
    const contactForm = document.createElement('form');

    const h1 = document.createElement('h1');
    h1.innerText = 'contact us';

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute = ('for', 'name');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('required');
    nameInput.setAttribute('placeholder', 'your name');
    nameInput.setAttribute('name', 'name');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute = ('for', 'email');
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('required');
    emailInput.setAttribute('placeholder', 'your email');
    emailInput.setAttribute('name', 'email');

    const msgLabel = document.createElement('label');
    msgLabel.setAttribute = ('for', 'msg');
    const msgInput = document.createElement('textarea');
    msgInput.setAttribute('col', '5');
    msgInput.setAttribute('rows', '4');
    msgInput.setAttribute('required');
    msgInput.setAttribute('placeholder', 'type your message here...');
    msgInput.setAttribute('name', 'message');
    
}
export default contact