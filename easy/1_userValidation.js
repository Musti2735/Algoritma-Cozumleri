export const userValidation = (str)=>{

    if(str.length>=4 && str.length <=25 //str nin uzunluğunu kontrol ediyoruz.
       && (/[a-zA-Z]/).test(str.slice(0,1))//Letter ile başlayıp başlamadığını kontrol ediyoruz.
       && (/^\w+$/).test(str)//Letters içinde karekter var mı yok mu kontrol ediyoruz.
       && (/[a-zA-Z0-9]/).test(str.slice(-1)) //son letterın harf ya da rakam olduğubu kontrol ediyoruz.
    ){
        return true;
    }else{
        return false;
    }

    // If ile dizenin uzunluğunu kontrol ettik.)
    //RegExp ile harf kontrolü yaptık.

    //.charAt() ile veya .slice() metodu ile karekterin indeksini alabiliriz.

    // .test() metodu ile kontrol sağlanır.
}




/*Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/