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

zwróć().then(res => console.log(res))
zwróć().then(res => console.log(res))
zwróć().then(res => console.log(res))