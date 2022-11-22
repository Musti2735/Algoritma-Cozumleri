const simpleSymbol = (str) =>{
    const arr = str.split("")
    let controlArr=[]

    arr.forEach(char => {
        if((/[a-zA-z]/).test(char)){
            if(arr[arr.indexOf(char)-1] ==="+" && arr[arr.indexOf(char)+1] ==="+"){
                controlArr.push(1)
            }else{
                controlArr.push(0)
            }  
        }      
        });

    if (controlArr.includes(0)){
        return false}
        else{
            return true
        };

    };



console.log(simpleSymbol("++d+====+c++==+a+"))

/* 
Verilen string ifadede iki + karekteri arasında bir rakam olup olmadığını kontrol eden uygulama

1 - Soruda forEach döngüsü kullanacağımız için ilk olarak bize verilen string'den .split() metodu ile yeni bir array oluşturduk.
 2 - Her bir harfin bizden istenilen koşulu sağlayıp sağlamadığının kayıt edileceği bir array oluşturduk.
 3 - String'i kullanarak oluşturduğumuz array içerisindeki karakterler üzerinde forEach metodu kullanarak tarama yaptık.
4 - forEach içerisinde ilk olarak üzerinde bulunulan karakterin bir harf olup olmadığını .test metodu ile kontrol edip yalnızca harfler üzerinde kontroller gerçekleştirdik. 
5 - .test metodu ile harf olduğunu belirlediğimiz karakterin index'ini indexOf metodu kullanarak belirledik. Sonra da karakterin index''inden 1 çıkartıp arkasındaki ve 1 toplayarak da önündeki karakterlere array üzerinden ulaştık ve de bu değerleri "+" sembolü olup olmadığına baktık. 
6 - Eğer ilgili karakterin önü ve arkasındaki değer "+" sembolü ise kontrol array'ine .push() metodu ile 1 yazdık. Aksi bütün durumlar içinse kontrol array'ine 0 yazdık. 
7 - Son olarak da kontrol grubu içerisinde 0 olup olmadığını kontrol ettik. Eğer kontrol grubunda 0 varsa fonksiyonun false, yoksa da true dönmesini sağladık. 

*/