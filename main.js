'use strict'

const colorPalette = document.getElementsByClassName('color');
const spans = document.getElementsByTagName('span');
var colors = new Array();
var myPalettes = [];
const paletteName = document.getElementById('txtMyPalette');
var i = 0;

function generatePalette(){
  colors = [];
  for(let i = 0; i < colorPalette.length; i++) {
    let color = generateNumber();
    color.length == 6 ? color = color : color.length == 5 ? color += '0' : color += '00';
    colorPalette[i].setAttribute("style",`background-color:#${color};`);
    spans[i].innerHTML = `#${color}`;
    colors.unshift(color);
  }
}

function generateNumber() {
  let num = Math.floor(Math.random() * 16777215);
  return num.toString(16);
}

function savePalette() {
  if(colors.length > 0 && paletteName.value != "") {
    myPalettes.push({name: paletteName.value, myColors: colors});
    showPalettes();
    i++;
  } else {
    alert("No has generado tu paleta de colores o no escribiste un nombre para tu paleta.");
  }
}

function showPalettes(){
  const divParent = document.querySelector('.my-palettes-container');
  let myPaletteCard = document.createElement('div');
  myPaletteCard.setAttribute("id", "card"+i);
  myPaletteCard.classList.add("card");
  divParent.appendChild(myPaletteCard);

  let myLabelCard = document.createElement('label');
  myLabelCard.setAttribute("id", "myNamePalette"+i);
  

  localStorage.setItem('myPalettes', JSON.stringify(myPalettes));
  myPalettes = JSON.parse(localStorage.getItem('myPalettes'));

  document.querySelector('#card'+i).appendChild(myLabelCard);
  document.getElementById('myNamePalette'+i).innerHTML = myPalettes[i].name;

  for(let j = 0; j < myPalettes[i].myColors.length; j++) {
    let myColorsDiv = document.createElement('div');
    myColorsDiv.setAttribute("style", `background-color: #${myPalettes[i].myColors[j]}`);
    myColorsDiv.classList.add("color-stick");

    document.querySelector('#card'+i).appendChild(myColorsDiv);

  }
  
}

