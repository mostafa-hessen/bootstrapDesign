 
           
 


 
// (function($)
// {
//  $("#bt").on('click' ,function(){//$("#divy").css('background-color',"red");
// console.log("fmvmv")});
// } );

// (function ($) {
//     'use strict';
   
  
//     // Featured Work Shuffle
//     $('#bt ').on('click', function () {
     
//       console.log("dmnjfn") ;
//   alert("jgh")
//     });
  
//   });
  

//   $
let active=document.querySelectorAll(' .Featured-Work  .liactive');
let x=document.querySelectorAll('.Featured-Work li');

console.log(x)
console.log(active)
function activeClass(){
    //add active class to btn
    if (active.length>0) 
    {
      active[0].className=active[0].className.replace('active ','')
    }
    this.className+= ' active ';


    var data=this.getAttribute('data-target'),all=document.getElementsByClassName('all');
     
    if(data==="all")
    {
            for(i=0;i<all.length;i++)
            {
                    

                

                    all[i].style.opacity="1" ;

            }
    }
    if(data==="Websites")
    {
            for(i=0;i<all.length;i++)
            {
                 
                if(all[i].classList.contains('Websites') ){ all[i].style.opacity="1" ;}  
                else  {all[i].style.opacity=".1" ;}



            }
    }

            if(data==="Logos")
            {
                for(i=0;i<all.length;i++)
                {
                         
    
                        if(all[i].classList.contains('Logos') ){ all[i].style.opacity="1" ;}  
                        else  {all[i].style.opacity=".2" ;}
        
    
    
                }
            }
   

            if(data==="Graphic")
            {
                for(i=0;i<all.length;i++)
                {
                         
                        if(all[i].classList.contains('Graphic') ){ all[i].style.opacity="1" ;}  
                        else  {all[i].style.opacity=".2" ;}
        
    
    
                }
            }

            if(data==="Marketing")
            {
                for(i=0;i<all.length;i++)
                {
                         
                        if(all[i].classList.contains('Marketing') ){ all[i].style.opacity="1" ;}  
                        else  {all[i].style.opacity=".2" ;}
        
    
    
                }
            }

            if(data==="Videos")
            {
                for(i=0;i<all.length;i++)
                {
                         
                        if(all[i].classList.contains('Videos') ){ all[i].style.opacity="1" ;}  
                        else  {all[i].style.opacity=".2" ;}
        
    
    
                }
            }

        
  }
for(i=0;i<x.length;i++){x[i].addEventListener('click',activeClass)}
