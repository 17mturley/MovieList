
const message = document.querySelector('#message');


function deleteMovie(event){
    event.target.parentNode.remove();
    const movieItem = event.target.parentNode;
    const movieTitle = movieItem.querySelector('span').textContent;
    message.textContent =  `${movieTitle} deleted!`;
    revealMessage();
}

function crossOffMovie(event){
    event.target.classList.toggle('checked');
    const movieItem = event.target.parentNode;
    const movieTitle = movieItem.querySelector('span').textContent;
    if(event.target.classList.contains('checked')){
        message.textContent = `${movieTitle} watched!`;
    }else{
        message.textContent = `${movieTitle} added back!`
    }
    revealMessage();
}

function revealMessage(){
    message.classList.remove('hide');
    setTimeout(function(){
        message.classList.add('hide');
    }, 1000)
}

function addMovie(event){
    event.preventDefault();
    const inputField = document.querySelector('input');
    const movieTitleText = inputField.value;
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = movieTitleText;
    movieTitle.addEventListener('click', crossOffMovie)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(movieTitle);
    movie.appendChild(deleteBtn)
    const movieList = document.querySelector('ul');
    movieList.appendChild(movie);
    inputField.value = '';
}

const form = document.querySelector('form');
form.addEventListener('submit', addMovie);

