// Higher order function
// (Used with Tests) will return just true element

   function filterExampleOne(){
    let arr = [11,31,"ahmed",88,"amjad","osama"];

    let aElement = arr.filter((ele) => {
        if(typeof ele === 'string'){
            return ele.startsWith("a") ? ele : ""
        }
    })
    console.log(aElement)
}

function filterExampleTwo(){
    let numbers = [12,22,42,10,11];

    let result = numbers.filter((ele) => {
        return ele % 2 == 0 ? ele : '';
    })

    console.log(result);
}

function filterExampleThree(){
    let userFav = "i love coding ahmedNayel when i not al-darabee angry!";

    let result = userFav.split(" ").filter( (ele) =>{
        return ele.length <= 6;
    }).join(" ")
    console.log(result)
}

function filterExampleFour(){
    let mixWordNumber = "A13BS2ZX";

    let number = mixWordNumber.split("").filter((ch)=>{
        return !isNaN(ch);
    })

    let words = mixWordNumber.split("").filter((ch)=>{
        return isNaN(ch);
    }).join(" ")

    console.log("all numbers: " , number)
    console.log("all letters: " , words)
}
