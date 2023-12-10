let num = promt("enter a grade");
if(num>80){
    grade="A";
}else if(num>70){
    grade="B+";
}else if(num>60){
   grade="C+";
}else if(num>50){
    grade="c";
}else{
    grade="fail";
}
console.log(grade);