function somme(t){
    var s=0;var i=0
    /*while(i<t.length){
        s=s+t[i];
        i=i+1*/
    // for (e in t){
    //     s+=t[e];
    // }
    t.forEach(
        function(e){
            s=s+e;
        }
    );
    return s;
}
var tab=new Array();
do{
    var v=parseInt(prompt("donner un nombre:"));
    if(! isNaN(v)) tab.push(v);
}while(!(isNaN(v)));
alert("somme est:"+somme(tab));