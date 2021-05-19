let factura: number = -1;
var tip: number=factura*(factura>49 && factura<301?0.15:0.20);
console.log(tip);
//1
factura = 275;
tip=factura*(factura>49 && factura<301?0.15:0.20);
console.log(`La factura fue ${factura}, la propina fue ${tip} y el valor total ${factura + tip} `);
//2
const calcTip = function (factura: number) {
    return factura * (factura >= 50 && factura <= 300 ? 0.15 : 0.2);
}
tip = calcTip(100);
console.log(tip);
//3
const facturas: number[] = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//4
const propinas: number[] = [];
const totales: number[] = [];