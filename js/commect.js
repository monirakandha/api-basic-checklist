const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
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
        
        `;
        commentElement.appendChild(div);
    })

    // for (const coment of comments){
    //     const div = document.createElement('div')
    //     div.classList.add('commentshow');
    //     div.innerHTML = `
    //     <h2>Name : ${coment.name}</h2>
    //     <h3>Email: ${coment.email}</h3>
    //     <h4>Commet: ${coment.body}</h4>
        
    //     `;
        
    }

