function showCountries(){
    let xhr  = new XMLHttpRequest()
    xhr.open("GET","https://restcountries.com/v3.1/all",true)
    xhr.onload =function(){
        if(xhr.status==200){
            console.log("success")
            let countries = JSON.parse(this.response)
            console.log(countries)
            countries.forEach(i=> {
                const card = document.createElement("div")
                const img = document.createElement("a")    

                card.innerHTML = i.name.common;
                img.innerHTML = ` : ${i.flag}`; 
                card.appendChild(img)
                document.getElementById('feed').appendChild(card);
                
                
                
                
            });
        }
    }
    xhr.send()
}