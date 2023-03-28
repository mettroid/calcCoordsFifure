export default function(id, currentActiveInstruction, classActive){
                            let elem = document.getElementById(id);
                            currentActiveInstruction.classList.remove(classActive);
                            elem.classList.add(classActive);
                            return elem;
}
