const helper = require("./helper/index");

const App = ()=>{
    function init(dir,filename){
        return  helper().accessor(dir,filename);
    }
    return init; 
}

App()(__dirname,"file.txt");
