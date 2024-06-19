const axios = require("axios")


const func = () => {
    return new Promise((wyn) =>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            const data = res.data
            const osoba = data.reduce((acc,c) => {
                if (c.company.catchPhrase.length>acc.company.catchPhrase.length) return c
                else return acc
            },data[0])
    
            const nazw = osoba.name.split(" ")[1]
    
            wyn(nazw)
        })

    })

}


func().then(nazw => console.log(nazw))