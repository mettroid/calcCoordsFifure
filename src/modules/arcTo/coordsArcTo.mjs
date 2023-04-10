export const coords = {
    point1: [50, 50],
    point2: [250, 50],
    point3: [50, 140],
    radius: 40,
    toString(){
        return `ctx.moveTo(${this.point1[0]},${this.point1[1]});
                ctx.arcTo(${this.point2[0]},${this.point2[1]},
                          ${this.point3[0]},${this.point3[1]},
                          ${this.radius});`;
    }
}