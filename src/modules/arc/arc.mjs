const name = 'arc';
const draw = function(ctx, {point1,radius,radians}){
    ctx.beginPath();
    ctx.arc(...point1,radius,...radians);
    ctx.stroke();
}
export {name, draw}