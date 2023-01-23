function drawWall(ctx, canvasWidth, canvasHeight) {
    // define brick height and width, and spaces between them
    const bh = 20,
        bw = 50,
        space = 5;

    // calculate the rows and columns of the wall
    const rows = Math.ceil(canvasHeight / (bh + space));
    const columns = Math.ceil(canvasWidth / (bw + space));

    // draw columns
    for (let r = 0; r < rows; r++) {
        // draw rows
        for (let c = 0; c < columns; c++) {
            if (r % 2) {
                c == 0 ? ctx.fillRect(c * (bw + space), r * (bh + space), bw / 2, bh) :
                    ctx.fillRect(c * (bw + space) - bw / 2, r * (bh + space), bw, bh);
            } else {
                ctx.fillRect(c * (bw + space), r * (bh + space), bw, bh);
            }
        }
    }
    ctx.fillStyle = 'rgba(0,0,255,0.5)';
}