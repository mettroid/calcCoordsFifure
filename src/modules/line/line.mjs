const name = 'line';
const draw = function(ctx, {point1, point2}){
    ctx.beginPath();
    ctx.moveTo(...point1);
    ctx.lineTo(...point2);
    ctx.stroke();
}
export {name, draw}