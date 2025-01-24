document.addEventListener('DOMContentLoaded', () => {
    const qrDiv = document.getElementById('qrDiv');
    const qrImage = document.getElementById('qrImage');
    const inputTextUrl = document.getElementById('input-url');
    const generateQR = document.getElementById('generate');

    generateQR.addEventListener('click', function () {
        if (inputTextUrl.value.length > 0) {
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputTextUrl.value;
            qrDiv.style.maxHeight = qrDiv.style.maxHeight === "200px" ? "0" : "200px";
            qrImage.classList.toggle('show-img');
        } else {
            alert("Input invalid")
        }
    });

});



