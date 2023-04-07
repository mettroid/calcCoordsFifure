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
                let sides = setRadius(key, mouseX, mouseY, offsetX, offsetY, coords);
                
                sides.then(({a,b,c})=>{
                        console.log(b);
                        setDeg(a, b, coords, key);
                        if(key === 'pointR1'){
                                if(sinA === null && cosA === null){
                                        let a = coords.pointR2[0] - coords.point1[0];
                                        let b = coords.pointR2[1] - coords.point1[1];  
                                        let c2 = Math.pow(b, 2) + Math.pow(a, 2);
                                        let c = Math.sqrt(c2);
                                        sinA = b / c;
                                        cosA = a / c; 
                                        console.log(sinA); 
                                }
                                let height = coords.radius * sinA;
                                let width = coords.radius * cosA;
                                coords.pointR2[0] = coords.point1[0] + width;
                                coords.pointR2[1] = coords.point1[1] + height;
                
                                //console.log(width + ' ' + height);
                                console.log(height);
                
                           } else {
                           }
                });

        }
        if(key === 'point1'){
            console.log(coords);
            let diffx1 = coords.pointR1[0] - coords.point1[0];
            let diffy1 = coords.pointR1[1] - coords.point1[1];
            let diffx2 = coords.pointR2[0] - coords.point1[0];
            let diffy2 = coords.pointR2[1] - coords.point1[1];
            coords.pointR1[0] = mouseX - offsetX + diffx1;
            coords.pointR1[1] = mouseY - offsetY + diffy1;
            coords.pointR2[0] = mouseX - offsetX + diffx2;
            coords.pointR2[1] = mouseY - offsetY + diffy2;
        }
}
const setDeg = function(a, b, coords, key){
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
        if(key === 'pointR1'){
                coords.degs[0] = Math.atan(tg) + rad;
        } else {
                coords.degs[1] = Math.atan(tg) + rad;
        } 
}
const setRadius = function(key, mouseX, mouseY, offsetX, offsetY, coords){
        return new Promise(function(resolve, reject){
                (async()=>{
                        let Math = await import('./math.mjs');
                        let sides = Math.getSides(mouseX, mouseY, offsetX, offsetY, coords);
                        coords.radius = sides.c;
                        resolve(sides);
                })();
        });

}
export {rect, arc, clear}