function getArraysIntersection(a1,a2){
    return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
}
const k = [1,3,4,2,5,8,6,7,9];
const j = [9,1,4,3,2,8,7,9,0,2,];     
const common=getArraysIntersection(k,j);  
  
console.log(common);
