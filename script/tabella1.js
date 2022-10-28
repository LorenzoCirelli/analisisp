//impieghi
function attcirc() {
    let somma = Number(document.getElementById("B1").innerText)+
    Number(document.getElementById("B2").innerText)+
    Number(document.getElementById("B3").innerText);
    document.getElementById("A1").innerText=somma;
    totimp();
}
function attimm() {
    let somma = Number(document.getElementById("B4").innerText)+
    Number(document.getElementById("B5").innerText)+
    Number(document.getElementById("B6").innerText);
    document.getElementById("A2").innerText=somma;
    totimp();
}
function totimp() {
    let somma = Number(document.getElementById("A1").innerText)+
    Number(document.getElementById("A2").innerText);
    document.getElementById("r1").innerText=somma;
    perc();
}
//fonti
function capterz() {
    let somma = Number(document.getElementById("BB1").innerText)+
    Number(document.getElementById("BB2").innerText);
    document.getElementById("AA1").innerText=somma;
    totfonti();
}
function totfonti() {
    let somma = Number(document.getElementById("AA1").innerText)+
    Number(document.getElementById("AA2").innerText);
    document.getElementById("r2").innerText=somma;
    perc();
}

//calcolo percentuali

function perc() {
    //definizione celle
    AC = Number(document.getElementById("A1").innerText);
    AI = Number(document.getElementById("A2").innerText);
    TI = Number(document.getElementById("r1").innerText);
    TF = Number(document.getElementById("r2").innerText);
    CT = Number(document.getElementById("AA1").innerText);
    CP = Number(document.getElementById("AA2").innerText);
    DML = Number(document.getElementById("BB2").innerText);
    DB = Number(document.getElementById("BB1").innerText);
    DL = Number(document.getElementById("B1").innerText);
    DF = Number(document.getElementById("B2").innerText);
    //calcolo e scrittura formule
    document.getElementById("AT1").innerText=((AC/TI)*100).toFixed(2);
    document.getElementById("AT2").innerText=((AI/TI)*100).toFixed(2);
    document.getElementById("CP1").innerText=((CT/TF)*100).toFixed(2);
    document.getElementById("CP2").innerText=((CP/TF)*100).toFixed(2);
}