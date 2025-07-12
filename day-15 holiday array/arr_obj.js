let data = [
    {
        id:1,
        name:"krushnal",
        cource:"FSD",
        branch:"RWN1",
        subject:["html","css","js"]
    },
    {
        id:2,
        name:"mit",
        cource:"FSD",
        branch:"RWN1",
        subject:["html","css","jquery"]
    },
    {
        id:3,
        name:"jay",
        cource:"FSD",
        branch:"RWN1",
        subject:["html","javascrpit","boolstrap"]
    },
    {
        id:4,
        name:"amit",
        cource:"graphic design",
        branch:"RWN1",
        subject:["photoshop","edit"]
    },
    {
        id:5,
        name:"tirth",
        cource:"ui/ux",
        branch:"RWN1",
        subject:["ds","canva","figma"]
    },
    {
        id:1,
        name:"kartik",
        cource:"ui/ux",
        branch:"RWN1",
        subject:["master","shop","canva"]
    },
]


// let ind = data.findIndex((ele)=> ele.subject[0] == "figma")
// console.log(ind)


// let every = data.findevery((ele)=> ele.branch == "RWN1")
// console.log(every)   


// let some = data.findsome((ele)=> ele.cource[0] == "ui/ux")
// console.log(some)

// let newData = data.map(function(ele)
// {
//     if(ele.cource == "FSD"){
//         ele.subject.push("node")
//     }
//     return ele
// })
// console.log(newData)

// let filterArray = data.filter((ele) => ele.cource == "FSD")

let filterArray = data.filter((ele) => ele.subject.includes("js") )

console.log(filterArray)