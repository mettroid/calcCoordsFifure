export function check(obj){
    return {}.toString.call(obj).slice(-7, -1);
}