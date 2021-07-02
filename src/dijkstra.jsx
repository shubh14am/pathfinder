

var  DIJKSTRA = (function(){

    var dx = [-1, 0, 0, 1];
    var dy = [0, -1, 1, 0];

    var timer = 100;
    function fill(i, j) {
        setTimeout(function () {
            let x = i+10;
            let y = j+10;
            document.getElementById(x + "" + y).classList.add("def");
        }, timer);
    }

    var Board = new Array(20);
    var parent = new Array(20);
    var weights = new Array(20);

    


    function findMinVertex(){
        let minVertex_i = 0;
        let minVertex_j = 0;
        for (let i = 0; i < 20; i++) {
            for(let j = 0; j < 51; j++) {
                if (Board[i][j] === false) {
                    if (weights[i][j] < weights[minVertex_i][minVertex_j]){
                        minVertex_i = i;
                        minVertex_j = j;
                    }
                }
            }
        }
        return {
            i:minVertex_i,
            j:minVertex_j
        }
    }
    return {  // public funcn
        dijkstra: function (sx, sy, ex, ey, dt) {

            weights[sx][sy] = 0;

            for (let count = 0; count < 1020-1; count++) {
                timer += dt;
                let nv = findMinVertex();
                console.log(nv);
                Board[nv.i][nv.j] = true;
                let flag = false;
                for (let k = 0; k < 4; k++) {
                    let adx = nv.i + dx[k];
                    let ady = nv.j + dy[k];
                    if(adx < 20 && ady < 51 && adx >=0 && ady >= 0){
                        if (Board[adx][ady] === false) {
                            flag = true;
                            fill(adx, ady);
                            if (weights[nv.i][nv.j] + 1 < weights[adx][ady]) {
                                weights[adx][ady] = 1 + weights[nv.i][nv.j];
                            }
                        }
                    }

                }
                if(!flag){
                    console.log("asdfghjk");
                    weights[nv.i][nv.j] = 99999999;
                }

            }
        },
        init:function(){
            for (let i = 0; i < 20; i++) {
                Board[i] = new Array(51);
                for (let j = 0; j < 51; j++) {
                    Board[i][j] = false;
                }
            }
            for (let i = 0; i < 20; i++) {
                weights[i] = new Array(51);
                for (let j = 0; j < 51; j++) {
                    weights[i][j] = 999999;
                }
            }

            for (let i = 0; i < 20; i++) {
                parent[i] = new Array(51);
                for (let j = 0; j < 51; j++) {
                    parent[i][j] = -1;
                }
            }
            timer = 100;
        }
    }

})(); 

export default DIJKSTRA;