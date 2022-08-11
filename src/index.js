module.exports = function towelSort (matrix) {
const a = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            a.push(...matrix[i]);
        } 
        else {
            a.push(...matrix[i].reverse());
        }
    }
    return a;
}
