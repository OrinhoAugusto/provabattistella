let list = [];

const calc = () => {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    let p = parseFloat(peso.value);
    let a = parseFloat(altura.value);
    var res;
    if (p && a) {
        res = p / (a * a);

        list.push(res);
    }

    document.getElementById("imc").value = Math.round(res*10)/10;

    console.log(list)
}

const limpar = () => {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.value = "";
    altura.value = "";
    list = [];
}
