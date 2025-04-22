const datas = async () => {
    try {
        const getData = await fetch("./data.json");
        const data = await getData.json();
        displayDatas(data)
    } catch(error) {
        console.log("Hubo un error en cargar los datos")
    }
}
datas();

const thirdSection = document.getElementById("third-section");
const listDivTitle = document.getElementById("list-div-title");
const navColumnLeft = document.querySelector(".nav-column-left");
const booksAnuntions = document.getElementById("books-anuntions");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

const arr = ["arrow-right"];

const firstSectionImg = (data, event) => {
    const {firstSectionTitle, firstSectionDescription, firstSectionImages, LinkAmazon} = data;
    if(event.target.id === "arrow-right") {
        arr.push("arrow-right");
    } else if(event.target.id === "arrow-left") {
        arr.pop();
    }
    let num = arr.length;
    if(num === 6) {
        for(let i = 0; i < num; i++){
            arr.pop();
        }
        arr.push("arrow-right");
    }
    if(num === 0) {
        for(let i = 0; i < 5; i++){
            arr.push("arrow-right");
        }
    }
    num = arr.length;

    booksAnuntions.innerHTML = `
            <div class="title-description">
                    <h2 id="title">${firstSectionTitle[`title-${num}`]}</h2>
                    <p id="description">
                        ${firstSectionDescription[`description-${num}`]}
                    </p>
                    <div id="shop">
                        <button><a target="_blank" href="${LinkAmazon[`link-${num}`]}">Ir a Amazon</a></button>
                    </div>
                    <p>Creditos: Amazon</p>
                </div>
                <div class="radio-sections" id="radio-sections">
                    <div class="radio-div" id="radio-div-1"></div>
                    <div class="radio-div" id="radio-div-2"></div>
                    <div class="radio-div" id="radio-div-3"></div>
                    <div class="radio-div" id="radio-div-4"></div>
                    <div class="radio-div" id="radio-div-5"></div>
                </div>
                <div class="img-book">
                    <img src="${firstSectionImages[`images-${num}`]["img-1"]}" alt="">
                    <img src="${firstSectionImages[`images-${num}`]["img-2"]}" alt="">
                    <img src="${firstSectionImages[`images-${num}`]["img-3"]}" alt="">
                    <img src="${firstSectionImages[`images-${num}`]["img-4"]}" alt="">
                </div> 
        `;
        document.getElementById(`radio-div-1`).style.backgroundColor = "#c7e2e6";
        document.getElementById(`radio-div-${num}`).style.backgroundColor = "#e29c33";
}

const displayDatas = (data) => {
    arrowLeft.addEventListener("click", (event) => {firstSectionImg(data, event)});
    arrowRight.addEventListener("click", (event) => {firstSectionImg(data, event)});
   
    
    data.thirdSection.forEach((element) => {
        listDivTitle.innerHTML += `
            <li class="list-title"><a class="navbar-list" href="#contetn-book-${element.idContentBook}">${element.BookTitle}</a></li>
        `;

        thirdSection.innerHTML += `
        <div id="contetn-book-${element.idContentBook}" class="contetn-book">
                <div id="third-img-book" class="third-img-book"> 
                    <img id="first-img-${element.idContentBook}" src="${element.ImageBookFirst}" alt="Image-Book">  
                </div>
                <div id="third-data-book" class="third-data-book">
                    <h2>${element.BookTitle}</h2>
                    <p>Tapa Blanda: $<samp id="price-first">${element.priceSoft}</samp></p>
                    ${element.priceHard !== "" ? `<p>Tapa Dura: $<span id="price-second">${element.priceHard}</span></p>` : "<p>Tapa Dura: No Hay</p>"}
                    <button><a target="_blank" href="${element.linkAmazon}">Ir Amazon</a></button>
                    <p>creditos: Amazon</p>
                    
                </div>
            </div>
            <div id="third-description-book" class="third-description-book">
                <p>${element.BookDescription}</p>
            </div>
            <hr>
        ` ;
    });
    
}

const buttonSearch = document.getElementById("button-search");
const divInput = document.querySelector(".div-input");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navbarMenu = document.querySelector(".navbar-menu");
const navMiddle = document.querySelector(".nav-middle nav"); 
const coverBackground = document.querySelector(".cover-background");


const modWindow = () => {
    
    if(window.innerWidth < 980 ) {
        navMiddle.style.display = "none";
        coverBackground.style.display = "none";
        navColumnLeft.style.position = "fixed";
        navColumnLeft.style.display = "none";
        navColumnLeft.style.top = "60px";
        if (window.innerWidth < 650 ) {
            navColumnLeft.style.top = "85px";
            navColumnLeft.style.display = "none";
        }
    } else if(window.innerWidth > 980 ){
        navMiddle.style.display = "block";
        coverBackground.style.display = "none";
        navColumnLeft.style.display = "flex";
        if(window.scrollY >= 1050 && window.scrollY <= 23600) {
            navColumnLeft.style.display = "flex"
            navColumnLeft.style.position = "fixed";
            navColumnLeft.style.top = "100px";
        } else {
            navColumnLeft.style.display = "flex"
            navColumnLeft.style.position = "absolute";
            navColumnLeft.style.top = "1142px";
        }
        
    }
}

modWindow()

window.addEventListener("scroll", modWindow);
window.addEventListener("resize", modWindow)

let displaySearch = true;

buttonSearch.addEventListener("click", () => {
    if(displaySearch) {
        divInput.style.display = "flex";
        displaySearch = false;
    } else {
        divInput.style.display = "none";
        displaySearch = true;
    }
})




openMenu.addEventListener("click", () => {
    navMiddle.style.display = "block";
    document.body.style.overflow = "hidden"
    coverBackground.style.display = "block";
})

closeMenu.addEventListener("click", () => {
    navMiddle.style.display = "none";
    document.body.style.overflow = "scroll"
    coverBackground.style.display = "none";
})

let vfMenu = true;
navbarMenu.addEventListener("click", () => {
    if(vfMenu) {
        navColumnLeft.style.display = "block";
        document.body.style.overflow = "hidden"
        navbarMenu.innerHTML = '<i class="nf nf-md-arrow_up_thin"></i>';
        vfMenu = false;
    } else {
        navColumnLeft.style.display = "none";
        document.body.style.overflow = "scroll"
        navbarMenu.innerHTML = '<i class="nf nf-md-arrow_down_thin"></i>';
        vfMenu = true;
    }
    
})