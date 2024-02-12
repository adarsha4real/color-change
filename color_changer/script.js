const buttons =document.querySelectorAll('.button');
const body =document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('mouseenter',function(e){
        if (e.target.id==="grey")
        {
            body.style.backgroundColor=e.target.id;
        }
    })
     button.addEventListener('mouseleave',function(e){
        if (e.target.id=="grey")
        {
            body.style.backgroundColor='white';
        }
    })
     button.addEventListener('mouseenter',function(e){
        if (e.target.id==="white")
        {
            body.style.backgroundColor=e.target.id;
        }
    })


     button.addEventListener('mouseleave',function(e){
        if (e.target.id=="white")
        {
            body.style.backgroundColor='white';
        }
    })
     button.addEventListener('mouseenter',function(e){
        if (e.target.id==="blue")
        {
            body.style.backgroundColor=e.target.id;
        }
    })
     button.addEventListener('mouseleave',function(e){
        if (e.target.id=="blue")
        {
            body.style.backgroundColor='white';
        }
    })
     button.addEventListener('mouseenter',function(e){
        if (e.target.id==="yellow")
        {
            body.style.backgroundColor=e.target.id;
        }
    })
     button.addEventListener('mouseleave',function(e){
        if (e.target.id=="yellow")
        {
            body.style.backgroundColor='white';
        }
    })
     button.addEventListener('mouseenter',function(e){
        if (e.target.id==="red")
        {
            body.style.backgroundColor=e.target.id;
        }
    })
     button.addEventListener('mouseleave',function(e){
        if (e.target.id=="red")
        {
            body.style.backgroundColor='white';
        }
    })
})

