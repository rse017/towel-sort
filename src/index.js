module.exports = function towelSort (matrix) {
    if (matrix == undefined){
        return [];
      }
  
const arr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            arr.push(...matrix[i]);
        } 
        else {
            arr.push(...matrix[i].reverse());
        }
    }
    return arr;
}
  
 /* Другой вариант
module.exports = function towelSort (matrix=[]) {
   return [].concat(...matrix.map((arr,index)=> index % 2 == 1 ? arr.reverse() : arr));
}*/



