(function(){
    let mainField = document.getElementById('mainField');
    mainField.addEventListener('click', function(e){
        let elem = e.target;
        let item = elem.closest('li.list__item');
        if(!item){ return };
        let id = item.dataset.id;
        let field = document.getElementById(id);

        (async () =>{
            let {remove} = await import('./removeActive.mjs');
            let Collections = await import('./collections.mjs');
            remove(Collections.items, 'list__item_active');
            remove(Collections.fields, 'instruction__field_active');
                     
            field.classList.add('instruction__field_active');
            item.classList.add('list__item_active');

            let {canvasProperty} = await import('./canvas.mjs'); //импорт обьекта с контекстом и id
            let {coords} = await import(`./${id}/coords${id[0].toUpperCase() + id.slice(1)}.mjs`);//импорт координат фигур ндя начальной отрисовки
            let Geometry = await import(`./${id}/${id}.mjs`); //импорт модуля фигуры
            Geometry.draw(canvasProperty.ctx, coords);

        })();
    });
})();