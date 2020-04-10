const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
  window
    .getComputedStyle(element)
    .getPropertyValue(style)


const initialColors = {
  bg: getStyle(html, "--bg"),
  bgBlock: getStyle(html, "--bg-block"),
  colorPrimary: getStyle(html, "--color-primary"),
  colorSecond: getStyle(html, "--color-second"),
  colorThird: getStyle(html, "--color-third"),
  
}

const darkMode = {
  bg: "#ffffff",
  bgBlock: "#dddddd",
  colorPrimary: "#0029F5",
  colorSecond: "#171717",
  colorThird: "#000000",

}

const transformKey = key =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  )
}

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
})