"use strict";

window.addEventListener("load", initialize);

// Globale variabelen
let inpInput, divFeedback, errandList, numberOfProducts;
let divArrayFunctions;
let divArrayFunctionsAdvanced;
let divMulti;
let inpFirstname, inpName, inpMunicipality;
let adresses;
let divDataDisplay;

function initialize() {

  // DOM elementen ophalen
  inpInput = document.getElementById("input");
  inpFirstname = document.getElementById("firstname");
  inpName = document.getElementById("lastname");
  inpMunicipality = document.getElementById("municipality");
  divFeedback = document.getElementById("feedback");
  divArrayFunctions = document.getElementById("array-functions");
  divArrayFunctionsAdvanced = document.getElementById("array-functions-advanced");
  divMulti = document.getElementById("multi");
  divDataDisplay = document.getElementById("data-display");
  
  // Eventlisteners toevoegen
  const btnArrayResult = document.querySelector("#array-result");
  const btnMultiAdd = document.querySelector("#multi-add");
  btnArrayResult.addEventListener("click", addProductToArray);
  btnMultiAdd.addEventListener("click", addAdress);

  // Initialisatie van de variabelen
  numberOfProducts = 0; 
  errandList = [];

  // Functions aanroepen
  fillArrayFunctions();
  fillArrayFunctionsAdvanced();
  fillAdresses();
  showAdresses();
  fillWithData();
}

function compare(a, b, propertyName) {

  if (a[propertyName] < b[propertyName]) {
    return -1;
  }

  if (a[propertyName] > b[propertyName]) {
    return 1;
  }

  return 0;
}

function fillWithData() {

  sitcomData.sort((a, b, c) => compare(a, b, "rank"));

  for (let i = 0; i < sitcomData.length; i++) {
    const sitcomDiv = makeDataDivision(sitcomData[i]);
    divDataDisplay.appendChild(sitcomDiv);
  }

}

function makeDataDivision(object) {
  const dataDivision = document.createElement("div");
  dataDivision.className = "dataDiv";
  dataDivision.innerHTML = `Rank: ${object.rank} <br/> 
                          SitcomName: ${object.sitcomName}  <br />
                          Years: ${object.years}`; 

  return dataDivision;
}

function fillAdresses() {
  adresses = [];
  adresses[0] = ["De Donder", "Walter", "Affligem"];
  adresses[1] = ["Crucke", "Koen", "Gent"];
  adresses[2] = ["Verhulst", "Gert", "Antwerpen"];
}

function showAdresses()
{
  let summary = "";
 
  for (let i = 0; i < adresses.length; i++) {
      summary += `${adresses[i][1]} ${adresses[i][0]} - ${adresses[i][2]}<br />` ;      
  }

  divMulti.innerHTML = summary;

}

function addAdress() {
  const firstname = inpFirstname.value;
  const name = inpName.value;
  const municipality = inpMunicipality.value;
  const newAdress = [name, firstname, municipality];

  adresses.push(newAdress);
  showAdresses();

  fillWithData.value = "";
  inpName.value = "";
  inpMunicipality.value = "";
}

// Arrow Functions in variabelen
let findEven = p => p % 2 === 0;
let double = p => p * 2;

function fillArrayFunctionsAdvanced() {

  const ageArray = [15, 31, 17 ,19 ,52 ,51];
  let doubleAgeArray;
  let result = "";

  doubleAgeArray = ageArray.map(double);

  result = `  ageArray => ${ageArray}  <br /> 
              ageArray.every(p => p >= 18) => ${ageArray.every(p => (p >= 18))} <br />
              ageArray.filter(findEven) => ${ageArray.filter(findEven)} <br />
              ageArray.find(p => p >= 18) => ${ageArray.find(p=> p >= 18)} <br />
              ageArray.findIndex(p => p >= 18) => ${ageArray.findIndex(p => p >= 18)} <br/>
              ageArray.indexOf(19) => ${ageArray.indexOf(19)} <br/>
              ageArray.includes(18) => ${ageArray.includes(18)} <br/>
              ageArray.some(p => p < 18) => ${ageArray.some(p => p < 18)} <br/>
              doubleAgeArray = ageArray.map(double) => ${doubleAgeArray} <br />
              ageArray.reduce ((a, b) => (a + b), 0) => ${ageArray.reduce((a, b) => (a + b), 0)} <br />
  `;

  divArrayFunctionsAdvanced.innerHTML = result;

}

function fillArrayFunctions() {
  // local vars
  const fruits = ['Appel', 'Peer', 'Banaan', 'Kiwi','Meloen','Druif'];
  const vegetables = ['Wortel', 'Sla', 'Tomaat','Komkommer'];
  let result = '<h3> Overzicht Funties </h3>';

  result += ` fruits.join() => ${fruits.join()} <br />
              vegetables.join(-) => ${vegetables.join('-')} <br />
              fruits => ${fruits} <br />
              vegetables.concat(fruits) => ${vegetables.concat(fruits)} <br />
              fruits.reverse() => ${fruits.reverse()} <br />
              fruits.sort() => ${fruits.sort()} <br />
              fruits.splice(1, 2) => ${fruits.splice(1, 2)} <br />
              fruits na splice => ${fruits} <br />
              fruits.pop() => ${fruits.pop()} <br />
              fruits na pop => ${fruits} <br />
              fruits.push('Aardbei') => ${fruits.push('Aardbei')} <br/>
              fruits na push => ${fruits} <br />`;

  divArrayFunctions.innerHTML = result; 
}

function addProductToArray() {
  const productToAdd = inpInput.value;

  if (productToAdd.trim() !== "") {

    errandList[numberOfProducts] = productToAdd;
    numberOfProducts++;
    inpInput.value = '';
    giveFeedback();
  }
  else {
    console.warn('Geen waarde in adress');
  }
}

function giveFeedback() {

  let result = '<h3> Array Elementen </h3>';
  result += '<u>For-lus</u> <br />'; 

  for (let i = 0; i < errandList.length; i++) {
    result += `${errandList[i]} <br />`;
  }

  result += `Aantal elementen in de Array errandList => ${errandList.length}`;

  divFeedback.innerHTML = result;

}


