function inverterArray(arr) {
    let novoArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        novoArray.push(arr[i]);
    }
    return novoArray;
}

module.exports = inverterArray;