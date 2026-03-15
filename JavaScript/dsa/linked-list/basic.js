class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addFirst(val) {
    const newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  addLast(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = newNode;
    }

    this.size++;
  }

  insertAtIndex(index, val) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.addFirst(val);
      return;
    }

    const newNode = new Node(val);
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;

    this.size++;
  }

  print() {
    let curr = this.head;
    let result = "";

    while (curr) {
      result += curr.val + " -> ";
      curr = curr.next;
    }

    console.log(result + "null");
  }
}

const list = new LinkedList();
list.addFirst(12);
list.addFirst(13);
list.addFirst(14);
list.addFirst(15);
list.addFirst(16);
list.print();
