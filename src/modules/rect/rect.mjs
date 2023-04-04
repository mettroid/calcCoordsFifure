const name = 'rect';
const draw = function(ctx, {point1,size}){
    ctx.clearRect(0,0,300,300);
    ctx.lineWidth = 2;
    ctx.strokeRect(...point1,...size);
}
export {name, draw}