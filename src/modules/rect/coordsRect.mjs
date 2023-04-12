export const opt = {
    point1: [50, 100],
    size: [200, 100],
    toString(){
        return `ctx.rect(${this.point1[0]},${this.point1[1]},
                         ${this.size[0]},${this.size[1]});`;
    }
}