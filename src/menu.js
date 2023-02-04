function menu(){

    const menuCtn = document.createElement('div');
    menuCtn.classList.add('menu-ctn');

    const h1 = document.createElement('h1');
    h1.innerText = 'menu. [Juices] or [smoothies]';

    menuCtn.append(h1);
    
    const menuList = [
        '[to the BEET] - carrot, orange, apple, beets, lemon.',
        '[the GINGER rinse] - carrot, orange, celery, ginger.',
        '[HONEYaide] - oranges, ginger, grapefruit, lemon, pineapple, honey.',
        '[the cleanser] - apple, beets carrot, ginger.',
        '[the BASIC] - apple, carrot, spinach, kale, ginger.',
        '[the Hangover] - kale, apple, celery, lemon, spinach.',
        '[the rainbow] - apple, ginger, celery, lemon, spinach.',
        '[the GREEN thumb] - kale, spinach, cucumber, celery.',
    ]

    menuList.forEach(item => {
        console.log(item);
        const menuDiv = document.createElement('div');
        menuDiv.innerText = item;
        menuCtn.append(menuDiv);

    })

    return menuCtn
}
export default menu