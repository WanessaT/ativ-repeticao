function somaImpares() {
    let soma = 0;
    for(let i = 1; i <= 500; i++ ) {
        if(i % 2 !== 0 && i % 3 === 0)
            soma += i
    }
    alert(`A soma de todos os números ímpares de 1 até 500 é ${soma}.`);
}
