const name = 'rect';
const draw = function(ctx, canvas, {point1,size}){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeRect(...point1,...size);
}
export {name, draw}