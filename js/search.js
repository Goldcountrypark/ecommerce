//? search-modal da ürüne tıklandığında tıklanan ürüne gidecek 

function productRoute() {

    //? serch modal ürünlerin .search-results .result-item içindeki 
    // ? a taglarından id lerini alıyoruz   
    const resultItemDOM = document.querySelectorAll(".search-results .result-item");
     //? serch modal ürünlerin id lerini foreach ile listeliyoruz
    resultItemDOM.forEach((item) => {
        item.addEventListener("click", (e) => {
            // listelenen ürünlere tıklandığında 
            const id = item.dataset.id;
        //? localStorage yazdırıyoruz   
                 if(id){ 
                  localStorage.setItem("productId",JSON.stringify(id));
                  //? single-product.html ye yönlendiriyoruz 
                    // window.localhost.href = "single-product.html"; (hatalı yazım)
                    window.location.href = "single-product.html";
                 }
        });

    });



}

//  fonksiyonu export ediyoruz main.js ye data yı main.js den alıyoruz
function searchFunc(products) {
    // arama modalına ulaşıyoruz
    const searchWrapperDOM = document.querySelector(".search-results .results");
    let result = "";
    //? arama modalın içindeki ürünleri sıralıyoruz   
    products.forEach((item) => {

        result += ` 
        <a href="#" class="result-item" data-id=${item.id}>
       <img
         src=${item.img.singleImage}
         alt=${item.name}
         class="search-thumb"
       />
       <div class="search-info">
         <h4>${item.name}</h4>
         <span class="search-sku">SKU: PD0016</span>
         <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
       </div>
       <!-- search-info end -->
     </a>
       `;
    });
    //? arama modalın içindeki ürünleri yazdırıyoruz
    searchWrapperDOM.innerHTML = result;
    productRoute();

// ? search modal içerisindeki search inputa ulaşıyoruz

     const searchInputDOM = document.querySelector(".search-from input");
     let value = "";
     let filtered = [];
        searchInputDOM.addEventListener("input", (e)=>{ 
            value = e.target.value.trim().toLowerCase();
            
            //büyük harfleri küçültüyoruz ve ara boşlukları kaldırıyoruz 
            // value = value.trim().toLowerCase();
            //? arama yapıyoruz 
            filtered = products.filter((item)=>item.name.trim().toLowerCase().includes(value));
            let result = "";
               if(filtered.length > 1){ 
                searchWrapperDOM.style.gridTemplateColumns="1fr 1fr";

                filtered.forEach((item)=>{ 
                    result += ` 
                    <a href="#" class="result-item" data-id=${item.id}>
                   <img
                     src=${item.img.singleImage}
                     alt=${item.name}
                     class="search-thumb"
                   />
                   <div class="search-info">
                     <h4>${item.name}</h4>
                     <span class="search-sku">SKU: PD0016</span>
                     <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
                   </div>
                   <!-- search-info end -->
                 </a>
                   `;
                    
                  });
                searchWrapperDOM.innerHTML = result;
               }else if(filtered.length < 2){ 
                searchWrapperDOM.gridTemplateColumns="1fr";
                   if(filtered.length===0){ 
                    
                    searchWrapperDOM.innerHTML = `
                    <a href="#" class="result-item" style="justify-content:center;">
                    😔Aradığınız Ürün Bulunamadı😔
                    </a>
                    `;
                   }else{ 
                    
                    filtered.forEach((item)=>{ 
                        result += ` 
                        <a href="#" class="result-item" data-id=${item.id}>
                       <img
                         src=${item.img.singleImage}
                         alt=${item.name}
                         class="search-thumb"
                       />
                       <div class="search-info">
                         <h4>${item.name}</h4>
                         <span class="search-sku">SKU: PD0016</span>
                         <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
                       </div>
                       <!-- search-info end -->
                     </a>
                       `;
                        
                      });
                      searchWrapperDOM.innerHTML = result;
                   }
               }
           
              
              productRoute();
        });
   

}



export default searchFunc;
