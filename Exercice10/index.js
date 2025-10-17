
function printNumbers(n) {
    let string = '';
    for (let i = 1; i <= n; i++) {
        if (i == n) {
            string += i;
            break;
        }
        string += i + ' ';
    }
    return string;
}

export default printNumbers;
