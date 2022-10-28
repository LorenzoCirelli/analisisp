function dopo() {
    let TI = document.getElementById("r1").innerText;
    let TF = document.getElementById("r2").innerText;
    if(TI = TF){
    backup = document.getElementById("dipinto").innerHTML;
    document.getElementById("dipinto").innerHTML='<link rel="stylesheet" href="stili/pagina2.css">';
    }else{
        alert("I due risultati non coincidono");
    }
    caricadati();
}
function caricadati(){
    //indici impieghi
    let elast = document.getElementById("elast").innerText= ((AC/TI)*100).toFixed(2) + "% elastico";
    let rigid = document.getElementById("rigid").innerText= ((AI/TI)*100).toFixed(2) + "% rigido";
    document.getElementById("graphimpieghi").innerHTML = ' <div class="elastico" style="width:'+((AC/TI)*100).toFixed(2)+'%"></div>'
    //indici fonti
    document.getElementById("terzo").innerText= ((CT/TF)*100).toFixed(2) + "% terzi";
    document.getElementById("primo").innerText= ((CP/TF)*100).toFixed(2) + "% proprio";
    let terzi = document.getElementById("terzo").innerText= ((CT/TF)*100).toFixed(2);
    let proprio = document.getElementById("primo").innerText= ((CP/TF)*100).toFixed(2);
    document.getElementById("graphfonti").innerHTML = ' <div class="elastico" style="width:'+((CT/TF)*100).toFixed(2)+'%"></div>'
    //leverage
    let lev = document.getElementById("lev").innerText= (TI/CP).toFixed(2);
    //margine di struttura
    let struttura = document.getElementById("strutt").innerText= (CP-AI).toFixed(2);
    //margine copertura globale
    let mcg = document.getElementById("coper").innerText= ((CP+DML)-AI).toFixed(2);
    //pcn
    let pcn = document.getElementById("pcn").innerText= (AC-DB).toFixed(2);
    //margine di tesoreria
    let mtes = document.getElementById("tesor").innerText= ((DL+DF)-DB).toFixed(2);
    //indice liquidità primaria
    let primario = document.getElementById("indprim").innerText= (AC/DB).toFixed(2);
    //indice liquidità secondaria
    let secliq = document.getElementById("indsec").innerText= ((DL+DF)/DB).toFixed(2);
    //commento
    var descrizione = "";
    //elastica o no
    if(elast-rigid>0){
        descrizione += "L'azienda si presenta elastica con prevalenza di attivo circolante sull'attivo immobilizzato,elasticità tipica delle imprese mercantili. ";
    }else{
        descrizione += "L'azienda si presenta rigida con prevalenza di attivo immobilizzato sull'attivo circolante, rigidità tipica delle imprese industriali. ";
    }
    //uso fonti finanziamento
    if(proprio - terzi>0 && lev<2){
        descrizione += "relativamente alla composizione delle fonti di finanziamento l'azienda si presenta bencapitalizzata, con capitale proprio di "+proprio+"%, confermato da leverage minore di 2. ";
    }else{
        descrizione += "relativamente alla composizione delle fonti di finanziamento l'azienda si presenta sottocapitalizzata, con capitale proprio di "+proprio+"%, confermato da leverage maggiore di 2. ";
    }
    //fonti-impieghi
    if(struttura<0){
        if(mcg>0){
            descrizione += "per quanto rigurda il rapporto fonti-impieghi pur essendo il margine di di struttura negativo, il margine di copertura globale risulta positivo, evidenziando il corretto ricorso alle fonti di finanziamento in quanto ha finanziato le immobilizzazioni con mezzi stabili. "
        }else{
            descrizione += "per quanto rigurda il rapporto fonti-impieghi il margine di di struttura negativo il margine di copertura globale risulta negativo, evidenziando uno scorreto ricorso alle fonti di finanziamento in quanto non ha finanziato le immobilizzazioni con mezzi stabili. "
        }
    }else{
        descrizione += "per quanto rigurda il rapporto fonti-impieghi il margine di di struttura è positivo. "
    }
    //pcn
    if(pcn>0){
        descrizione += "il pcn è positivo, con il relativo indice di liquidità secondaria pari a "+secliq+", attestando l'azienda non avrà problemi nel rimborsare i debiti a breve con i mezzi liquidi di cui dispone nel breve termine, "
    }else{
        descrizione += "il pcn è negativo, con il relativo indice di liquidità secondaria pari a "+secliq+", attestando l'azienda potrebbe avere problemi nel rimborsare i debiti a breve con i mezzi liquidi di cui dispone nel breve termine, "
    }
    //margine di tesoreria
    if (primario<1) {
        descrizione += "una lieve tensione finanziaria è al contrario evidenziata dal margine di tesoreria che risulta essere negativo con il relativo indice di liquidità primaria inferiore a 1 ("+primario+").";
    }else{
        descrizione += "non viene rilevata tensione finanziaria dal margine di tesoreria che risulta essere negativo con il relativo indice di liquidità primaria superiore a 1 ("+primario+").";
    }
    document.getElementById("commento").innerText=descrizione;

}