class Node{
    constructor(data)
    {
        this.data = data;
        this.next = next;
    }
}



class LL{
    constructor()
    {
        this.n1 = new Node()
    }
}


let n1 = new Node(1)
let n2 =  new Node(2)
let n3=  new Node(3)


n1.next = n2;
n2.next = n3;
n3.next = null;
console.log(n1.next.next.data)