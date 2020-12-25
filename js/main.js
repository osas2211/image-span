(function onclick (){    
    const bgChange = document.querySelectorAll('.grid div');
    for (let i=0; i < bgChange.length; i++){
        bgChange[i].addEventListener('click', () => {
            if (bgChange[i].className == 'bg1'){
                bgChange[i].classList.replace('bg1','bg2');
            }
            else{
                bgChange[i].classList.replace('bg2','bg1');
            }            
        });
    }
})();



