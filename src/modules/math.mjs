const getSides = function(mouseX, mouseY, offsetX, offsetY, coords){
        let a = (mouseX - offsetX) - coords.point1[0]; // катет a прямоугольного треугольника
        let b = (mouseY - offsetY) - coords.point1[1]; // катет b прямоугольного треугольника
        let a2 = Math.pow(a, 2); 
        let b2 = Math.pow(b, 2);
        let c2 = a2 + b2; // сумма квадратов катетов = квадрат гипотенузы 
        let c = Math.sqrt(c2);
        return {a, b, c}
}
export {getSides}