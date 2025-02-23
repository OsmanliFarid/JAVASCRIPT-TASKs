let bal = +prompt("balin necedir?")
let mesaj = ""

if(bal > 90 ){
      mesaj = "Əla (A)"
}else if(bal > 80){
    mesaj = "Yaxşı (B)"
}else if(bal > 70){
    mesaj = "Orta (C)"
}else if(bal > 60){
    mesaj = "Zəif (D)"
}else{
    mesaj = "Keçmədin (F)"
}
console.log(mesaj);
