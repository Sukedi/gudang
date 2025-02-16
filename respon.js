function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;
    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += "<table><tr><td width='50%'><div id='kiri'>" + userInput + "</div></td><td width='50%'></td></tr></table>";
    response = GetResponse(userInput);
    chatbox.innerHTML += "<table><tr><td width='50%'></td><td width='50%'><i><div id='kanan'>" + response + "</div></i></td></tr></table>";
    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}
function GetResponse(cInput){
    cInput = cInput.toLowerCase();
    cInput = cInput.replace(/ {2,}/g, " ").replace(/'/g, "").replace(/ss/g, "s").replace("met", "mat").replace("ll", "l");
    alamat = "Alamat kami:<br>";
    alamat += "Kantor pusat: Jl.Pandawa No.1A Pemalang<br>";
    alamat += "Kantor cabang: Jl.Sumawa No.100 Pekalongan";
    let jwb = ["pikir dulu sebelum nulis.", 
    "ngga usah ragu tulis saja.", 
    "kami tunggu pertanyaanmu.", 
    "tulis info yang anda perlukan.", 
    "ketik masalah yang ingin anda sampaikan."];
    rspn1 = "";
    rspn2 = "Ada yang bisa saya bantu?";
    if (cInput.indexOf("asalamualaikum") > -1){ rspn1 = "Wa'alaikumussalam warahmatullahi wabarakatuh. " }
    if (cInput.indexOf("halo")>-1 || cInput.indexOf("helo")>-1) { rspn1 = "Iya halo. "; }
    if (cInput.indexOf("mat pagi")>-1) { rspn1 += "Selamat pagi juga. " }
    if (cInput.indexOf("mat siang")>-1) { rspn1 += "Selamat siang juga. " }
    if (cInput.indexOf("mat sore")>-1) { rspn1 += "Selamat sore juga. " }
    if (cInput.indexOf("mat malam")>-1) { rspn1 += "Selamat malam juga. " }
    if (cInput.indexOf("apa kabar")>-1 || cInput.indexOf("mana kabar")>-1) { rspn2 = "Alhamdulillah baik-baik saja. "; }
    if (cInput.indexOf("alamat")>-1 || cInput.indexOf("kantor")>-1 || cInput.indexOf("cabang")>-1) { rspn2 = alamat; }
    if (rspn1==="") { 
        let nn = Math.ceil(Math.random() * 4);
        rspn2 = "Silakan " + jwb[nn]; 
    }
    return rspn1 + "\n" + rspn2;
}
function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
}
