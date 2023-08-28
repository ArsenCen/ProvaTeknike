//1.nje funksion i cili merr si parameter nje array me objekte dhe heq te gjithe elementet qe jane te perseritur
let arrBosh = [];
let listaPerseritur = document.getElementById("listaPerseritur");
let lista = document.getElementById("lista");
let listaFshire = document.getElementById("listaFshire");

let personi1 = {
  emri: "Arsen1",
  mbiemri: "Cenollari1",
  mosha: 21,
  univeristeti: "FSHN-1",
};

let personi2 = {
  emri: "Arsen2",
  mbiemri: "Cenollari2",
  mosha: 21,
  univeristeti: "FSHN-2",
};

let personi3 = {
  emri: "Arsen3",
  mbiemri: "Cenollari3",
  mosha: 21,
  univeristeti: "FSHN-3",
};

let personi4 = {
  emri: "Arsen4",
  mbiemri: "Cenollari4",
  mosha: 21,
  univeristeti: "FSHN-4",
};

let personi5 = {
  emri: "Arsen6",
  mbiemri: "Cenollari6",
  mosha: 21,
  univeristeti: "FSHN-5",
};

let personi6 = {
  emri: "Arsen6",
  mbiemri: "Cenollari6",
  mosha: 21,
  univeristeti: "FSHN-5",
};

function ElementetPerseritur(array) {
  for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (
        array[i].emri == array[j].emri &&
        array[i].mbiemri == array[j].mbiemri
      ) {
        console.log(
          "Emri qe eshte i perseritur: ",
          array[i].emri,
          " Mbiemri qe eshte i perseritur: ",
          array[i].mbiemri
        );
        let li = `<li> <b>EMRI: </b> ${array[i].emri}<b> MBIEMRI:</b> ${array[i].mbiemri} <b>MOSHA:</b> ${array[i].mosha} <b>UNIVERSITETI:</b> ${array[i].univeristeti}</li>`;

        listaPerseritur.insertAdjacentHTML("beforeend", li);
      }
    }
  }
}

function elementetTotal(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (
        array[i].emri === array[j].emri &&
        array[i].mbiemri === array[j].mbiemri
      ) {
      }
    }

    let li = document.createElement("li");
    li.innerHTML = `<li> <b>EMRI: </b> ${array[i].emri}<b> MBIEMRI:</b> ${array[i].mbiemri} <b>MOSHA:</b> ${array[i].mosha} <b>UNIVERSITETI:</b> ${array[i].univeristeti}</li>`;
    li.id = array[i].emri;
    let test = document.getElementById(array[i].emri);
    if (test) {
      test.remove();
    }

    console.log(test);
    lista.appendChild(li);
  }
}

function listaFshireFunction(array) {
  for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (
        array[i].emri === array[j].emri &&
        array[i].mbiemri === array[j].mbiemri
      ) {
        let li = `<li> <b>EMRI: </b> ${array[i].emri}<b> MBIEMRI:</b> ${array[i].mbiemri} <b>MOSHA:</b> ${array[i].mosha} <b>UNIVERSITETI:</b> ${array[i].univeristeti}</li>`;

        listaFshire.insertAdjacentHTML("beforeend", li);
      }
    }
  }
}

arrBosh.push(personi1, personi2, personi3, personi4, personi5, personi6);
console.log(arrBosh);

ElementetPerseritur(arrBosh);
elementetTotal(arrBosh);
listaFshireFunction(arrBosh);
