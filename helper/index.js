// import fs module for handling reading,writing to file
const fs = require("fs");
const os = require("os");
const path = require("path");
const readline =require("readline");
const cipher = require("../lib/cipher");
/**
 *  Due to race conditions the accessor function may causes change.
 * @param {*} filepath ==> location of the file
 * @param {*} filename ==> name of the file
 */
const accessor = (filepath,filename)=>{
    let seperator =  (os.platform == "win32") ? "\\":"/";
    fs.access(path.join(filepath,seperator,filename),(error)=>{
        if(!error){
            console.log('\x1b[32m%s\x1b[0m',`${filename} was discovered ....`);
            return encryptor(path.join(filepath,seperator,filename));
        }
        else{
            console.log('\x1b[31m%s\x1b[0m',`${filename} does not exist....`);
            return;
        }
    })
}

const getline = (line)=>{
    var l = '';
    const ciphered=   new cipher(line).cearserCipher(line,40);
    l+=(ciphered);    
    return l;
};

const encryptor =  (filepath)=>{
    const fileStream = fs.createReadStream(filepath);
    const linereader = readline.createInterface({
        input:fileStream,
        crlfDelay:Infinity
    }); 
    let string = "";
    linereader.on('line',(line)=>{
        string += getline(line);
    });
}


module.exports = ()=>{
    return{
        accessor,
        encryptor
    }
}