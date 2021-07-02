/* eslint-disable no-loop-func */
var UIcontrol = (function(){

    var algoName = ["none", "Dijkstras", "BFS", "DFS", "A*", "Swarm"];
    var speedVal = [NaN, 70, 50, 20];

    var Wall = new Array(20);
    for(let i=0;i<20;i++){
        Wall[i] = new Array(51);
        for(let j=0;j<51;j++)
            Wall[i][j] = false;
    }

    let si=0,sj=10,ei=10,ej=30,pre_si=si+10,pre_sj = sj+10,pre_ei = ei+10,pre_ej = ej+10;
    var mouseDown = false;

    var pressedNodeStatus = "normal";

    
    
    document.getElementById("1020").classList.add("start");
    document.getElementById("2040").classList.add("end");

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 51; j++) {
            let a = i + 10, b = j + 10;
            let currentId = a + "" + b;
            let currentElement = document.getElementById(currentId);
            currentElement.onmousedown = () => {
                console.log("mousedown");
                mouseDown = true;
                if ((i === si && j === sj) || (i === ei && j === ej)) {
                    pressedNodeStatus = (i === si) ? "start" : "target";
                } else {
                    pressedNodeStatus = "normal";
                    currentElement.classList = "";
                }
            }
            currentElement.onmouseup = () => {
                console.log("mouseup");
                mouseDown = false;
                if (pressedNodeStatus === "target") {
                    ei = i;
                    ej = j;
                } else if (pressedNodeStatus === "start") {
                    si = i;
                    sj = j;
                }
                pressedNodeStatus = "normal";
            }
            currentElement.onmouseenter = () => {
                if (mouseDown && pressedNodeStatus !== "normal") {
                    
                    if (pressedNodeStatus === "target") {
                        pre_ei = ei + 10;
                        pre_ej = ej + 10;
                        document.getElementById(pre_ei + "" + pre_ej).classList.remove("end");
                        ei = i;
                        ej = j;
                        currentElement.classList.add("end");
                    } else if (pressedNodeStatus === "start") {
                        pre_si = si + 10;
                        pre_sj = sj + 10;
                        document.getElementById(pre_si + "" + pre_sj).classList.remove("start");
                        si = i;
                        sj = j;
                        currentElement.classList.add("start");
                    }

                } else if (mouseDown) {
                    currentElement.classList = "";
                }
            }
        }
    }


    return {
        input: function () {
            return {
                algorithm: algoName[document.getElementById("algo").value],
                speed: speedVal[document.getElementById("speed").value],
                src_i: si,
                src_j: sj,
                dst_i: ei,
                dst_j: ej
            }
        },
        clear:function(){
            for(let i=0;i<20;i++){
                for(let j=0;j<51;j++){
                    let a = i+10;
                    let b = j+10;
                    document.getElementById(a + "" + b).className = "";
                }
            }
        },
        wall:Wall
    }
    
})();

export default UIcontrol;