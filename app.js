{
    document.querySelector('p').addEventListener('click' , function() {
        dice();
    },false);

    function dice() {
        const imgElement = document.getElementById('image');
        const h1Element = document.querySelector('h1');
        const  r_math = Math.floor(Math.random()*6)+1;
        imgElement.src = `./img/${r_math}.png`;
        h1Element.textContent = r_math;
    }
}