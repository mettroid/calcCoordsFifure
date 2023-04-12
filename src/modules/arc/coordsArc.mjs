import {getDegrees} from '../calc.mjs';
const opt = {
    point1: [150, 150],
    radius: 50,
    radians: [0, Math.PI*2],
    toString(){
        this.radius = Math.round(this.radius);
        let degrees1 = getDegrees(this.radians[0]);
        let degrees2 = getDegrees(this.radians[1]);
        return `ctx.arc(${this.point1[0]},${this.point1[1]},
                        ${this.radius},
                        Math.PI/180*${degrees1},
                        Math.PI/180*${degrees2});`;
    }
}
export {opt};