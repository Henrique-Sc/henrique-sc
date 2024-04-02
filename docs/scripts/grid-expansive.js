document.querySelectorAll('.wrap-title').forEach(e => {
    e.addEventListener('click', function(){grip_expansive(e)})
})
function grip_expansive(title) {
    var wrap_content = title.parentElement.children[1]
    wrap_content.classList.toggle('ocult')
    title.parentElement.children[0].children[0].classList.toggle('active')
    title.parentElement.classList.toggle('blue')
    // if (wrap_content.classList[1] == 'ocult') {
        //     wrap_content.classList.remove('ocult')
        //     title.parentElement.children[0].children[0].classList.toggle('active')
        //     title.parentElement.classList.toggle()
    // } else {
    //     wrap_content.classList.add('ocult')
    //     title.parentElement.children[0].children[0].classList.toggle('active')
    // }
}