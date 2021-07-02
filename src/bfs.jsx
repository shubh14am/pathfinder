var dx = [-1, 0, 0, 1];
var dy = [0, -1, 1, 0];

var Board = new Array(20);

var Path = new Array(20);

var timer = 100;
function fill(i, j) {
    setTimeout(function () {
        let x = i + 10;
        let y = j + 10;
        document.getElementById(x + "" + y).classList.add("abc");
    }, timer);
}

function fillp(a, b) {
    setTimeout(function () {
        let x = a + 10;
        let y = b + 10;
        document.getElementById(x + "" + y).className = "def";
    }, timer);
}

class node{
    constructor(i,j){
        this.x = i;
        this.y = j;
    }
}
var BFS = (function(){
    return {
        bfs: function (sx, sy, ex, ey, dt) {

            var pending_nodes = [];
            let t = new node(sx, sy);
            pending_nodes.push(t);

            while (pending_nodes.length !== 0) {
                timer += dt;
                var tmp = pending_nodes.shift();

                if (tmp.x === ex && tmp.y === ey)
                    return true;

                for (let k = 0; k < 4; k++) {
                    let nx = tmp.x + dx[k];
                    let ny = tmp.y + dy[k];
                    if (nx >= 0 && nx <= 19 && ny >= 0 && ny <= 50) {
                        fill(nx, ny);
                        if (Board[nx][ny] === false) {
                            Path[nx][ny] = new node(tmp.x, tmp.y);
                            if (nx === ex && ny === ey) return true;
                            Board[nx][ny] = true;
                            pending_nodes.push(new node(nx, ny));
                        }
                    }
                }
            }
        },
        init: function () {
            for (let i = 0; i < 20; i++) {
                Board[i] = new Array(51);
                for (let j = 0; j < 51; j++) {
                    Board[i][j] = false;
                }
            }
            for (let i = 0; i < 20; i++) {
                Path[i] = new Array(51);
            }

            timer = 100;

        },
        draw: function (sx, sy, ex, ey, dt) {
            ex = Path[ex][ey].x;
            ey = Path[ex][ey].y;
            while (ex !== sx || ey !== sy) {
                // console.log(Path[a][b]);
                timer += dt;
                fillp(ex, ey);
                ex = Path[ex][ey].x;
                ey = Path[ex][ey].y;
            }
        }
    }
})();

export default BFS;
