


// Funktion des "Jetzt Spenden Button" auf Index.html
function buttonRegestrieren(){
    document.getElementById('button-registrieren').classList.toggle('d-none')
    document.getElementById('button-registrieren-img').classList.toggle('d-none')
    document.getElementById('FormularEingabe').classList.toggle('d-block')
    document.getElementById('FormularEingabe').scrollIntoView({ behavior: 'smooth' })
}

function buttonAuswLokAbh(){
    let value = document.getElementById('inlineFormAbgabeort').value
    if (value.length >> 1){
        if (document.getElementById('AuswahlAbholortFalsch').classList.contains('invisible')){
            document.getElementById('AuswahlAbholortFalsch').classList.toggle('invisible')
        }
    }
    else {
        document.getElementById('AuswahlAbholort').classList.toggle('d-none')
        document.getElementById('KleidungRegionAuswahl').classList.toggle('d-none')
        if (value == 2){
            document.getElementById('AuswahlAdresseAbholung').classList.toggle('d-none')}
        document.getElementById('KleidungRegionAuswahl').scrollIntoView({ behavior: 'smooth' })
    }
}

function buttonAuswahlBest(){
    let valueArt = document.getElementById('inlineFormArtKleidung')
    let valueRegion = document.getElementById('inlineFormKriesenregion')
    let valueVorname = document.getElementById('inputVorname')
    let valueNachname = document.getElementById('inputNachname')
    let valueStrasse = document.getElementById('inputStrasse')
    let valueHausNr = document.getElementById('inputHausNr')
    let valuePlz = document.getElementById('inputPlz')
    let valueOrt = document.getElementById('inputOrt')
    let valueDatumZeit = document.getElementById('inputDateTime')
    let isLokaleAbgabe = document.getElementById('AuswahlAdresseAbholung').classList.contains('d-none')

    let inputs = [valueVorname, valueNachname, valueStrasse, valueHausNr, valuePlz, valueOrt, valueDatumZeit]

    function verifiPlz(obj, startNr = '12'){
            if (Number.isInteger(parseInt(obj.value))){

                if (obj.value.length != 5 || (! obj.value.startsWith(startNr))){
                    document.getElementById('AuswahlPlzFalsch').classList.remove('d-none')
                    setInvalid(obj, true)
                    obj.value = ''
                }
                else {
                    document.getElementById('AuswahlPlzFalsch').classList.add('d-none')
                    return true;
                }
            }
        }
        
        function setInvalid(obj, set = false){
            if (set){
                obj.classList.add('is-invalid')
            }
            else{
                obj.classList.remove('is-invalid')
            }
        }

        function checkNumber(obj){
            if (Number.isInteger(parseInt(obj.value))){
                setInvalid(obj)
            }
            else if (obj.value.length >> 0) {
                    setInvalid(obj, true)
                    obj.value = ''
            }
        }

    function checkInvalid (){

        document.getElementById('AuswahlWerteFehlen').classList.remove('invisible')
        
        if (valueArt.value.length >> 1){
            setInvalid(valueArt, true)
        }
        else {
            setInvalid(valueArt)
        }

        if (valueRegion.value.length >> 1){
            setInvalid(valueRegion, true)
        }
        else {
            setInvalid(valueRegion)
        }
        if (! isLokaleAbgabe) {
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].value.length >> 1) {
                    setInvalid(inputs[i])}
                else {
                    setInvalid(inputs[i], true)
                }
            }
            checkNumber(valueHausNr)
            checkNumber(valuePlz)
        }
    }

    function setAbschluss(){
        let datum = new Date()
        localStorage.setItem('bestArt', valueArt.options[valueArt.selectedIndex].text);
        localStorage.setItem('bestGebiet', valueRegion.options[valueRegion.selectedIndex].text);
        localStorage.setItem('bestSpendennummer', '#' + Math.round(Math.random() * (999999 - 100000) + 100000));
        
        if (isLokaleAbgabe){
            localStorage.setItem('bestDatum', datum.toLocaleDateString());
            localStorage.setItem('bestUhrzeit', datum.toLocaleTimeString().slice(0, -3));
            localStorage.setItem('bestOrt', 'Übergabe an der Geschäftsstelle');
        }
        else {
            let adresse = valueStrasse.value + ' ' + valueHausNr.value + ', ' + valuePlz.value + ' ' + valueOrt.value
            localStorage.setItem('bestDatum', valueDatumZeit.value.split(" ")[0].replaceAll('-','.'));
            localStorage.setItem('bestUhrzeit', valueDatumZeit.value.split(" ")[1]);
            localStorage.setItem('bestOrt', adresse);
        }
        window.location.href = "/pages/abschluss.html"
    }

    if (isLokaleAbgabe){
        if ((valueArt.value.length >> 1) || (valueRegion.value.length >> 1)){
            checkInvalid();
        }
        else {
            setAbschluss();
        }
    }
    else if ((! (valueArt.value.length >> 1)) && (! (valueRegion.value.length >> 1)) &&
                    (valueStrasse.value.length >> 1) && (Number.isInteger(parseInt(valueHausNr.value))) &&
                    (verifiPlz(valuePlz, startNr = '12')) && (valueOrt.value.length >> 1) &&
                    (valueDatumZeit.value.length >> 1) &&
                    (valueVorname.value.length >> 1) && (valueNachname.value.length >> 1)){
        setAbschluss();
        }
    else {
        checkInvalid();
    }
}


flatpickr("#inputDateTime", {
enableTime: true,
dateFormat: "Y-m-d H:i",
time_24hr: true,
minDate: "today" 
});


