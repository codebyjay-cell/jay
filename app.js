Array.from(document.getElementByTagName('input')).forEach((e , i)=>{
    e.addEventListener('keyup',(e1)=>{
       if (e.value.length > 0) {
           document.getElementsByClassName('bi-caret-down-fill')[i].Style.transform ="rotate(180deg)";
       } else {
           document.getElementsByClassName('bi-caret-down-fill')[i].Style.transform ="rotate(0deg)";
       }
    
     })
})


    
