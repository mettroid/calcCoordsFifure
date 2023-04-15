const name = 'arcTo';
const draw = function(ctx, {point1, point2, point3, radius}){
    ctx.beginPath();
    ctx.moveTo(...point1);
    ctx.arcTo(...point2,...point3,radius);
    ctx.stroke();
}
export {name, draw}