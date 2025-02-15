
function saveData() {
    // Werte der Eingabefelder und des Textbereichs speichern
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const textarea = document.getElementById('textarea').value;

    // Briefe aus dem lokalen Speicher abrufen oder neuen Array erstellen
    let letters = JSON.parse(localStorage.getItem('letters')) || [];

    // Neuen Brief hinzufügen
    letters.push({
        input1: input1,
        input2: input2,
        input3: input3,
        input4: input4,
        textarea: textarea
    });

    // Briefe im lokalen Speicher speichern
    localStorage.setItem('letters', JSON.stringify(letters));

    alert("Daten gespeichert!");
    }

function redirectToB() {
    // Weiterleitung zur "b.html" 
    window.location.href = 'b.html';
}

exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);
exports.build = series(scssTask, jsTask);