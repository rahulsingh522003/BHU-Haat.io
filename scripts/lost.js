const showItem = (Item) => {
    const div=document.createElement('div');
    div.classList.add('item');
    console.log(Item);
    props = ['name', 'foundBy', 'contact'];
    props.forEach(element => {
        div.innerText+=`${element}: ${Item[element]}\n`;
    });
    const container=document.getElementById('container');
    container.appendChild(div);
}

const fetchLostItems = () => {
    fetch('http://bhu-haat-api.herokuapp.com/api/lost')
        .then(response => response.json())
        .then(data => data.map(Item => {
                showItem(Item);
            })
        )
}

fetchLostItems();

const search = (val)=>{
    api='http://bhu-haat-api.herokuapp.com/api/lost';
    if (val!='') {
        api+=`?name=${val}`
    }
    document.getElementById('container').innerHTML='';
    fetch(api)
    .then(response => response.json())
    .then(data => data.map(Item => {
            showItem(Item);
        }));
}

document.getElementById('searchButton').addEventListener('click', ()=>{
    search(document.getElementById('searchBar').value)
} );

document.addEventListener('keydown', (event)=>{
    if (event.key=='Enter') {
        console.log("Hi");
        document.getElementById('searchButton').click();
    }
})