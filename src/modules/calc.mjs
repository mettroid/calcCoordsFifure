
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
        if(key === 'pointR'){
           let a = (mouseX - offsetX) - coords.point1[0]; // катет a прямоугольного треугольника
           let b = (mouseY - offsetY) - coords.point1[1]; // катет b прямоугольного треугольника
           let a2 = Math.pow(a, 2); 
           let b2 = Math.pow(b, 2);
           let c2 = a2 + b2; // сумма квадратов катетов = квадрат гипотенузы
           coords.radius = Math.sqrt(c2);

           let tg = 0;
           let rad = 0;
           if(a > 0 && b > 0){
                tg = b / a;
                rad = 0;
           }
           if(a <= 0 && b > 0){
                tg = Math.abs(a) / b;
                rad = Math.PI * 0.5;
           }
           if(a <= 0 && b <= 0){
                tg = b / a;
                rad = Math.PI;
           }
           if(a >= 0 && b <= 0){
               tg = a / Math.abs(b);
               rad = Math.PI * 1.5;
           }
         
           console.log(Math.atan(tg));
           coords.degs[0] = Math.atan(tg) + rad;
           
        }
        if(key === 'point1'){
            let diffX = coords.pointR[0] - coords.point1[0];
            let diffY = coords.pointR[1] - coords.point1[1];
            coords.pointR[0] = mouseX - offsetX + diffX;
            coords.pointR[1] = mouseY - offsetY + diffY;
        }
}
export {rect, arc}