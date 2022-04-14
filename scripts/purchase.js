const showItem = (Item) => {
    const div=document.createElement('div');
    div.classList.add('item');
    const img=document.createElement('img');
    img.src=Item.imageURL;
    img.classList.add('imageContainer');
    div.appendChild(img);
    props = ['name', 'cost', 'contact'];
    props.forEach(element => {
        div.innerHTML+=`<p>${element}: ${Item[element]}<\p>`;
        div.innerHTML+='<br>'
    });
    const container=document.getElementById('container');
    container.appendChild(div);
}

const fetchLostItems = () => {
    fetch('http://bhu-haat-api.herokuapp.com/api/sell')
        .then(response => response.json())
        .then(data => data.map(Item => {
                showItem(Item);
            })
        )
}

fetchLostItems();

const search = (val)=>{
    api='http://bhu-haat-api.herokuapp.com/api/sell';
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
        document.getElementById('searchButton').click();
    }
})