import "./style/global.css"

export default function setBodyColor(color) {
    document.documentElement.style.setProperty('--bodyColor', color)
}