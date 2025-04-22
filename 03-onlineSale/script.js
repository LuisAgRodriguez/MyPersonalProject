const datas = async () => { 
    try{
        const getData = await fetch("./data.json");
        const data = await getData.json();
        allData(data);
    } catch (error) {
        console.log("error")
    }
}
datas()

const containerFirst= document.getElementById("container-first");
const productsContent = document.getElementById("products-content")

const allData = (data) => {
    const {users, commnets} = data;
    users.map((element, index) => {
        containerFirst.innerHTML += `
        <div id="user-comments">
            <p class="user-content"><i class="nf nf-fa-user_circle"></i><a href="#" id="user">${element}</a></p>
                <p id="comments">
                    ${commnets[index]}
                </p>
                <p>
                    <i class="nf nf-md-star"></i>
                    <i class="nf nf-md-star"></i>
                    <i class="nf nf-md-star"></i>
                    <i class="nf nf-md-star"></i>
                    <i class="nf nf-md-star"></i>
                </p>
        </div>
        ` 
    })

    const {category, products, price, visits} = data;
    category.map((element, index) => {
        productsContent.innerHTML += `
            <div id="products-category">
                <img src="Images/1230944.jpg" alt="" style="width: 250px; height: 200px">
                <div class="config-text">
                    <h3 id="title-category">${element}</h3>
                    <p><p class="text-first">Producto</p> <span id="text-product">${products[index]}</span></p>
                    <p><p class="text-first">Precio</p> <p id="price">${price[index]}</p>
                    <p id="visits">Más de ${visits[index]} de compras</p>
                    <p><a href="#">Ver productos</a></p>
                </div>
            </div>   
        `
    })

}

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const displayDark = document.getElementById("display-dark");
const headerNav = document.querySelector("header nav");

const actMenu = () => {
    if(window.innerWidth < 700) {
        headerNav.style.display = "none"
        openMenu.style.display = "block"
        closeMenu.style.display = "block"
    } else {
        headerNav.style.display = "block"
        openMenu.style.display = "none"
        closeMenu.style.display = "none"
        
    }

    if(headerNav.style.display === "none") {
        displayDark.style.display = "none"
    }   

}

openMenu.addEventListener("click", () => {
    headerNav.style.display = "block"
    displayDark.style.display = "block"
})
closeMenu.addEventListener("click", () => {
    headerNav.style.display = "none"
    displayDark.style.display = "none"
})


window.addEventListener("resize", actMenu);
