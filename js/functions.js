const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Fetch all numbers
function showAll() {
    fetch('db.json')
        .then(res => res.json())
        .then(data => {
            //Sort the Array
            data.sort((a, b) => a.name.localeCompare(b.name))
            //show the list
            showList(data);
        })
        .catch(err => console.log(err))
}
//Fetch the result
function showResult(term) {
    fetch('db.json')
        .then(res => res.json())
        .then(data => {
            //Sort the Array
            data.sort((a, b) => a.name.localeCompare(b.name))
            //search for a char
            let list = data.filter(a => a.name.toLowerCase().startsWith(term.toLowerCase()));
            showList(list);
        })
        .catch(err => console.log(err))
}
//show the list
function showList(list) {
    field.innerHTML = "";
    chars.forEach(char => {
        //search for a char
        let res = list.filter(a => a.name.toLowerCase().startsWith(char.toLowerCase()));
        if (res.length > 0) {
            const collection = document.createElement("div");
            collection.className = "collection with-header";
            collection.innerHTML = `<h4 class="collection-header" style="margin: 0;">${char}</h4>`;
            res.forEach(contact => {
                collection.innerHTML += `<a href="#!" class="collection-item">${contact.name}</a>`;
            });
            field.appendChild(collection);
        }
    })
}