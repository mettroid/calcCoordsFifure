const create = function(parent, id, classStyle, classPosition){
    let canvas = document.createElement('canvas');
    parent.insertAdjacentElement('afterBegin', canvas);
    canvas.id = id;
    canvas.classList.add(classStyle, classPosition);
    opt = {
        id,
        canvas,
        ctx: canvas.getContext('2d'),   
    }
}
let changeOffsetXY = function(){
    let coords = opt.canvas.getBoundingClientRect();
    if(coords.x == opt.offsetX &&
       coords.y == opt.offsetY) return;
       opt.offsetX = coords.x + window.pageXOffset,
       opt.offsetY = coords.y + window.pageYOffset


}
let opt = {};
export {create, changeOffsetXY, opt}