let form = document.forms.create
let input = form.querySelector('input')
let btn = document.querySelector(`.send`)

let arr_todos = []

form.onsubmit = (e) => {
    e.preventDefault()
    if (input.value.trim()) {
        input.style.border = `2px solid green`

        let userData = {
            id: Math.round(Math.random() * 100),
            isdone: false,
            time: `${new Date().getHours()}:${new Date().getMinutes()}`
        }

        let fm = new FormData(form)

        fm.forEach((value, key) => {
            userData[key] = value
        })

        arr_todos.push(userData)

        createitem(arr_todos);
    } else {
        input.style.border = `2px solid red`
    }

}
let bottom_div = document.querySelector(`.bottom`)


function createitem(arr) {
    bottom_div.innerHTML = ""

    for (let props of arr) {
        let item = document.createElement('div')
        let icon = document.createElement(`img`)
        let b_task = document.createElement('b')
        let p_hours = document.createElement('p')

        item.setAttribute('id', props.id)


        b_task.innerHTML = props.task
        p_hours.innerHTML = props.time

        icon.setAttribute(`src`, `x-circle.svg`)

        bottom_div.prepend(item)
        item.prepend(b_task, icon, p_hours)
        item.classList.add('item')
        icon.classList.add(`delete`)
        p_hours.classList.add(`time`)

        let icon_onclick = document.getElementById(props.id)
        icon.onclick = () => {
            if (icon_onclick) {
                item.remove()
                arr_todos.splice(props, +1)
            }
        }
    }
}