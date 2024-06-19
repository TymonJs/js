const func = (tab,cb) => {
    Promise.all(tab.map(x => x())).then(res => cb(res.filter(x => x<=1000).length))
}


const getRand = () => {
    return Math.floor(Math.random() * 2000);
  }; 

const zwróć = () => {
    const rand = getRand()
    return new Promise((res) => {
        setTimeout(() => {
            res(rand)
        }, rand);
    })
}

const tab = [
    zwróć,
    zwróć,
    zwróć,
    zwróć,
    zwróć
]

func(tab,(res) => console.log(res))