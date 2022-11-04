function palindrome(str){
    let newString = [...str].reverse().join('');

    if(str == newString){
        return true;
    }
    else{
        return false;
    }

}