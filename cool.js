
//makes a node
function Node(data) {
    //node is = to data passed in
    this.data = data;
    // there is nothing after the last node mode
    this.next = null;
}

function LinkedList() {
  //keeps track of the linkedlist and it starts at 0
    this.length = 0;
    //the last head is = to null
    this.head = null;
}
//makes a new node
LinkedList.prototype.add = function(value) {

    var node = new Node(value);
    //keeps track of the first node or the head
    var currentNode = this.head;
    //keeps track of the length
    this.length++;

    if (!currentNode) {
        this.head = node;
        return;
    }

    // TODO change while loop to recursion
    // while (currentNode.next) {
    //     currentNode = currentNode.next;
    // }
    curentNode = findLastNode(curentNode);

    currentNode.next = node;
};
function findLastNode(node){
  // if we are at the end or if next is null return
  //this is to check the state for the recursion
  if(!node.next){
    return node ;
  }
  // call the function findLastNode and pass in next so it will go to the next node
  return findLastNode(node.next);
}

var ll = new LinkedList();
ll.add(11);
console.log(ll);
