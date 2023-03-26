export const remove = function(collection, classActive){
       collection.forEach(tag => {
              tag.classList.contains(classActive) && tag.classList.remove(classActive);
              
       });

}