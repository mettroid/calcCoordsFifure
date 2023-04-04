const name = 'arc';
const draw = function(ctx, {point1,radius,degs}){
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.arc(...point1,radius,...degs);
    ctx.stroke();
}
export {name, draw}