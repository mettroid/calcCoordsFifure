const name = 'arcTo';
const draw = function(ctx, {point1, point2, point3, radius}){
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(...point1);
    ctx.arcTo(...point2,...point3,radius);
    ctx.stroke();
}
export {name, draw}