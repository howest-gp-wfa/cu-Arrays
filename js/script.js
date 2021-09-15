"use strict";

window.addEventListener("load", initialize);

// Globale variabelen
let inpInput, divFeedback, errandList, numberOfProducts;
let divArrayFunctions;
let divArrayFunctionsAdvanced;
let divMulti;
let inpFirstname, inpName, inpMunicipality;
let addresses;
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
  fillAddresses();
  showAddresses();
  fillSitcoms();
}


function fillSitcoms() {
  
  sitcomData.sort((a, b) => compare(a, b, "rank"));
  
  for (let i = 0; i < sitcomData.length; i++) {
    const sitcomDiv = makeDataDivision(sitcomData[i]);
    divDataDisplay.appendChild(sitcomDiv);
  }
  
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

function makeDataDivision(object) {
  const sitcomDiv = document.createElement("div");
  sitcomDiv.className = "sitcom";
  sitcomDiv.innerHTML = `Rank: ${object.rank} <br/> 
                          SitcomName: ${object.sitcomName}  <br />
                          Years: ${object.years}`; 

  return sitcomDiv;
}

function fillAddresses() {
  addresses = [];
  addresses[0] = ["De Donder", "Walter", "Affligem"];
  addresses[1] = ["Crucke", "Koen", "Gent"];
  addresses[2] = ["Verhulst", "Gert", "Antwerpen"];
}

function showAddresses() {
  let summary = "";
 
  for (let i = 0; i < addresses.length; i++) {
      summary += `${addresses[i][1]} ${addresses[i][0]} - ${addresses[i][2]}<br />` ;      
  }

  divMulti.innerHTML = summary;

}

function addAdress() {
  const firstname = inpFirstname.value;
  const name = inpName.value;
  const municipality = inpMunicipality.value;
  const newAdress = [name, firstname, municipality];

  addresses.push(newAdress);
  showAddresses();

  fillSitcoms.value = "";
  inpName.value = "";
  inpMunicipality.value = "";
}

// Arrow Functions in variabelen
const findEven = p => p % 2 === 0;
const double = p => p * 2;

function fillArrayFunctionsAdvanced() {

  const ageArray = [15, 31, 17 ,19 ,52 ,51];
  const doubleAgeArray = ageArray.map(double);
  let result = "";

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
  const fruits = ["Appel", "Peer", "Banaan", "Kiwi","Meloen","Druif"];
  const vegetables = ["Wortel", "Sla", "Tomaat","Komkommer"];
  let result = "<h3> Overzicht Funties </h3>";

  result += ` fruits.join() => ${fruits.join()} <br />
              vegetables.join(-) => ${vegetables.join("-")} <br />
              fruits => ${fruits} <br />
              vegetables.concat(fruits) => ${vegetables.concat(fruits)} <br />
              fruits.reverse() => ${fruits.reverse()} <br />
              fruits.sort() => ${fruits.sort()} <br />
              fruits.splice(1, 2) => ${fruits.splice(1, 2)} <br />
              fruits na splice => ${fruits} <br />
              fruits.pop() => ${fruits.pop()} <br />
              fruits na pop => ${fruits} <br />
              fruits.push("Aardbei") => ${fruits.push("Aardbei")} <br/>
              fruits na push => ${fruits} <br />`;

  divArrayFunctions.innerHTML = result; 
}

function addProductToArray() {
  const productToAdd = inpInput.value;

  if (productToAdd.trim() !== "") {

    errandList[numberOfProducts] = productToAdd;
    numberOfProducts++;
    inpInput.value = "";
    giveFeedback();
  }
  else {
    console.warn("Geen waarde ingegeven");
  }
}

function giveFeedback() {

  let result = "<h3> Array Elementen </h3>";
  result += "<u>For-lus</u> <br />"; 

  for (let i = 0; i < errandList.length; i++) {
    result += `${errandList[i]} <br />`;
  }

  result += `Aantal elementen in de Array errandList => ${errandList.length}`;

  divFeedback.innerHTML = result;

}


