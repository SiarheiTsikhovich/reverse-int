module.exports = function reverse(n) {
    let reversNum = Math.abs(n).toString();
    let newArr = Array.from(reversNum);
    newArr = newArr.reverse();

    if (newArr[0] == '0') {
        newArr.splice(0, 1);
        newArr = Number(newArr.join(""))
    } else {
        newArr = Number(newArr.join(""))
    }
    return newArr
}
