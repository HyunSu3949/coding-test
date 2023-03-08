class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rignt = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  preorder(currentNode) {
    // 전위
    console.log(currentNode.value);
    if (currentNode.left) this.preorder(currentNode.left);
    if (currentNode.right) this.preorder(currentNode.right);
  }

  inorder(currentNode) {
    // 중위
    if (currentNode.left) this.inorder(currentNode.left);
    console.log(currentNode.value);
    if (currentNode.right) this.inorder(currentNode.right);
  }

  postorder(currentNode) {
    // 후위
    if (currentNode.left) this.postorder(currentNode.left);
    if (currentNode.right) this.postorder(currentNode.right);
    console.log(currentNode.value);
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

tree.preorder(tree.root);
console.log("----");
tree.inorder(tree.root);
console.log("----");
tree.postorder(tree.root);
