const checked = (id) => {
    let classes = id.className.split(' ');
    classes[1] ? id.classList.remove(classes[1]) : id.classList.add("checked"); 
}
console.log("AAA");