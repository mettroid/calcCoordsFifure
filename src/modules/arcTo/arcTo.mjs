const name = 'arcTo';
const draw = function(ctx, {point1, point2, point3, radius}){
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(point1[0] + 20, point1[1] + 20);
    ctx.arcTo(point2[0] + 20, point2[1] + 20, point3[0] + 20, point3[1] + 20, radius);
    ctx.stroke();
}
export {name, draw}