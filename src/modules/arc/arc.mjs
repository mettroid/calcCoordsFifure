const name = 'arc';
const draw = function(ctx, {point1,radius,radians}){
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(point1[0] + 20, point1[1] + 20,radius,...radians);
    ctx.stroke();
}
export {name, draw}