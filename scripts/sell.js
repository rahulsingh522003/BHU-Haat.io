const submit = async ()=>{
    
    const Name = document.getElementById('name').value;
    const cost = document.getElementById('cost').value;
    const contact = document.getElementById('contact').value;
    const imageURL = document.getElementById('imageURL').value;
    
    const data = {
        name: Name,
        cost: cost,
        contact: contact,
        imageURL: imageURL,
    };
    
    fetch('https://bhu-haat-api.herokuapp.com/api/sell',{
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
