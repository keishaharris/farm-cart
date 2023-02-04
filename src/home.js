function home(){

    const mainDiv = document.createElement('div')
    mainDiv.classList.add('main-ctn');
    const mainTitle = document.createElement('div');
    mainTitle.classList.add('main-title');

    const paragraph = document.createElement('p');
    paragraph.classList.add('typed');
    paragraph.innerText = '&lemon &lime &mango &kale &apples &ginger . . .';

    const miniTitle = document.createElement('p');
    miniTitle.classList.add('mini-title');
    miniTitle.innerText = '&mango &avocado &orange &lemon &papaya &cucmber &spinach &beets &banana & apples &berries &coconut &dates';

    const h2 = document.createElement('h2');
    h2.innerText = 'your one-stop for all your smoothie & juice needs';

    mainTitle.append(paragraph);
    mainDiv.append(mainTitle, miniTitle, h2);

    return mainDiv
}
export default home;