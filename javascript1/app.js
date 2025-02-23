const hava = +prompt("Hava nece derecedi?")
mesaj = ""

if(hava < 0){
    mesaj = "Hava çox soyuqdur"
}else if(hava < 10){
    mesaj = "Hava sərin, isti geyin"
}else if(hava < 20){
    mesaj = "Hava mülayimdir."
}else if(hava < 30){
    mesaj = "Hava istidir."
}else{
    mesaj = "Hava çox istidir, su içməyi unutma!"
}
console.log(mesaj);
