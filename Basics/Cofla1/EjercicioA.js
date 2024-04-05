const input = (prompt) => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        readline.question(prompt, (input) => {
            resolve(input);
            readline.close();
        });
    });
}

const definirCompra = async (n) => {
    let prompt = parseFloat(await input(`Dinero de ${n}: `));
    if (prompt >= 0.6 && prompt < 1) {
        return (`${n} compra el helado de agua y te sobran ${prompt - 0.6}`);
    } else if (prompt >= 1 && prompt < 1.6) {
        return (`${n} compra el helado de crema y te sobran ${prompt - 1}`);
    } else if (prompt >= 1.6 && prompt < 1.7) {
        return (`${n} compra el helado de heladix y te sobran ${prompt - 1.6}`);
    } else if (prompt >= 1.7 && prompt < 1.8) {
        return (`${n} compra el helado de heladovich y te sobran ${prompt - 1.7}`);
    } else if (prompt >= 1.8 && prompt < 2.9) {
        return (`${n} compra el helado de helardo y te sobran ${prompt - 1.8}`);
    } else if (prompt >= 2.9) {
        return (`${n} compra el helado con confites o el pote de helado y te sobran ${prompt - 2.9}`);
    } else {
        return ("No te alcanza para nada pobre de mrda");
    }
}

const main = async () => {
    console.log(await definirCompra('Cofla'));
    console.log(await definirCompra('Pedro'));
    console.log(await definirCompra('Roberto'));



}

main();