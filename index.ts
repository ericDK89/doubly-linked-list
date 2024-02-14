type Node<T> = {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
};

export class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    length = 0;
    this.head = undefined;
  }

  prepend(item: T) {
    const node = { value: item } as Node<T>;

    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number) {
    this.length++;

    if (idx > this.length) {
      throw new Error("Index out of range");
    } else if (idx === 0) {
      this.prepend(item);
    } else if (idx === this.length) {
      this.append(item);
    }

    let current = this.head; //just to get the first item and start the loop

    for (let i = 0; current && i < idx; i++) {
      current = current.next; //why??? what is this doing?
    }

    current = current as Node<T>; //why??? what is this doing?
    const node = { value: item } as Node<T>;

    node.next = current; //what
    node.prev = current.prev; //what
    current.prev = node; //what

    if (current.prev) current.prev.next = node;
  }
}
