const yas = prompt("yaşinizi yazin");

if (yas !== null) {
    const yasi = Number(yas);

    if (!isNaN(yasi)) {
        if (yasi < 21) {
            alert("sayta giris qadagandir");
            alert("düzgün yaş daxil edin.");
        } else {
            alert("İcazə verildi");
        }
    }
}