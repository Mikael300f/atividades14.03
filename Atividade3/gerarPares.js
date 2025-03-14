function gerarNumerosPares(N) {
    let numerosPares = [];
    for (let i = 1; i <= N; i++) {
        numerosPares.push(i * 2);
    }
    return numerosPares;
}

module.exports = gerarNumerosPares;