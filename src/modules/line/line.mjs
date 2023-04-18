const name = 'line';
const draw = function(ctx, {point1, point2}){
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(point1[0] + 20, point1[1] + 20);
    ctx.lineTo(point2[0] + 20, point2[1] + 20);
    ctx.stroke();
}
export {name, draw}