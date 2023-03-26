(function(){  
    let mainField = document.getElementById('mainField');
    mainField.addEventListener('mouseout', function(e){
        let parent = e.relatedTarget;
        const item = e.target.closest('li.list__item');//уходим из лишки иди из её потомком
        if(!item){ return };
        console.log(parent);
        while(true){
            
            if(parent === null){ 
                item.classList.remove('list__item_pick');
                return; 
            };
            if(parent === item){ return };
            parent = parent.parentNode;
        }
        
    });
})();