class Cipher{
    constructor(message){
        this.message = message;
    }

    cearserCipher(str,key){
        // for any number greater than 26 to get it representation 
        key = key % 26;
        let lowerCasedString  =  str.toLowerCase();
        let alphabet = 'abcdeghijklmnopqrstuvwxyz'.split('') ;  // convert to an array
        let encrytped_msg =  '';
        for(let i = 0 ; i<lowerCasedString.length;i++){
            let current = lowerCasedString[i];
            if(current === ' '){
                encrytped_msg += current;
                continue;
            }

            let currentIdx = alphabet.indexOf(current);
            let newIdx = currentIdx+key; // get new location
            if(newIdx>25) newIdx = newIdx-26;
            if(newIdx < 0) newIdx=newIdx+26;
            if(str[i]===str[i].toUpperCase()){
                encrytped_msg+=alphabet[newIdx].toUpperCase();
            }else encrytped_msg+=alphabet[newIdx];
        }
        console.log('\x1b[33m%s\x1b[0m',this.message);
        console.log('\x1b[36m%s\x1b[0m','====>',encrytped_msg);
        return encrytped_msg;
    }; 

    decipher(str,key){
        // for any number greater than 26 to get it representation 
        key = key % 26;
        let lowerCasedString  =  str.toLowerCase();
        let alphabet = 'abcdeghijklmnopqrstuvwxyz'.split('') ;  // convert to an array
        let decrytped_msg =  '';
        for(let i = 0 ; i<lowerCasedString.length;i++){
            let current = lowerCasedString[i];
            if(current === ' '){
                decrytped_msg += current;
                continue;
            }

            let currentIdx = alphabet.indexOf(current);
            let newIdx = currentIdx-key; // get new location
            if(newIdx>25) newIdx = newIdx+26;
            if(newIdx < 0) newIdx=newIdx-26;
            if(str[i]===str[i].toUpperCase()){
                decrytped_msg+=alphabet[newIdx].toUpperCase();
            }else decrytped_msg+=alphabet[newIdx];
        }
        console.log('\x1b[33m%s\x1b[0m',this.message);
        console.log('\x1b[36m%s\x1b[0m','====>',decrytped_msg);
        return decrytped_msg;
    }
}


module.exports= Cipher;
