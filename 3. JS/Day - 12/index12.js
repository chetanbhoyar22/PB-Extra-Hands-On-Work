console.log("Day - 12 JS Class");

console.log("---DOM---");
console.log("---ByTagName---");
let element1=document.getElementsByTagName("h1");
console.log(element1);
console.log(element1[0].innerText);

console.log("---ByClassName---");
const element2= document.getElementsByClassName("heading");
console.log(element2[0].innerHTML); 

console.log("---ById---");
const element3= document.getElementById("unique");
console.log(element3.innerHTML); 

console.log("---Using function OnClick - Styling---");
function clickMe(){
    const text1=document.getElementsByTagName("h3");
    text1[0].style.color="red";
    text1[0].style.backgroundColor="yellow";
    text1[0].innerText="Welcome to India";
}

function show(){
    const text2=document.getElementById("text");
    text2.innerText="Elevation Academy"
}

function visible(){
    const text3=document.getElementsByTagName("h5");
    text3[0].innerText="Way to Mumbai";
}

function invisible(){
    const text4=document.getElementsByTagName("h5");
    text4[0].innerText=" ";
}

function text(){
    const element4 = document.getElementById('hey');
    alert(element4.innerText);
}

function html(){
    const element5 = document.getElementById('hey');
    alert(element5.innerHTML);
}

console.log("----Using function OnClick - creating element---");
function create(){
    //creating elements:
    const element6 = document.createElement('span');
    element6.setAttribute("id","get")
    element6.innerText = "Span Tag Created" + " ";
    console.log(element6);
    //on screen
    const parent = document.getElementById('parent');
    parent.appendChild(element6);
}