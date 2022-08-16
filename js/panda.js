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

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 

const handlerbuttom =document.getElementById('handler-buttom').addEventListener('click',function(){
    const clickhendler = document.getElementById('handler-buttom')
    console.log(clickhendler.style.backgroundColor='yellow',
                clickhendler.style.color='black',
    );

})

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
const buyNowButton = document.getElementsByClassName('buy-Now');
for(const buyButton of buyNowButton){
    buyButton.addEventListener('click',function(){
      event.target.parentNode.removeChild(event.target)  
    })
}

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
document.getElementById('delete_button').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if(text === 'Email'){
        deleteButton.removeAttribute('disabled')
    }
    else{
        deleteButton.setAttribute('disabled')
    }
})
document.getElementById('btn-delete').addEventListener('click',function(){
    const secret = document.getElementById('btn-delete')
    secret.style.display='none';
})

