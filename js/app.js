const field = document.getElementById('field');
const search = document.getElementById('search');
const contacts = document.getElementsByClassName('collection-item');

// SEARCH FUNCION
search.addEventListener("keyup", e => {
    if (search.value !== "") {
      showResult(search.value);
    } else {
      showAll();
    }
});
showAll();