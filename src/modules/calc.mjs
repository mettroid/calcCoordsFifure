let sinA = null;
let cosA = null;
const clear = function(){
        sinA = null;
        cosA = null;
}
const rect = function(key, mouseX, mouseY, offsetX, offsetY, coords){
         if(key === 'point2'){
            coords.size[0] = mouseX - offsetX - coords.point1[0]; //изменили ширину квадрата
            coords.size[1] = mouseY - offsetY - coords.point1[1]; //изменили высоту квадрата
        }
        if(key === 'point1'){
            coords.size[0] = coords.point2[0] - (mouseX - offsetX);
            coords.size[1] = coords.point2[1] - (mouseY - offsetY);
        }   
}
const arc = function(key, mouseX, mouseY, offsetX, offsetY, coords){
        if(key.startsWith('pointR')){
                setRadius(mouseX, mouseY, offsetX, offsetY, coords);
                let {a, b, c} = getSides(mouseX, mouseY, offsetX, offsetY, coords);
                setDeg(a, b, coords, key);
                if(key === 'pointR1'){
                        setAdjacentPoint('pointR2', coords);
                } else if(key === 'pointR2'){
                        setAdjacentPoint('pointR1', coords);        
                }
        }
        if(key === 'point1'){ //если нажали на центр
            let diffx1 = coords.pointR1[0] - coords.point1[0];
            let diffy1 = coords.pointR1[1] - coords.point1[1];
            let diffx2 = coords.pointR2[0] - coords.point1[0];
            let diffy2 = coords.pointR2[1] - coords.point1[1];
            let normX = mouseX - offsetX;
            let normY = mouseY - offsetY;
            coords.pointR1[0] = normX + diffx1;
            coords.pointR1[1] = normY + diffy1;
            coords.pointR2[0] = normX + diffx2;
            coords.pointR2[1] = normY + diffy2;
        }
}
const setDeg = function(a, b, coords, key){
        let tg = 0;
        let rad = 0;
        if(a > 0 && b > 0){ // если мы в первой четверти круга radian (0 - 1.57)
                tg = b / a;
                rad = 0;
        } 
        if(a <= 0 && b > 0){ // если мы во второй четверти круга (1.57 - 3.14)
                tg = Math.abs(a) / b;
                rad = Math.PI * 0.5;
        }
        if(a <= 0 && b <= 0){ // если мы в третьей черверти круга (3.14 - 4.71)
                tg = b / a;
                rad = Math.PI;
        }
        if(a >= 0 && b <= 0){ // если му в четвёртой четверти круга (4.71 - 6.28)
            tg = a / Math.abs(b);
            rad = Math.PI * 1.5;
        }
        key === 'pointR1'? (coords.degs[0] = Math.atan(tg) + rad) : 
                           (coords.degs[1] = Math.atan(tg) + rad);
}
const setRadius = function(mouseX, mouseY, offsetX, offsetY, coords){
                        let {c} = getSides(mouseX, mouseY, offsetX, offsetY, coords); // вернуть гипотенузу это и будет радиус
                        coords.radius = c;
}
const getSides = function(mouseX, mouseY, offsetX, offsetY, coords){
        let a = (mouseX - offsetX) - coords.point1[0]; // катет a прямоугольного треугольника относительно центра круга
        let b = (mouseY - offsetY) - coords.point1[1]; // катет b прямоугольного треугольника относительно центра круга
        let a2 = Math.pow(a, 2); 
        let b2 = Math.pow(b, 2);
        let c2 = a2 + b2; // сумма квадратов катетов = квадрат гипотенузы 
        let c = Math.sqrt(c2); // найдём гипотенузу , это и будет радиус
        return {a, b, c}
}
const setAdjacentPoint = function(point, coords){
        setSinCos(point, coords);
                      
        let height = coords.radius * sinA; //находим высоту прямоугольного треугольника относительно центра круга
        let width = coords.radius * cosA;  //находим ширину прямоугольного треугольника относительно центра круга     
        coords[point][0] = coords.point1[0] + width;
        coords[point][1] = coords.point1[1] + height;
}
const setSinCos = function(point, coords){
        if(sinA === null && cosA === null){
                let a = coords[point][0] - coords.point1[0];
                let b = coords[point][1] - coords.point1[1]; 
                let c2 = Math.pow(b, 2) + Math.pow(a, 2);
                let c = Math.sqrt(c2);
                sinA = b / c;
                cosA = a / c;  
        } 
}

export {rect, arc, clear}