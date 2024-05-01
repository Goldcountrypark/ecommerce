function tabsFunc() {
    // !tabs içindeki butonlara erişiyoruz üstteki (desc,info,reviews)  
    const btnTabs = document.querySelectorAll(".tab-button");
    // ! tabs içindeki content lere ulaşıpruz (yazıların olduğu)
    const contentDOM = document.querySelectorAll(".content");
    // ! tabs içindeki anasarmalıyana ulaşıyoruz
    const tabsButton = document.querySelector(".tab-list");
    // ? addEventListener ile sarmalayına tıklandığında içindekileri getiriyoruz
    tabsButton.addEventListener("click", function (e) {
        e.preventDefault(); //a ya basıldığında sayfanın oynamasını engeliyoruz
        //? id leri getiriyoruz tıklandğında (desc,info,reviews)   
        const id = e.target.dataset.id;


        if (id) {
            // ? tıklandığında  acive class ların tümünü siliyoruz
            btnTabs.forEach((button) => button.classList.remove("active"));
            // ? tıklandığında oluşan id lerdeki acive class ları atayıruz
            e.target.classList.add("active");
            // ? tıklandığında açılan contenlerinde active class larını siliyoruz

            contentDOM.forEach((content) => content.classList.remove("active"));
            //? single-product.html de tabs contetler verdiğimiz id leri çekiyoruz
            const element = document.getElementById(id); 
                
             element.classList.add("active") ;
            



        }


        

    });




}

export default tabsFunc();