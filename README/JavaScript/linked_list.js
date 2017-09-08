function LinkedList() {
  var Node = function(element){
    this.element = element;
    this.next = null;
  };
  var length = 0;
  var head = null;

  this.append = function(element){
    var node = new Node(element),
      current;
    
    if(head === null){
      head = node;
    } else {
      current = head;
      while(current.next){
        current = current.next;
      }

      current.next = node; // 맨 마지막 값에 null대신에 node를 넣어준다.
    }

    length++
  };

  this.removeAt = function(position){
    if(position > -1 && position < length){
      var current = head,
        previous,
        index = 0;

      if(position === 0){
        head = current.next;
      } else {
        while(index++ < postion){
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;    
      
      return current.element;
    } else {
      return null;
    }

    // 이부분은 insert인데 이때는 position과 element(이용하여 index를 찾아라)를 같이 써주어야한다.
    this.insert = function(position, element){
      // head부분을 포함하지 않기 위해 >= 0을 사용하고 append를 포함시키지않기 위해 <=length를 사용한다.  
      if(position >= 0 && position <= length){
        var current = head,
          previous,
          index = 0,
          node = new Node(element);

        if(position === 0){
          node.next = current;
          head = node;
        } else {
          while(index++ < position){
            // linked list를 하나씩 뒤를 미뤄서 자신이 원하는 값에 왔는지 확인하여 준다.
            previous = current;
            current = current.next;
          }

          node.next = current;
          previous.next = node;
        }

        length++;
        return true;
      } else {
        return false;
      }
    }
  };

  this.remove = function(element){
    var index = this.indexof(element);
    return this.remove(index);
  };

  this.indexof = function(element){
    var current = head,
      index = 0;
    
    while(current){
      if(element === current.element){
        return index;
      }
      index++;
      current = current.next;
    }
    
    return -1;  
  };

  this.isEmpty = function(){
    return length === 0;
  };

  this.size = function(){
    return length;
  };

  this.toString = function(){
    var current = head,
      string = '';

    while(current){
      string = current.element;
      current = current.next;
    }

    return string;
  };

  this.getHead = function(){
    return head;
  };
}