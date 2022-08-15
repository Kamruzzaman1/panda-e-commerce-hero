const hedding=document.getElementsByTagName('h2');
for(const lighthedding of hedding){
    lighthedding.style.color='lightblue';
}
const backPack  = document.querySelectorAll('.back-pack','.card');
for (const back1 of backPack){
    back1.style.backgroundColor='tomato';
};
const cardradius = document.querySelectorAll('.card');
for(card of cardradius){
    card.style.borderRadius='30px'
};