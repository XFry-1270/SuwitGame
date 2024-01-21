// game suwit

const batu = document.querySelector(".batu");
const gunting =document.querySelector('.gunting');
const kertas =document.querySelector('.kertas');


function suwit(choose1,choose2){
    var pilihanP = choose1 ;
    var pilihanB = choose2 ;
    const player = document.querySelector('.player').textContent="...";
    const bot = document.querySelector('.bot').textContent="...";
   
   
    setTimeout(() => {
        const player = document.querySelector('.player').textContent=pilihanP;
        const bot = document.querySelector('.bot').textContent=pilihanB;
    }, 1500);
    
    // player
    if(pilihanP == "🗿" && pilihanB =="✂️"){
        setTimeout(() => {
            const hasil = document.querySelector('h3').textContent="Player Menang";
            skorerp.skorPlayer(1);
            document.querySelector(".players").textContent= skorerp.skorp;

        }, 1900);
    }else if(pilihanP == "📃" && pilihanB =="🗿"){
        setTimeout(() => {
            const hasil = document.querySelector('h3').textContent="Player Menang";
            skorerp.skorPlayer(1);
             document.querySelector(".players").textContent= skorerp.skorp;


        }, 1900);
    }else if(pilihanP == "✂️" && pilihanB =="📃"){
        setTimeout(() => {
            const hasil = document.querySelector('h3').textContent="Player Menang";
            skorerp.skorPlayer(1);
            document.querySelector(".players").textContent= skorerp.skorp;
        }, 1900);
    } 
    // bot
    else if(pilihanB == "🗿" && pilihanP =="✂️"){
        setTimeout(() => {
            const hasil = document.querySelector('h3').innerHTML = '<span class="botspan">Bot Menang</span>';
            skorerb.skorBot(1);
            document.querySelector(".bots").textContent= skorerb.skorb;

        }, 1900);
    }else if(pilihanB == "📃" && pilihanP =="🗿"){
        setTimeout(() => {
            const hasil = document.querySelector('h3').innerHTML = '<span class="botspan">Bot Menang</span>';
            skorerb.skorBot(1);
            document.querySelector(".bots").textContent= skorerb.skorb;
        }, 1900);
    }else if(pilihanB == "✂️" && pilihanP =="📃"){
        setTimeout(() => {
            const hasil = document.querySelector('h3').innerHTML = '<span class="botspan">Bot Menang</span>';
            skorerb.skorBot(1);
            document.querySelector(".bots").textContent= skorerb.skorb;
        }, 1900);
     }else{
        setTimeout(() => {
            const hasil = document.querySelector('h3').innerHTML="<b>D R A W<b>";
        }, 1900);
     }

     
     
}

function Skor (skor){
    this.skorp = skor;
    this.skorb = skor;

    this.skorPlayer = function(cek){
    this.skorp += cek;
    }

    this.skorBot = function(cek){
        this.skorb += cek;
    }
}
var skorerp = new Skor (0);
var skorerb = new Skor (0);



batu.addEventListener("click", function (){
    const option = ["🗿", "✂️","📃","✂️","📃","🗿"];
    const bot = option[Math.floor(Math.random() * option.length)];
    const hasil = document.querySelector('h3').textContent="";
    suwit("🗿",bot);
})
gunting.addEventListener("click", function (){
    const option = ["🗿", "✂️","📃","✂️","📃","🗿"];
    const bot = option[Math.floor(Math.random() * option.length)];
    const hasil = document.querySelector('h3').textContent="";
    suwit("✂️",bot);
})
kertas.addEventListener("click", function (){
    const option = ["🗿","✂️","📃","✂️","📃","🗿"];
    const bot = option[Math.floor(Math.random() * option.length)];
    const hasil = document.querySelector('h3').textContent="";
    suwit("📃",bot);
});

document.querySelector(".back").addEventListener("click",function(){
    location.href='index.html';
  })

 

  function resetSkor() {
    skorerp.skorp = 0;
    skorerb.skorb = 0;
    document.querySelector(".players").textContent = skorerp.skorp;
    document.querySelector(".bots").textContent = skorerb.skorb;
    document.querySelector('h3').textContent="";
    document.querySelector('.player').textContent="";
    document.querySelector('.bot').textContent="";
}
document.querySelector(".tombolReset").addEventListener("click",function(){
    resetSkor();
})