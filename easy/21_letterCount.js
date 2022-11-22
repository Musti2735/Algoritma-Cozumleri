const letterCount = (str) =>{
    let arr = str.replace(/[^a-zA-z ]/g, "").toLowerCase().split(" ")
    
    mainArr =[]
    for(let i=0; i<arr.length; i++){
        let obj ={}
        arr[i].split("").forEach(char => {
            char in obj ? obj[char] +=1 : obj[char] =1
        });
        mainArr.push(obj)
    }

    let maxFreq=[]

    mainArr.forEach((nesne)=>{
        maxFreq.push(Math.max(...Object.values(nesne))) //Her bir kelime için max freq değerini aldık 
    })

    let maxValue = Math.max(...maxFreq)

    let firsMaxLetter = arr[maxFreq.indexOf(maxValue)]

    return maxValue < 2 ? -1 : firsMaxLetter



}


console.log(letterCount("Todaytt, is the greattest day ever!"))

/*

1 - Bizden sadece harflerin sayısı üzerinden değerlendirme yapmamız istendiği için, harf ve boşluk dışındaki karakterleri siliyoruz.
2 - Daha sonradan karışıklık olmaması içine harfleri toLowerCase metodu ile küçük harfle dönüştürüyoruz.
3 - Oluşturduğumuz yeni string'i .split() metodu ile array'e dönüştürüyoruz.
4 - Oluşturduğumuz array üzerinde for döngüsü uyguluyoruz ve bu sayede her bir kelimeye ayrı ayrı ulaşmış oluyoruz.
5 - Her bir kelime içerisindeki her bir harfi oluşturduğumuz boş bir nesne üzerinden kontrol ediyoruz. Eğer harf nesne içerisinde varsa value değerini 1 arttırıyoruz, aksi durumda ise harf:1 şekilnde key:value çiftini nesneye ekliyoruz.
6 - Oluşan kelimelere ait nesneleri, bir array içerisine ekliyoruz. 
7 - Object.Values metodu yardımıya her bir kelime için oluşturduğumuz nesneden sadece value yani değerleri çekiyoruz ve bu değerlerin en yükseğini ise oluşturduğumuz bir array içerisine ekliyoruz. Böylece her bir kelimenin max tekerrür sayısını, kelime sırasına göre elde etmiş oluyoruz.
8 - Maksimum tekerrür değerleri içerisindeki max değerin index'ini buluyoruz. Bu bulduğumuz index'i ile ilk oluşturduğumuz array içerisinde arr[index] kullanarak, en çok tekerrüre sahip kelimeyi saptamış oluyoruz.

*/