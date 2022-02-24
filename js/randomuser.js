const loadUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data))
}
loadUser();

const displayUser = data =>{
    const users = data.results;
    const userDiv = document.getElementById('userprofile');
    users.forEach(user =>{
        console.log(users);
        const div = document.createElement('div')
        div.classList.add('user-show');
        div.innerHTML = `
   
        <img src="${user.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
          <p class="card-text">${user.email}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Gender :${user.gender}</li>
          <li class="list-group-item">Location:${user.location.city}</li>
          <li class="list-group-item">Age :${user.registered.age}</li>
          <li class="list-group-item">Phone:${user.phone}</li>
          <li class="list-group-item">Phone:${user.registered.date}</li>
        </ul>
        `;
        userDiv.appendChild(div);
    })
}

