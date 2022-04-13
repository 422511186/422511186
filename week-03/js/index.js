window.onload = () => {
    const on = document.querySelector("#on")
    const off = document.querySelector("#off")
    const nav_list = document.querySelector("#nav-list")
    on.onclick = () => {
        on.style.display = "none"
        off.style.display = "inline-block"
        nav_list.style.display = "block"
        document.body.style.overflow = "hidden"
    }
    off.onclick = () => {
        off.style.display = "none"
        on.style.display = "inline-block"
        nav_list.style.display = "none"
        document.body.style.overflow = "unset"
    }
}