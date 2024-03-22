let button = document.querySelector(".button");
let word = document.querySelector(".word");
let text = document.querySelector("#text");
let btn = button.addEventListener("click", function ram(abc){
    word.innerText = text.value;
     abc = word.innerText;
    Bch(abc);
})
function Bch(abc){
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${abc}`;
   
    
    let meaning = document.querySelector(".meaning");
    
    
    
    fetch(url,)
    .then(response=>response.json())
    .then( function (data){
                    
                    console.log(data);
                        let dictionary ={
                            name: `${abc}`,
                            mean: `${data[0].meanings[0].definitions[0].definition}`,
                            
                            
                        }
                        console.log(data);
                        meaning.innerText = dictionary.mean;
                     
                   
        
           
          
        
        
    })
    .catch (function (data){
        meaning.innerText = "Error - That word must be on vacation, Maybe Nikhil knows where it went." 
    })
}
let emoji = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]
let heart = document.querySelector(".heart")

heart.addEventListener("click",plz);

function plz(){
    let random = Math.floor(Math.random()*emoji.length);
    heart.innerText = emoji[random];
}

let footer = document.querySelector(".footer");


let i = 0;
footer.addEventListener("click", ()=>{
    let myfoot = ['Please Dont touch','Please','I said No Na','Nick help me','Nickkkk','Its your last warning', 'Bye'];
    
    if(i<7){
    footer.innerText = myfoot[i];
    i++;}
    else{
        setTimeout(() => {
            footer.innerText = " "
        }, 100);
        
    }    
    
})




