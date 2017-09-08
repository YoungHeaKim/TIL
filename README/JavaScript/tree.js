function BinarySearchTree(){
  var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;
  
  this.insert = function(key){
    var newNode = new Node(key);
    
    if(node === null){
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };
  
  var insertNode = function(node, newNode){
    // 들어오는 값을 비교를 하고 크면 오른쪽으로 작으면 인쪽으로 
    if(newNode.key < node.key){
      if(node.left === null){
        node.left = newNode;
      } else {
        // null이 아니면 미리 들어가있는 값과 비교를 해준다.
        insertNode(node.left, newNode);
      }
    } else {
      if(node.right === null){
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  var preOrderTraverseNode = function(node, callback){
    if(node !== null){
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  this.preOrderTraverse = function(callback){
    preOrderTraverseNode(root, callback);
  };

  var inOrderTraverseNode = function(node, callback){
    if(node !== null){
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root, callback);
  };
  
  var postOrderTraverseNode = function(node, callback){
    if(node !== null){
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  this.postOrderTraverse = function(callback){
    postOrderTraverseNode(root, callback);
  };

  // 최소값 찾기
  this.min = function(){
    return minNode(root);
  };

  var minNode = function(node){
    if(node){
      // 왼쪽만 보고 가면 가장 작은 값을 찾아온다.
      while(node && node.left !== null){
        node = node.left;
      }

      return node.key;
    }

    return null;
  };

  // 최대값 찾기
  this.max = function(){
    return maxNode(root);
  };

  var maxNode = function(node){
    if(node){
      // 왼쪽만 보고 가면 가장 작은 값을 찾아온다.
      while(node && node.right !== null){
        node = node.right;
      }

      return node.key;
    }

    return null;
  };

  // search는 특별한 값을 찾아준다.
  this.search == function(key){
    return searchNode(root, key);
  };

  var searchNode = function(node, key){
    if(node === null){
      return false;
    }
    
    if(key < node.key) {
      return searchNode(node.left, key);
    } else if(key > node.key) {
      return searchNode(node.right, key);
    } else {
    return true;
    }
  };
}

function printNode(value){
  comsole.log(value);
}