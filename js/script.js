'use strict';

window.addEventListener('load', initialize);

// Globale variabelen
let inpInput, divFeedback,errandList, numberOfProducts;
let divArrayFunctions;
let divArrayFunctions2;
let divMulti;
let inpFirstname, inpName, inpMunicipality;
let adresses;
let divDataDisplay;

function initialize() {
  // Lokale variabelen
  let btnArrayResult;
  let btnMultiAdd;

  // DOM elementen ophalen
  inpInput = document.getElementById('ingave');
  inpFirstname = document.getElementById('firstname');
  inpName = document.getElementById('name');
  inpMunicipality = document.getElementById('municipality');
  divFeedback = document.getElementById('feedback');
  divArrayFunctions = document.getElementById('array-functions');
  divArrayFunctions2 = document.getElementById('array-functions2');
  divMulti = document.getElementById('multi');
  divDataDisplay = document.getElementById('data-display');
  btnArrayResult = document.querySelector("#array-result");
  btnMultiAdd = document.querySelector('#multi-add')

  // Eventlisteners toevoegen
  btnArrayResult.addEventListener("click", addProductToArray);
  btnMultiAdd.addEventListener('click', addAdress)

  // Initialisatie van de variabelen
  numberOfProducts = 0; errandList = [];

  // Functions aanroepen
  fillArrayFunctions();
  fillArrayFunctions2();
  fillAdresses();
  showAdresses();
  fillWithData();
}

function Compare(a, b, sortElement) {
  if (a[sortElement] < b[sortElement]) {
    return -1;
  }
  if (a[sortElement] > b[sortElement]) {
    return 1;
  }
  return 0;
}

function fillWithData() {
  dataSitcom.sort((a, b, c) => Compare(a, b, 'Rank'));
  for(let dataObject in dataSitcom) {
    divDataDisplay.appendChild(makeDataDivision(dataSitcom[dataObject]));
  }
}

function makeDataDivision(objectElement) {
  const dataDivision = document.createElement('div');
  dataDivision.className='dataDiv';
  dataDivision.innerHTML = `Rank : ${objectElement.Rank} <br/> 
                          SitcomName : ${objectElement.SitcomName}  <br />
                          Years : ${objectElement.Years}`; 

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
 
  for (let adress in adresses) {
      summary += `${adresses[adress][1]} ${adresses[adress][0]} - ${adresses[adress][2]}<br />` ;      
  }
  divMulti.innerHTML = summary;
}

function addAdress() {
  let firstname = inpFirstname.value;
  let name = inpName.value;
  let municipality = inpMunicipality.value;
  let newAdress = [name, firstname, municipality];
  adresses.push(newAdress);
  showAdresses();
  fillWithData.value = "";
  inpName.value = "";
  inpMunicipality.value = "";  
}

// Arrow Functions in variabelen
let findEven = p => p%2 == 0;
let double = p => p * 2;

function fillArrayFunctions2() {
    let ageArray = [15,31,17,19,52,51];
    let doubleAgeArray;
    let result = '';

    doubleAgeArray = ageArray.map(double);
    result = `  ageArray => ${ageArray}  <br /> 
                ageArray.every(p => p>=18) => ${ageArray.every(p => (p >= 18))} <br />
                ageArray.filter(findEven) => ${ageArray.filter(findEven)} <br />
                ageArray.find(p=> p>=18) => ${ageArray.find(p=> p >= 18)} <br />
                ageArray.findIndex(p => p>=18) => ${ageArray.findIndex(p=> p >= 18)} <br/>
                ageArray.indexOf(19) => ${ageArray.indexOf(19)} <br/>
                ageArray.includes(18) => ${ageArray.includes(18)} <br/>
                ageArray.some(p => p<18) => ${ageArray.some(p => p < 18)} <br/>
                doubleAgeArray = ageArray.map(double) => ${doubleAgeArray} <br />
                ageArray.reduce ((a,b) => (a+b),0) => ${ageArray.reduce((a, b) => (a + b), 0)} <br />
    `;

    divArrayFunctions2.innerHTML = result;

}

function fillArrayFunctions() {
  // local vars
  let fruitArray = ['Appel', 'Peer', 'Banaan', 'Kiwi','Meloen','Druif'];
  let veggieArray = ['Wortel', 'Sla', 'Tomaat','Komkommer'];
  let result = '<h3> Overzicht Funties </h3>';

  result += ` fruitArray.join() => ${fruitArray.join()} <br />
              veggieArray.join(-) => ${veggieArray.join('-')} <br />
              fruitArray => ${fruitArray} <br />
              veggieArray.concat(fruitArray) => ${veggieArray.concat(fruitArray)} <br />
              fruitArray.reverse() => ${fruitArray.reverse()} <br />
              fruitArray.sort() => ${fruitArray.sort()} <br />
              fruitArray.splice(1,2) => ${fruitArray.splice(1, 2)} <br />
              fruitArray na splice => ${fruitArray} <br />
              fuitArray.pop() => ${fruitArray.pop()} <br />
              fruitArray na pop => ${fruitArray} <br />
              fruitArray.push('Aardbei') => ${fruitArray.push('Aardbei')} <br/>
              fruitArray na push => ${fruitArray} <br />

              `;
  divArrayFunctions.innerHTML = result; 
}

function addProductToArray() {
  let productToAdd = inpInput.value;

  if (productToAdd.trim() != '') {
[errandList, aantalProducten] = productToAdd;
    aantalProducten++;
    inpInput.value = '';
    giveFeedback();
  }
  else {
    console.warn('Geen waarde in adress');
  }
}

function giveFeedback() {
  let result = '<h3> Array Elementen </h3>';
  // Lussen met een for-lus
  result += '<u>For-lus</u> <br />'; 
  for (let i = 0; i <= errandList.length; i++) {
    result += `[errandList, i]} <br />`;
  }
  // Lussen met een for-in-lus
  result += '<u>For-in-lus</u> <br />';
  for(let i in errandList)  {
    result += `${i[errandList, product]} <br />`;
  }
  result += `Aantal elementen in de Arra errandList, => .errandList, length}`;
  divFeedback.innerHTML = result;
}


