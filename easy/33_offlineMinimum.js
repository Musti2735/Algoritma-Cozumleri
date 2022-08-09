const offlineMinimum =(arr) =>{
    newArr = arr.reverse()
    const freq_E = freq(arr)
  
    for(let i =0; i<=newArr.length; i++){
        if(newArr[i]=="E"){
            newArr2= newArr.slice(i,newArr.length)
            return newArr2.filter((item)=>item!="E").sort().slice(0,freq_E)
        }   
    }
}

const freq =(arr)=>{
    freq_E=0
    for(let i =0; i<=arr.length; i++){
        if (arr[i]=="E"){
            freq_E +=1
        }      
    }
    return freq_E
}



console.log(offlineMinimum(["5","4","0","6","E","1","7","E","E","3","2","E","E","3"]))

/* Soruda, her bir E karekterinden önceki en küçük rakamı bularak bunlarla yeni bir arr oluşturmamız isteniyor. 
E harfini bulup, en küçük rakamı alıyoruz ve ardından diğer E harfine kadar olan tüm rakamlar arasındaki en küçük rakamı alıyoruz.

Sorunun çözümü için bakıldığında, ne kadar E harfi varsa o kadar en küçük sayı bizden isteniyor. Bu seneple son E harfinden sonraki rakamlar ile bir işimiz olmadığı için listeyi ters çevirip bu rakamları çıkardık. Ardından filter metodu ile E harflerini çıkardık. Kalan listede sadece rakamalar kaldı ve bunları küçükten büyüğe sort metodu ile sıraladık. freq() fonksiyonu ile E harfinin kaç defa tekrar ettiğini tespit ettik ve değeri freq_e değişkenine atadık. slice metotu ile sıralanan listede 0dan freq_E değerine kadar olan karekterleri return ettik. 

*/