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
export {rect}