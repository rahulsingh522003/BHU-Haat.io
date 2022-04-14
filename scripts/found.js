const submit = async ()=>{
    
    const Name = document.getElementById('name').value;
    const foundBy = document.getElementById('foundBy').value;
    const Location = document.getElementById('location').value;
    const contact = document.getElementById('contact').value;
    const imageURL = document.getElementById('imageURL').value;
    const content = document.getElementById('content').value;
    
    const data = {
        name: Name,
        foundBy: foundBy,
        location: Location,
        contact: contact,
        imageURL: imageURL,
        content: content
    };
    
    fetch('https://bhu-haat-api.herokuapp.com/api/lost',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data) 
        })
        .then(response=> response.json())
        .then(json => console.log(json))
        .catch(err=> console.log(err));
}

document.getElementById('submitButton').addEventListener('click', ()=>{
    submit();
});
