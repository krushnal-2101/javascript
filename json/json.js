let data = [{"id":1,"first_name":"Kelley","email":"kromke0@oracle.com","phone":"4219983740"},
    {"id":2,"first_name":"Trisha","email":"tjeacock1@posterous.com","phone":"1768800798"},
    {"id":3,"first_name":"Chevalier","email":"cdornin2@indiatimes.com","phone":"5936829449"},
    {"id":4,"first_name":"Lani","email":"lbidgood3@hhs.gov","phone":"5568221305"},
    {"id":5,"first_name":"Reginauld","email":"rduggan4@dion.ne.jp","phone":"6491138357"},
    {"id":6,"first_name":"Filippo","email":"fseaborne5@google.ca","phone":"4819740531"},
    {"id":7,"first_name":"Tilly","email":"tturgoose6@dagondesign.com","phone":"7615025300"},
    {"id":8,"first_name":"Gearard","email":"ggaywood7@businessweek.com","phone":"4184062865"},
    {"id":9,"first_name":"Aldon","email":"akittel8@umn.edu","phone":"4238285831"},
    {"id":10,"first_name":"Curcio","email":"crey9@hibu.com","phone":"4422325463"},
    {"id":11,"first_name":"Rebekah","email":"rricarda@over-blog.com","phone":"2032114387"},
    {"id":12,"first_name":"Abie","email":"asturgessb@feedburner.com","phone":"6388696924"},
    {"id":13,"first_name":"Inga","email":"igawkesc@slashdot.org","phone":"4712545633"},
    {"id":14,"first_name":"Lula","email":"lstenerd@washingtonpost.com","phone":"9728811436"},
    {"id":15,"first_name":"Athene","email":"apoulsene@wisc.edu","phone":"1445467453"},
    {"id":16,"first_name":"Nonie","email":"nbachmannf@home.pl","phone":"1226985146"},
    {"id":17,"first_name":"Myrvyn","email":"mlathburyg@sitemeter.com","phone":"4567498390"},
    {"id":18,"first_name":"Sadie","email":"sbreakspearh@comcast.net","phone":"5518793711"},
    {"id":19,"first_name":"Yoshi","email":"ychalkeri@biblegateway.com","phone":"9367906590"},
    {"id":20,"first_name":"Raf","email":"rastlettj@auda.org.au","phone":"4158730043"},
    {"id":21,"first_name":"Dallas","email":"dhubertk@columbia.edu","phone":"2029428355"},
    {"id":22,"first_name":"Belita","email":"bfevierl@pagesperso-orange.fr","phone":"6603284645"},
    {"id":23,"first_name":"Nonna","email":"nnovakm@ibm.com","phone":"8732369632"},
    {"id":24,"first_name":"Ailene","email":"abrislenn@census.gov","phone":"7354148252"},
    {"id":25,"first_name":"Nan","email":"nlightwingo@nba.com","phone":"4152446542"},
    {"id":26,"first_name":"Sebastien","email":"sdickmanp@wisc.edu","phone":"2791504514"},
    {"id":27,"first_name":"Candi","email":"clanslyq@liveinternet.ru","phone":"6244563676"},
    {"id":28,"first_name":"Ina","email":"ibroadeyr@nymag.com","phone":"8948774470"},
    {"id":29,"first_name":"Jolee","email":"jsapeys@youtube.com","phone":"5289067792"},
    {"id":30,"first_name":"Chance","email":"czealyt@networksolutions.com","phone":"8093840296"},
    {"id":31,"first_name":"Archibold","email":"acooksleyu@gizmodo.com","phone":"6825759365"},
    {"id":32,"first_name":"Nelli","email":"ndibbinv@theglobeandmail.com","phone":"7742010179"},
    {"id":33,"first_name":"Damian","email":"dlobleyw@blog.com","phone":"4586461642"},
    {"id":34,"first_name":"Barney","email":"bheaterx@adobe.com","phone":"6728260249"},
    {"id":35,"first_name":"Tonie","email":"tburrely@blogspot.com","phone":"4292715079"},
    {"id":36,"first_name":"Byrom","email":"bspriggsz@irs.gov","phone":"8106235104"},
    {"id":37,"first_name":"Davin","email":"dkelloway10@vk.com","phone":"9359373247"},
    {"id":38,"first_name":"Jules","email":"jdarch11@slate.com","phone":"9666234746"},
    {"id":39,"first_name":"Marwin","email":"mhext12@merriam-webster.com","phone":"8639866154"},
    {"id":40,"first_name":"Arlinda","email":"apetrulis13@360.cn","phone":"3497525358"},
    {"id":41,"first_name":"Knox","email":"kmccabe14@creativecommons.org","phone":"3496945887"},
    {"id":42,"first_name":"Huntley","email":"hmaleney15@economist.com","phone":"5935315210"},
    {"id":43,"first_name":"Cookie","email":"croswarn16@state.tx.us","phone":"8818056865"},
    {"id":44,"first_name":"Vassily","email":"vsweetland17@delicious.com","phone":"6298625251"},
    {"id":45,"first_name":"Demetrius","email":"deisikowitch18@pagesperso-orange.fr","phone":"5336026434"},
    {"id":46,"first_name":"Carissa","email":"cbenedicto19@slideshare.net","phone":"6722766465"},
    {"id":47,"first_name":"Raychel","email":"rdalwis1a@ucla.edu","phone":"4034165260"},
    {"id":48,"first_name":"Lanie","email":"lmatteo1b@fastcompany.com","phone":"4778294933"},
    {"id":49,"first_name":"Van","email":"vstaddart1c@google.co.jp","phone":"9643608412"},
    {"id":50,"first_name":"Winslow","email":"wvonhagt1d@squidoo.com","phone":"4922697425"},
    { "id": 51, "first_name": 'vishal', "email": 'vishal@gmail.com', "phone": 98976465 }
    ]
    
    
    

    console.log(data)
    data.map((map) => console.log(ele.first_name +" - " + ele.email + " - " + ele.phone ))

    let body = document.querySelector("#tbody")
    let name = document.querySelector("#name")
    let email = document.querySelector("#email")
    let phone = document.querySelector("#phone")
    let form = document.querySelector("#form")
    let total = document.querySelector("#total")

    console.log(tbody)

    form.onsubmit =function(e)
    {
        e.preventDefualt()


        let obj = {
            id: data.length+1 ,
            first_name:name.value,
            email:email.value,
            phone:phone.value
        }

        data.push(obj);

        console.log(obj)

        showData(data)

        name.value="",
        email.value="",
        phone.value=""

    }

    function showData(newdata)
    {
        newData.map(function(ele){
            let newTr = 
            <tr>
                <td>${ele.id}</td>
                <td>${ele.name}</td>
                <td>${ele.email}</td>
                <td>${ele.phone}</td>
            </tr>
            tbody.innerHTML += Newtr;
        })

        total.innerText = newData.length
    }

    showData(data)