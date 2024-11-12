let data = []; 
    const products = [
        { price: 100, nbs: 0, sum: 0, likeStatus: 0, id: 1 },
        { price: 20, nbs: 0, sum: 0, likeStatus: 0, id: 2 },
        { price: 50, nbs: 0, sum: 0, likeStatus: 0, id: 3 }
        ];
    let totalPriceElement = document.getElementById("total");
    function updateTotalPrice() {
        let total = products.reduce((acc, product) => acc + product.sum, 0);
        totalPriceElement.innerHTML = `${total} $`;
        }
    products.forEach((product) => {
        let plus = document.getElementById(`plus-${product.id}`);
        let minus = document.getElementById(`minus-${product.id}`);
        let move = document.getElementById(`move-${product.id}`);
        let like = document.getElementById(`like-${product.id}`);
        let demo = document.getElementById(`demo-${product.id}`);
        let unitPrice = document.querySelector(`#price-${product.id}`);
        plus.addEventListener('click', plus1)
        minus.addEventListener('click', minus1)
        move.addEventListener('click', move1)
        like.addEventListener('click' , like1 )


        function plus1() {
            product.nbs++;
            product.sum = product.nbs * product.price;
            demo.innerHTML = product.nbs;
            updateTotalPrice();
        }
        
            function minus1(){
            if (product.nbs > 0) {
            product.nbs--;
            product.sum = product.nbs * product.price;
            demo.innerHTML = product.nbs;
            updateTotalPrice();}
        }
        
        function move1(){
            product.nbs = 0;
            product.sum = 0;
            demo.innerHTML = product.nbs;
            updateTotalPrice();
        }
        
        function like1(){
            product.likeStatus++;
            if (product.likeStatus % 2 === 0) {
                like.style.color = "black";
            }
            else {
                like.style.color = "red";}
            }
    });