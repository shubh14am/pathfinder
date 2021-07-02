var dx = [-1, 0, 0, 1];
var dy = [0, -1, 1, 0];

var Board = new Array(20);

var timer = 100;
function fill(i, j,pre_i,pre_j) {
    setTimeout(function () {
        let x = pre_i + 10;
        let y = pre_j + 10;
        document.getElementById(x + "" + y).classList.remove("cur");
        document.getElementById(x + "" + y).classList.add("def");
        x = i+10; y = j + 10;
        document.getElementById(x+"" +y).classList.add("cur");
    },timer);
}
var DFS = (function(){
    return {
        dfs: function dfs(sx, sy, ex, ey, dt) {

            Board[sx][sy] = true;
            timer += dt;

            if (sx === ex && sy === ey) {
                return true;
            }

            for (let k = 0; k < 4; k++) {
                let nx = sx + dx[k];
                let ny = sy + dy[k];

                if (nx <= 20 && nx >= 0 && ny <= 50 && ny >= 0) {
                    if (Board[nx][ny] === false) {
                        fill(nx, ny, sx, sy);
                        let t = dfs(nx, ny, ex, ey, dt);
                        if (t === true) {
                            return true;
                        }
                    }
                }
            }
            return false;
        },
        init: function () {
            for (let i = 0; i < 20; i++) {
                Board[i] = new Array(51);
                for (let j = 0; j < 51; j++) {
                    Board[i][j] = false;
                }
            }
            timer = 100;
        },
        draw: function () {

        }

    }
})();

export default DFS;










