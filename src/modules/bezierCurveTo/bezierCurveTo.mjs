const name = 'bezierCurveTo';
const draw = function(ctx, {point1, point2, point3, point4}){
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(point1[0] + 20, point1[1] + 20);
    ctx.bezierCurveTo(point2[0] + 20, point2[1] + 20, 
                      point3[0] + 20, point3[1] + 20, 
                      point4[0] + 20, point4[1] + 20);
    ctx.stroke();
}
export {name, draw}