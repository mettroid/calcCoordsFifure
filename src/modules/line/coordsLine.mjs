export const coords = {
    point1: [100, 100],
    point2: [200, 200],
    toString(){
        return `ctx.moveTo(${this.point1[0]}, ${this.point1[1]});
                ctx.lineTo(${this.point2[0]}, ${this.point2[1]});`;
    }
}