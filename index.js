
const message = document.querySelector('#message');


function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent = 'Movie Deleted!';
}

function crossOffMovie(event){
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked')){
        message.textContent = 'Movie Watched!';
    }else{
        message.textContent = 'Movie Unwatched!'
    }
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

