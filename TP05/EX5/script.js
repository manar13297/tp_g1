function Member(id,name,grade){
    this.id=id;
    this.name=name;
    this.grade=grade;
    this.toString=function(){
        return 'id: '+this.id +' nom: '+this.name+'grade: '+this.grade
    }
}
function Team(nbr_mbrs){
    t=new Array();
    t.push(Member)
}