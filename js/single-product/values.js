function valuesFunc(){ 
   const valuesDOM = document.querySelectorAll(".values-list span");

   valuesDOM.forEach((val)=>{ 

              val.addEventListener("click",function(){ 
                valuesDOM.forEach((item)=>{ 
                    item.classList.remove("active");
                });  
               
                val.classList.add("active");

              });

            // console.log(val);
        });
    

}


export default valuesFunc();