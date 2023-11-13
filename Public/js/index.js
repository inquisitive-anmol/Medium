let likeBtns = document.querySelectorAll('.fa-thumbs-up');
let bookmarkBtns = document.querySelectorAll('.saved');
console.log(bookmarkBtns)
// console.log(likeBtns)

function fun(){
  window.location.reload();
}

async function likeBlog(btn , blogID){


  let response = await axios({
    method: 'post',
    url: `/blogs/${blogID}/like`,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
  });

 


  if(btn.classList.contains('fa-regular'))
  {
    btn.classList.remove('fa-regular');
    btn.classList.add('fa-solid')
  }
  else
  {
    btn.classList.remove('fa-solid');
    btn.classList.add('fa-regular')
  }

  fun();
  

}


async function addBookmark(btn , blogID){
  let response = await axios({
    method: 'post',
    url: `/user/${blogID}/save`,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
  });

  console.log('in function')
  if(btn.classList.contains('fa-regular'))
  {
    btn.classList.remove('fa-regular');
    btn.classList.add('fa-solid')
    console.log('1')
  }
  else
  {
    btn.classList.remove('fa-solid');
    btn.classList.add('fa-regular')
    console.log('2')
  }

  // fun();

}



for(let item of likeBtns)
{
    item.addEventListener('click', () => {
      // console.log("Event laga!")
      let id = item.getAttribute('blogID');
      likeBlog(item, id);
    })
}

for(let item of bookmarkBtns)
{
      item.addEventListener('click', () => {
      let id = item.getAttribute('blogID');
      addBookmark(item, id);
    })
}

