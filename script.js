function calcular() {
    var cad = parseFloat(document.getElementById("cad").value);
    var x = parseFloat(document.getElementById("x").value);

    var ctex = cad - 2;
    var ctxs = cad - 5;
    var crd = ctex + x;
    var ct = crd - 1 ;

    document.getElementById("ctex").value = ctex;
    document.getElementById("ctxs").value = ctxs;
    document.getElementById("crd").value = crd;
    document.getElementById("ct").value = ct;

    showInfoBox();
}

function showInfoBox() {
    var infoBox = document.getElementById("info-box");
    infoBox.style.display = "block";
}

function hideInfoBox() {
    var infoBox = document.getElementById("info-box");
    infoBox.style.display = "none";
}