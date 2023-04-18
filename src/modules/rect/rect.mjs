const name = 'rect';
const draw = function(ctx, {point1,size}){
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.strokeRect(point1[0] + 20, point1[1] + 20, ...size);
}
export {name, draw}