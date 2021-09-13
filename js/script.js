'use strict';

window.addEventListener('load', initialize);

// Globale variabelen
let txtIngave, divFeedback, boodschappenLijst, aantalProducten;
let divArrayFuncties;
let divArrayFuncties2;
let divMulti;
let txtVoornaam, txtNaam, txtGemeente;
let adressen;
let divDataWeergave;

function initialize() {
  // Lokale variabelen
  let btnArrayResult;
  let btnMultiVoegToe;

  // DOM elementen ophalen
  txtIngave = document.getElementById('ingave');
  txtVoornaam = document.getElementById('voornaam');
  txtNaam = document.getElementById('naam');
  txtGemeente = document.getElementById('gemeente');
  divFeedback = document.getElementById('feedback');
  divArrayFuncties = document.getElementById('array-functies');
  divArrayFuncties2 = document.getElementById('array-functies2');
  divMulti = document.getElementById('multi');
  divDataWeergave = document.getElementById('data-weergave');
  btnArrayResult = document.querySelector("#array-result");
  btnMultiVoegToe = document.querySelector('#multi-voegToe')

  // Eventlisteners toevoegen
  btnArrayResult.addEventListener("click", voegProductToeAanArray);
  btnMultiVoegToe.addEventListener('click', voegAdresToe)

  // Initialisatie van de variabelen
  aantalProducten = 0;
  boodschappenLijst = [];

  // Functies aanroepen
  vulArrayFuncties();
  vulArrayFuncties2();
  vulAdressen();
  toonAdressen();
  vulMetData();
}

function Compare(a, b, SorteerElement) {
  if (a[SorteerElement] < b[SorteerElement]) {
    return -1;
  }
  if (a[SorteerElement] > b[SorteerElement]) {
    return 1;
  }
  return 0;
}

function vulMetData() {
  dataSitcom.sort((a, b, c) => Compare(a, b, 'Rank'));
  for(let dataObject in dataSitcom) {
    divDataWeergave.appendChild(MaakDataDivisie(dataSitcom[dataObject]));
  }
}

function MaakDataDivisie(objectElement) {
  let DataDivisie = document.createElement('div');
  DataDivisie.className='dataDiv';
  DataDivisie.innerHTML = `Rank : ${objectElement.Rank} <br/> 
                          SitcomName : ${objectElement.SitcomName}  <br />
                          Years : ${objectElement.Years}`; 

  return DataDivisie;


}

function vulAdressen() {
  adressen = [];
  adressen[0] = ["De Donder", "Walter", "Affligem"];
  adressen[1] = ["Crucke", "Koen", "Gent"];
  adressen[2] = ["Verhulst", "Gert", "Antwerpen"];
}

function toonAdressen()
{
  let samenvatting = "";
 
  for (let gegeven in adressen) {
      samenvatting += `${adressen[gegeven][1]} ${adressen[gegeven][0]} - ${adressen[gegeven][2]}<br />` ;      
  }
  divMulti.innerHTML = samenvatting;
}

function voegAdresToe() {
  let voornaam = txtVoornaam.value;
  let naam = txtNaam.value;
  let gemeente = txtGemeente.value;
  let nieuwAdres = [naam, voornaam, gemeente];
  adressen.push(nieuwAdres);
  toonAdressen();
  txtVoornaam.value = "";
  txtNaam.value = "";
  txtGemeente.value = "";  
}

// Arrow functies in variabelen
let ZoekEven = p => p%2 == 0;
let Verdubbel = p => p * 2;

function vulArrayFuncties2() {
    let leeftijdArray = [15,31,17,19,52,51];
    let verdubbelLeeftijdArray;
    let result = '';

    verdubbelLeeftijdArray = leeftijdArray.map(Verdubbel);
    result = `  leeftijdArray => ${leeftijdArray}  <br /> 
                leeftijdArray.every(p => p>=18) => ${leeftijdArray.every(p => (p >= 18))} <br />
                leeftijdArray.filter(ZoekEven) => ${leeftijdArray.filter(ZoekEven)} <br />
                leeftijdArray.find(p=> p>=18) => ${leeftijdArray.find(p=> p >= 18)} <br />
                leeftijdArray.findIndex(p => p>=18) => ${leeftijdArray.findIndex(p=> p >= 18)} <br/>
                leeftijdArray.indexOf(19) => ${leeftijdArray.indexOf(19)} <br/>
                leeftijdArray.includes(18) => ${leeftijdArray.includes(18)} <br/>
                leeftijdArray.some(p => p<18) => ${leeftijdArray.some(p => p < 18)} <br/>
                verdubbelLeeftijdArray = leeftijdArray.map(Verdubbel) => ${verdubbelLeeftijdArray} <br />
                leeftijdsArray.reduce ((a,b) => (a+b),0) => ${leeftijdArray.reduce((a, b) => (a + b), 0)} <br />
    `;

    divArrayFuncties2.innerHTML = result;

}

function vulArrayFuncties() {
  // Locale variabelen
  let fruitArray = ['Appel', 'Peer', 'Banaan', 'Kiwi','Meloen','Druif'];
  let groentenArray = ['Wortel', 'Sla', 'Tomaat','Komkommer'];
  let result = '<h3> Overzicht Funties </h3>';

  result += ` fruitArray.join() => ${fruitArray.join()} <br />
              groentenArray.join(-) => ${groentenArray.join('-')} <br />
              fruitArray => ${fruitArray} <br />
              groentenArray.concat(fruitArray) => ${groentenArray.concat(fruitArray)} <br />
              fruitArray.reverse() => ${fruitArray.reverse()} <br />
              fruitArray.sort() => ${fruitArray.sort()} <br />
              fruitArray.splice(1,2) => ${fruitArray.splice(1, 2)} <br />
              fruitArray na splice => ${fruitArray} <br />
              fuitArray.pop() => ${fruitArray.pop()} <br />
              fruitArray na pop => ${fruitArray} <br />
              fruitArray.push('Aardbei') => ${fruitArray.push('Aardbei')} <br/>
              fruitArray na push => ${fruitArray} <br />

              `;
  divArrayFuncties.innerHTML = result; 
}

function voegProductToeAanArray() {
  let toeTeVoegenProduct = txtIngave.value;

  if (toeTeVoegenProduct.trim() != '') {
    boodschappenLijst[aantalProducten] = toeTeVoegenProduct;
    aantalProducten++;
    txtIngave.value = '';
    GeefFeedBack();
  }
  else {
    console.warn('Geen waarde ingegeven');
  }
}

function GeefFeedBack() {
  let result = '<h3> Array Elementen </h3>';
  // Lussen met een for-lus
  result += '<u>For-lus</u> <br />'; 
  for (let i = 0; i < boodschappenLijst.length; i++) {
    result += `${boodschappenLijst[i]} <br />`;
  }
  // Lussen met een for-in-lus
  result += '<u>For-in-lus</u> <br />';
  for(let product in boodschappenLijst) {
    result += `${boodschappenLijst[product]} <br />`;
  }
  result += `Aantal elementen in de Array boodschappenlijst => ${boodschappenLijst.length}`;
  divFeedback.innerHTML = result;
}


