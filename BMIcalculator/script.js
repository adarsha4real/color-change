const form=document.querySelector('form')
form.addEventListener('submit', function(e)
{
    e.preventDefault();

    const H=parseInt(document.querySelector('#height').value)
    const w=parseInt(document.querySelector('#weight').value)
    const results=(document.querySelector('#results'))
    
    
    if(H===" " || H<0 || isNaN(H))
    {
        results.innerHTML=`PLEASE GIVE A VALID HEIGHT`;
        

    }
    else if(w===" " || w<0 || isNaN(w))
    {
        results.innerHTML=`PLEASE GIVE A VALID weight`;

    }
    
    else{
        BMI=(w/((H*H)/10000)).toFixed(2);

        results.innerHTML=`<span> ${BMI} </span>`
    }

});