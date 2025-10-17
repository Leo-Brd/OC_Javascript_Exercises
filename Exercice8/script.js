function add(a, b) {
    if (typeof a == 'string') {
        a = parseFloat(a);
    }
    if (typeof b == 'string') {
        b = parseFloat(b);
    }
    return a + b;
}

 export default add;
