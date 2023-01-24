//dom element
const generateEl=document.getElementById('generate'); //dom variable are identical to youtube 
const lengthEl=document.getElementById('myRange');
const upperEl=document.getElementById('upperCase')
const lowerEl=document.getElementById('lowerCase');
const numberEl=document.getElementById('num');
const symbolEl=document.getElementById('specialChar');
const resultEl=document.getElementById('password');


const randomFunc= {
    lower:randomLowerCase,
    upper: randomUpperCase,
    number: randomNumber,
    symbols:randomSymbol
};
//generate event listener
generateEl.addEventListener('click',() =>{
    const length=lengthEl.value;
    const hasLower=lowerEl.checked;
    const hasUpper=upperEl.checked;
    const hassymbol=symbolEl.checked;
    const hasnumber=numberEl.checked;
    

    resultEl.innerText=generatePassword(hasLower,hasUpper,hasnumber,hassymbol,length); //used this variable like in youtube
});

//generate password function
function generatePassword(lower,upper,number,symbols,length){

    //initialize password variable
    //filter out unchecked type
    //loop through length
    //return result to password variable
    let generatedPassword='';
    const typesCount=lower+upper+number+symbols;
    console.log("types Count: " +typesCount);
    const typeArr=[{lower},{upper},{symbols},{number}].filter
    (
        item=>Object.values(item)[0]
    );
    
    if(typesCount===0){
        return "";
    }
    for(let i=0; i<length; i+=typesCount){
        typeArr.forEach(type => {
            const funcName=Object.keys(type)[0];

            generatedPassword+=randomFunc[funcName]();
            
        });
    }
    const finalPassword=generatedPassword.slice(0,length);
    return finalPassword;

}
// define function to generate random number, symbol, uppercase,lower case
function randomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function randomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function randomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function randomSymbol(){
    const symbols=  '@%+\\/!#$^?:)(}{][~-_.'
    return symbols[Math.floor(Math.random()*symbols.length)];
}

console.log(randomSymbol());
