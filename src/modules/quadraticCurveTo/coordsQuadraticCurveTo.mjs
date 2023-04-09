export const coords = {
    point1: [50, 50],
    point2: [200, 50],
    point3: [250, 250],
    toString(){
        return `ctx.coordsQuadraticCurveTo(${this.point1[0]},
                                           ${this.point1[1]},
                                           ${this.point2[0]},
                                           ${this.point2[1]},
                                           ${this.point3[0]},
                                           ${this.point3[1]});`;
    }
}