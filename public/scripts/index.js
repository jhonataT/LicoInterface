const checked = (id) => {
    let classes = id.className.split(' ');
    classes[1] ? id.classList.remove(classes[1]) : id.classList.add("checked"); 
}

const validate = (link) => {
    const PREFIX = "https://chat.whatsapp.com/";
    if(!link.linkWpp.value.startsWith(PREFIX)){
        link.classList.add('invalid');
        link.value = '';
        link.placeholder = 'LINK INVÁLIDO, TENTE NOVAMENTE!';
        return false;
    }
    return true;
}