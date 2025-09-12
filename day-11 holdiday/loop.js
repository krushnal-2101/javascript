
let arr = ["BMW", "audi", "suzuki", "tata", "mahindra"]
let price = [230006, 654780, 67895, 9846546, 456780]

let row = document.querySelector(".row")


for(let i=0; i<arr.length; i++)
{
    row.innerHTML +=
   ` <div class="col-3">
             <div class="card" style="width: 18rem;">
                <img src="https://img.autocarindia.com/ExtraImages/20241205062334_20240606032223_Creta%20showroom%20shot%20_1_.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    </div>`
}