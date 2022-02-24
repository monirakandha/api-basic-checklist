const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data.slice(0,5)))
};

const displayComment = comments =>{
    console.log(comments)
    const commentElement = document.getElementById('displaycomment');
    comments.forEach (comment =>{
        const div = document.createElement('div')
        div.classList.add('commentshow');
        div.innerHTML = `
        <h2>Name : ${comment.name}</h2>
        <h3>Email: ${comment.email}</h3>
        <h4>Commet: ${comment.body}</h4>
        <button onclick = "loadCommentDetails('${comment.id}')">text</button>
        `;
        commentElement.appendChild(div);
    })     
    }

    const loadCommentDetails = async commentId => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${commentId}`;
        const res = await fetch(url);
        const data = await res.json();
        
    };


    const displayCommentDetails = comment =>{
        const commentDetails = document.getElementById('commentdetails');
        const div = document.createElement('div');
        console.log(div);
        div.classList.add('card');
        div.innerHTML = `
        <div class="card-body">
        <h5 class="card-title">${comment.name}</h5>
        <p class="card-text">${comment.body}</p>
        </div>
        `;
        commentDetails.appendChild(div);
    }
