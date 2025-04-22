const displaySearh = document.getElementById("display-searh");
const headerMenu = document.getElementById("header-menu");
const searhMenu = document.getElementById("searh-menu")
const headerRight = document.querySelector(".header-right");

let vf = true;

const displayHeader = () => {
    if(window.innerWidth <= 1025){
        headerRight.style.display = "none";
        headerMenu.style.display = "block";
        headerRight.style.backgroundColor = "#ffffff"
    }else{
        headerRight.style.display = "block";
        headerMenu.style.display = "none";
        headerRight.style.backgroundColor = "transparent"
    }

    if(window.scrollY >= 50) {
        document.querySelector("header").style.backgroundColor = "#ffffff";
        displaySearh.style.display = "block";
    } else {
        document.querySelector("header").style.backgroundColor = "transparent";
        displaySearh.style.display = "none";
    }

    if(window.innerWidth <= 750) {
        document.querySelector("header").style.backgroundColor = "#ffffff";
        displaySearh.style.display = "none";
    }
}
headerMenu.addEventListener("click", () => {
    if(vf){
        headerRight.style.display = "block";
        vf = false;
    } else {
        headerRight.style.display = "none";
        vf = true;
    }
    
   })

 window.addEventListener("scroll", displayHeader);
 window.addEventListener("resize", displayHeader);
 
 displayHeader()


