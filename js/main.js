/* CONDITIONING USING ITERNERY OPERATORS WITHIN AN ANNONYMOUS FOUNCTION */

var onclick = function (selector){
    for (let i = 0; i < selector.length; i++){
        selector[i].addEventListener('click', () => {
            (selector[i].className == 'bg1') ? selector[i].classList.replace('bg1','bg2')
                :selector[i].classList.replace('bg2','bg1');
        });
    }
};
const bgChange = document.querySelectorAll('.grid div');
onclick(bgChange)



/* USING NORMAL CONDTIONING WITHIN A CLOSURE */
/*
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
*/


