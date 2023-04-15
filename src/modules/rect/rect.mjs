const name = 'rect';
const draw = function(ctx, {point1,size}){
    ctx.strokeRect(...point1,...size);
}
export {name, draw}