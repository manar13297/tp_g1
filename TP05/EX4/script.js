function deviner(){
    var i=0
    a=Math.floor(Math.random()*10)
    do{
        b=parseInt(prompt("Deviner le nombre:"))
        i=i+1
        if(a>b) alert("Plus Grand!")
        if(a<b) alert("Plus Petit")
    }while(b!=a)
    alert("BRAVOOO!!"+"vous avez trouvé le nombre en "+i+" Essais")

}
deviner();
