function changeColor(id) {
    document.getElementById('image').style.backgroundColor = `${id}`;
    document.getElementById('name').style.color = `${id}`;
    document.getElementById('followers').style.color = `${id}`
    document.getElementById('following').style.color = `${id}`
    document.getElementById('follow').style.backgroundColor = `${id}`
    document.getElementById('message').style.color = `${id}`
    document.getElementById('message').style.borderColor = `${id}`
}
