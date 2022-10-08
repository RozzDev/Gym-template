let myslide = document.getElementsByClassName("myslide");
let dot = document.getElementsByClassName("span");
let list = document.querySelector(".list");
let close = document.querySelector(".fa-xmark");
let bars = document.querySelector(".fa-bars");


let active = 1;
displaySlide(active);

function nextSlide(n) {
    displaySlide(active += n)
}
function currentSlide(n){
    displaySlide(active = n)
}

function displaySlide(n){
    var i;
    if(n > myslide.length && n > dot.length){
        active = 1;
    }
    if(n <1){
        active = myslide.length;
        active = dot.length;
    }
    for(let i = 0; i < myslide.length; i++){
        myslide[i]++
        myslide[i].style.display = "none"
    }
    for(let i = 0; i < dot.length; i++){
        dot[i].style.opacity = "70%"
    }
    dot[active-1].style.opacity = "1"
    myslide[active - 1]--
    myslide[active - 1].style.display = "block"
}
function work(){
    bars.addEventListener("click", () => {
        list.style.display = "block";
        bars.style.display = "none";
        close.style.display = "block";
    })
    close.addEventListener("click", () => {
        list.style.display = "none";
        bars.style.display = "block";
        close.style.display = "none";
    })
    return {
        list
    }
}
work()
function setAll(){
    let unorderList = document.getElementsByTagName("li");
    for(let i = 0; i < unorderList.length; i++){
        let order = unorderList[i];

        order.addEventListener("click", () => {
            list.style.display = "none"
            close.style.display = "none";
            bars.style.display = "block";
        })
    }
}
setAll();
function ifAll(){
    let two = document.getElementById("two")
    let top = document.querySelector(".back-to-top")
    document.addEventListener("scroll", ()=>{
        if(scrollY >= 500){
            top.style.display = "block"
        }
        else{
            top.style.display = "none"
        }
    })
}
ifAll()

