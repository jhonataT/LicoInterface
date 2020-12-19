
const checked = (id) => {
    let classes = id.className.split(' ');
    classes[1] ? id.classList.remove(classes[1]) : id.classList.add("checked"); 
};

const validate = (link) => {
    const PREFIX = "https://chat.whatsapp.com/";
    
    if(!link.linkWpp.value.startsWith(PREFIX)){
        link.linkWpp.classList.add('invalid');
        link.linkWpp.value = '';
        link.linkWpp.placeholder = 'LINK INVÁLIDO, TENTE NOVAMENTE!';
        return false;
    }
    // Verificar quantas classes 'checked' estão ativas:
    const checkedInfo = verifyCheckedClass();
    link.linkWpp.value = link.linkWpp.value.concat(checkedInfo);
    return true;
};

const verifyCheckedClass = () => {
    const checked = document.querySelectorAll('.checked');
    let text = '';
    for(let i = 0; i < checked.length; i++){
        text = text.concat("|", checked[i].id);
    }    
    return text;
};