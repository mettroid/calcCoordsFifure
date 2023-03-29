const create = function(parent, id, classStyle, classPosition, width, height){
    let canvas = document.createElement('canvas');
    parent.insertAdjacentElement('beforeEnd', canvas);

    canvas.width = width;
    canvas.height = height;
    canvas.id = id;
    canvas.classList.add(classStyle, classPosition);
     
    return {
        canvas,
        ctx: canvas.getContext('2d'),
        id
    }
}
export {create}