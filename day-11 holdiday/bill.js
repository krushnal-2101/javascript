let tea = document.getElementById("tea")
let coffee = document.getElementById("coffee")
let boost = document.getElementById("boost")
let water = document.getElementById("water")
let mojito = document.getElementById("mojito")
let change = document.getElementById("change")
let bill = document.getElementById("bill")

function createbill()
{
    bill.innerHTML = 
        `  <tr>
            <th>NO</th>
            <th>ITEMS</th>
            <th>PRICE</th>
            <th>QTN</th>
            <th>TOTAL</th>
         </tr>
         <tr>
            <td>NO</td>
            <td>TEA</td>
            <td>20₹</td>   
            <td>${tea.value}</td>
            <td>${tea.value * 20}/-</td>
         </tr>           
         <tr>
            <td>NO</td>
            <td>OOFFEE</td>
            <td>30₹</td>
            <td>${coffee.value}</td>
            <td>${coffee.value * 30}/-</td>
         </tr>           
         <tr>
            <td>NO</td>
            <td>BOOST</td>
            <td>40₹</td>
            <td>${boost.value}</td>
            <td>${boost.value * 40}/-</td>
         </tr>           
         <tr>
            <td>NO</td>
            <td>WATER</td>
            <td>20₹</td>
            <td>${water.value}</td>
            <td>${water.value * 20}/-</td>
         </tr>           
         <tr>
            <td>NO</td>
            <td>MOJITO</td>
            <td>60₹</td>
            <td>${mojito.value}</td>
            <td>${mojito.value * 60}/-</td>
         </tr> 
         <tr>
            <th>-</th>
            <th>ITEMS</th>
            <th>TOTAL QTN:</th>
            <th>${tea.value+coffee.value+boost.value+water.value+mojito.value}</th>
            <th>${tea.value*20+coffee.value*30+boost.value*40+water.value*20+mojito.value*60}</th>
         </tr>      
        `       
}