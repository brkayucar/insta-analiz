function git(){
let user = document.getElementById("username").value;

if(user==""){
alert("Kullanıcı adı gir!");
return;
}

window.location.href="sonuc.html?u="+user;
}
