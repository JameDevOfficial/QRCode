const form = document.getElementById("generate-form");

function onGenerateSubmit()
{
    const qr = document.getElementById("qrcode");
    clearUI(qr);
    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;
    console.log(url,size);

    if (url === "")
    {
        alert("Please enter an URL");
    }
    else{
        showSpinner();
        setTimeout(() => {
            hideSpinner();
            genQRCode(url, size);
            setTimeout(function getUrl(){
                const saveUrl = qr.querySelector("img").src;
                createSaveBtn(saveUrl);
            }, 50)
        }, 1500);
    }
};

function genQRCode(url, size){
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size
    });
}

function clearUI(qr){
    if (qr.innerHTML && qr.innerHTML != '')
    {
        qr.innerHTML = '';
        const saveBtn = document.getElementById("save-link");
        if (saveBtn)
        {
            saveBtn.remove();
        }
        console.log("cleared ui");
    }
    else
    {
        console.log("Nothing to clear");
    }

}

function createSaveBtn(saveUrl){
    const link = document.createElement("a");
    link.id = "save-link";
    link.classList = "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5"
    link.href = saveUrl;
    link.download = "qrcode";
    link.innerHTML = "Save Image";
    document.getElementById("generated").appendChild(link);
}
function showSpinner(){
    document.getElementById("spinner").style.display ="block";
}

function hideSpinner(){
    document.getElementById("spinner").style.display ="none";
}