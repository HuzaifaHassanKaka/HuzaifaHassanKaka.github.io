function copyEmail() {
    var fullLink = document.createElement('input');
    document.body.appendChild(fullLink);
    fullLink.value = "huzaifa.ilyas.kaka@gmail.com";
    fullLink.select();
    fullLink.setSelectionRange(0, 99999);
    document.execCommand("copy", false);
    fullLink.remove();
    var txt = "Email Address Copied! Email Address: " + fullLink.value;
    alert(txt);
}

function copyContactNo() {
    var fullLink = document.createElement('input');
    document.body.appendChild(fullLink);
    fullLink.value = "+923353773803";
    fullLink.select();
    fullLink.setSelectionRange(0, 99999);
    document.execCommand("copy", false);
    fullLink.remove();
    var txt = "Contact Number Copied! Number: " + fullLink.value;

    alert(txt);
}