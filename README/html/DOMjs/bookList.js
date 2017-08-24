const checkAll = document.getElementById('checkbox');
// checkbox 상태 체크
checkAll.addEventListener('change', (e) => {
  [...document.querySelectorAll('tbody input[type=checkbox]')].map(el => {
    el.checked = e.target.checked;   
  });
});

//-------------------------------------------------------------------------------------------------------------------------------//

let book = [
  { id: 1, title: 'HTML5', author: 'Lee', price: 2000 },
  { id: 2, title: 'CSS3', author: 'Kim', price: 3000 },
  { id: 3, title: 'JavaScript', author: 'Park', price: 5000 }
];

// booklist를 for문을 돌려서 table에 넣어 주어야함
const table = document.getElementById('list');

for(let i = 0; i < book.length; i++) {
  // bookTable에 ${}값안에 배열을 순환시켜준다.
  let bookTable = `<tr>
    <td><input type="checkbox" id="${book[i].id}"></td>
    <th>${book[i].id}</th>
    <td>${book[i].title}</td>
    <td>${book[i].author}</td>
    <td>${book[i].price}</td>
  </tr>`;
  // table에 tbody부분에 위의 booktable을 넣어
  table.innerHTML += bookTable;
}

//-------------------------------------------------------------------------------------------------------------------------------//

// Add Book 버튼(기능: Add버튼을 누르면 cancel버튼과 textbox 3개가 나와야함
const addBtn = document.getElementById('add');
let cenBtn = document.querySelector('#cancel');
let text = document.querySelector('#text');

// add버튼을 누르면 버튼과 텍스트를 만드는 코드
addBtn.addEventListener('click', () => {
  if(text.style.display === 'none'){
    cenBtn.style.display = 'inline-block';
    text.style.display = 'block';
  } else if(text.style.display === 'block'){
    // 여기부터 추가 시켜줘야한다.
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let price = document.getElementById('price').value;
    
    const BookAdd= {
      id: book.length+1,
      title: title,
      author: author,
      price: price
    };
    book.push(BookAdd);
    console.log(BookAdd);
    let bookTable = `<tr>
      <td><input type="checkbox" id="${BookAdd.id}"></td>
      <th>${BookAdd.id}</th>
      <td>${BookAdd.title}</td>
      <td>${BookAdd.author}</td>
      <td>${BookAdd.price}</td>
    </tr>`;
    // table에 tbody부분에 위의 booktable을 넣어
    table.innerHTML += bookTable;

    cenBtn.style.display = 'none';
    text.style.display = 'none';
  }
});

// cancel 버튼을 누르면 버튼과 텍스트가 사라지는 코드
cenBtn.addEventListener('click', () => {
  cenBtn.style.display = 'none';
  text.style.display = 'none';
});
//-------------------------------------------------------------------------------------------------------------------------------//

// delate book button 작동시키기
// check가 된 이벤트를 잡아서 삭제시킨다.
// const delBtn = document.getElementById('delate');
// delBtn.addEventListener('click', (e) => {
//   // check가 된 checkbox를 선택하여 check된 배열의 id를 가져온다.
//   const checkIdArr = [...document.querySelectorAll('tbody input[type=checkbox]:checked')].map(el => {el.id});

//   // check된 배열인 checkIdArr에 걸러진 요소를 삭제시킨다.
//   checkIdArr.map(checkId => {
//     book = book.filter(

//   })
// });
