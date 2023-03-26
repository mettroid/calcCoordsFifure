(function(){
     let mainField = document.getElementById('mainField');
     mainField.addEventListener('mouseover', function(e){
        const targetNow = e.target;
        console.log();
        const item = targetNow.closest('li.list__item');
        if(!item){ return };

        if(item.classList.contains('list__item_pick') || 
        item.classList.contains('list__item_active')
        ){ return };
        item.classList.add('list__item_pick');
    });
})();