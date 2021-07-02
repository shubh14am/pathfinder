import UIcontrol from './UIcontroller';
import DFS from './dfs';
import BFS from './bfs';
import DIJKSTRA from './dijkstra';

var AppControl = (function(UIctrl){

    //1.Event listener initialiser
    var setupEventListener = function(){
        document.getElementById("visualise").addEventListener("click",start);
        console.log("application started");
    }

    //2. Start the action
    var start = function(){

        var input = UIctrl.input();

        UIctrl.clear();
        let a = input.src_i+10;
        let b = input.src_j+10;
        document.getElementById(a+""+b).classList.add("start");
        a = input.dst_i+10;
        b = input.dst_j+10;
        document.getElementById(a+""+b).classList.add("end");
        if(input.algorithm === "BFS"){
            BFS.init();
            BFS.bfs(input.src_i,input.src_j,input.dst_i,input.dst_j,input.speed);
            BFS.draw(input.src_i, input.src_j, input.dst_i, input.dst_j, input.speed);
        }else if(input.algorithm === "DFS"){
            DFS.init();
            DFS.dfs(input.src_i, input.src_j, input.dst_i, input.dst_j, input.speed);
        }else if (input.algorithm === "Dijkstras"){
            DIJKSTRA.init();
            DIJKSTRA.dijkstra(input.src_i, input.src_j, input.dst_i, input.dst_j, input.speed);
        }
    }

    return {
        init:setupEventListener
    }
})(UIcontrol);

export default AppControl;