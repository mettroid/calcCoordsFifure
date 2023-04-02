const create = function(parent, id, classStyle, classPosition, width, height){
    let canvas = document.createElement('canvas');
    parent.insertAdjacentElement('beforeEnd', canvas);

    canvas.width = width;
    canvas.height = height;
    canvas.id = id;
    canvas.classList.add(classStyle, classPosition);
    
    let coords = canvas.getBoundingClientRect();
    return {
        id,
        canvas,
        ctx: canvas.getContext('2d'),
        offsetX: coords.x + window.pageXOffset,
        offsetY: coords.y + window.pageYOffset
    }
}
export {create}