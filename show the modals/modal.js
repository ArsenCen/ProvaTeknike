'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal =  document.querySelectorAll('.show-modal');
console.log(btnOpenModal)
//ose nje menyre tjeter per te bere qe te mbyllet modali tek X ose 
    //kur te klikosh jasht modalit tek blur do te jete

const mbyllModalin = function (){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')}

for( let i=0; i<= btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', function(){
        console.log('button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

        btnCloseModal.addEventListener('click', function(){
            modal.classList.add('hidden')
            overlay.classList.add('hidden')
        })

        overlay.addEventListener('click', mbyllModalin)
        
        document.addEventListener('keydown', function(e){
            console.log(e.key)
            if(e.key === 'Escape'){
                //nese nuk eshte e fshehur
                if(!modal.classList.contains('hidden')){
                    mbyllModalin();

                }}
        })
        
    
    })

   
    
    

