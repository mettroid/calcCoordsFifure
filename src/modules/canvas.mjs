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
       opt.offsetX = Math.round(coords.x + window.pageXOffset + 20),
       opt.offsetY = Math.round(coords.y + window.pageYOffset + 20)


}
let opt = {};
export {create, changeOffsetXY, opt}