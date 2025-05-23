const buttons = document.querySelectorAll('.button');
const body =  document.querySelector("body");

buttons.forEach(function(button){
    //event
    button.addEventListener('click', function(e){
     //console.log(e);
     //console.log(e.target);
     if(e.target.id === 'grey'){
        //body.style.backgroundColor ='grey';
        body.style.backgroundColor = e.target.id; //both line are same
     }
      if(e.target.id === 'white'){
        
        body.style.backgroundColor = e.target.id ;
     }
      if(e.target.id === 'blue'){
        
        body.style.backgroundColor = e.target.id ;
     }
      if(e.target.id === 'yellow'){
        //body.style.backgroundColor ='yellow';
        body.style.backgroundColor = e.target.id ;//both line are same
     }
    });
});