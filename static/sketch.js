
let sketch = function (p) {
    let img;
    let imgScale;
    let xshift, yshift;
    let res = 5;

    const height = () => {
        return Math.max(Math.min(p.windowHeight - 600, p.windowWidth - 150), 500);
    }

    const width = () => {
        return Math.min(Math.max(p.windowWidth - 50, 300), 1000);
    }

    const rescale = () => {
        let wScale = width() / img.width;
        let hScale = height() / img.height;

        imgScale = Math.max(wScale, hScale);
        xshift = (img.width * imgScale - width()) / 2;
        yshift = (img.height * imgScale - height()) / 2;
    }

    p.preload = () => {
        img = p.loadImage('assets/map.png');
    }

    p.setup = () => {
        const cnv = p.createCanvas(width(), height());
        cnv.parent('canvasContainer');

        rescale();
        p.strokeWeight(1);
        p.noStroke();
        //stroke(255, 255, 255);
    }

    p.draw = () => {
        for (let i = 0; i < 200; ++i) {
            let x = Math.random() * img.width;
            let y = Math.random() * img.height;
            let rx = Math.floor(x * imgScale / res) * res;
            let ry = Math.floor(y * imgScale / res) * res;
            let pixel = img.get(x, y);
            pixel[3] = 150;
            p.fill(pixel);
            p.circle(rx - xshift, ry - yshift, res);
        }
    }

    p.windowResized = () => {
        p.resizeCanvas(width(), height());
        rescale();
    }
}

window.onload = () => {
    let p = new p5(sketch);
}