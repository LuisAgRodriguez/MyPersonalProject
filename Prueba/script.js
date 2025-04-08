const container = document.getElementById("container");

const multiplyStars = () => {
    
    const num = Math.floor(Math.random() * (300 - 100 + 1) + 100);
    console.log(num)
    for(let i = 0; i < num; i++){
        const numPx = Math.floor(Math.random(1) * 8);
        const trX = Math.floor(Math.random() * 1365);
        const trY = Math.floor(Math.random() * 590);
        container.innerHTML += `
            <div class="stars-${i}"></div>
        `
        const starsTwo = document.querySelector(`.stars-${i}`);
        starsTwo.style.width = `${numPx}px`;
        starsTwo.style.height = `${numPx}px`;
        starsTwo.style.transform = `translate(${trX}px, ${trY}px)`
        starsTwo.style.backgroundColor = "#a0cef3";
        starsTwo.style.boxShadow = `0px 0px 10px 1px #c8e5fc`;
        starsTwo.style.borderRadius = "50px";
        starsTwo.style.position = "absolute";
        starsTwo.style.top = "0px";
        starsTwo.style.left = "0px"
        starsTwo.style.animationName = "mover";
        starsTwo.style.animationDuration = "3s";
    }
    
}

multiplyStars();