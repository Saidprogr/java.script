const yas = prompt("yaşinizi yazin");

if (yas !== null) {
    const yasi = Number(yas);

    if (!isNaN(yasi)) {
        if (yasi < 21) {
            alert("İcazə verilmədi");
            alert("Zəhmət olmasa düzgün yaş daxil edin.");
        } else {
            alert("İcazə verildi");
        }
    }
}