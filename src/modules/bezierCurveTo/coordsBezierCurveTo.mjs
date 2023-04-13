export const opt = {
    point1: [50, 50],
    point2: [100, 50],
    point3: [200, 50],
    point4: [250, 250],
    toString(){
        return `ctx.moveTo(${this.point1[0]},${this.point1[1]});
                ctx.bezierCurveTo(${this.point2[0]},${this.point2[1]},
                                  ${this.point3[0]},${this.point3[1]},
                                  ${this.point4[0]},${this.point4[1]});`;
    }
}
