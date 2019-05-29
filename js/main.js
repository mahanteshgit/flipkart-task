function sumOfArrEl(str){
    const arrEl = str.split(',');
    console.log(arrEl);
    const total = arrEl.reduce((total,cur)=>{
        return total;
    }, 0)
    return total;
}

sumOfArrEl([9,3,'7','3']);