//html
var footerContainer = document.querySelector(".footer-bottom")
var sliderBox = document.createElement("div")
sliderBox.classList.add("slider-box")
footerContainer.insertBefore(sliderBox, document.querySelector(".footer-bottom-icons-country"))

var heading = document.createElement("h3")
heading.textContent = "YOU MIGHT ALSO LIKE"
heading.classList.add("heading")
sliderBox.append(heading)

var sliderArea = document.createElement("div")
sliderArea.classList.add("slider-area")
sliderBox.append(sliderArea)

var buttonPrevious = document.createElement("button")
buttonPrevious.classList.add("button-previous")
buttonPrevious.textContent = "<"
sliderArea.append(buttonPrevious)

var sliderProducts = document.createElement("div")
sliderProducts.classList.add("slider-products")
sliderArea.append(sliderProducts)

var buttonNext = document.createElement("button")
buttonNext.classList.add("button-next")
buttonNext.textContent = ">"
sliderArea.append(buttonNext)

//css
sliderBox.style.width = "75%"
sliderBox.style.margin = "0 auto"
sliderBox.style.marginBottom = "10px"

heading.style.fontWeight = "bold"
heading.style.fontSize = "16px"
heading.style.textAlign = "left"
heading.style.marginBottom = "20px"

sliderArea.style.width = "100%"
sliderArea.style.display = "flex"
sliderArea.style.alignItems = "center"
sliderArea.style.justifyContent = "space-between"
sliderArea.style.gap = "20px"

buttonPrevious.style.outline = "none"
buttonPrevious.style.border = "none"
buttonPrevious.style.cursor = "pointer"
buttonPrevious.style.background = "transparent"
buttonPrevious.style.fontSize = "24px"

buttonNext.style.outline = "none"
buttonNext.style.border = "none"
buttonNext.style.cursor = "pointer"
buttonNext.style.background = "transparent"
buttonNext.style.fontSize = "24px"

sliderProducts.style.width = "90%"
sliderProducts.style.height = "100%"
sliderProducts.style.marginBottom = "20px"
sliderProducts.style.display = "flex"
sliderProducts.style.alignItems = "center"
sliderProducts.style.justifyContent = "space-between"
sliderProducts.style.overflow = "hidden"

//js
var url = "https://opt-interview-projects.onrender.com/smart-recommender"

//Calling API
fetch(url)
.then(response => response.json())
.then(data => {
    //html inside of js
    for(let i = 0; i < data.length; i++) {
        //placing all the products
        var product = document.createElement("a")
        product.setAttribute("href", `${data[i]["url"]}`)
        product.setAttribute("target", "_blank")
        product.classList.add("product")
        sliderProducts.append(product)

        var productImage = document.createElement("img")
        productImage.classList.add("product-image")
        productImage.setAttribute("src", `${data[i]["img"]}`)
        product.append(productImage)

        var productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
        product.append(productInfo)

        var productName = document.createElement("p")
        productName.classList.add("product-name")
        productName.textContent = `${data[i]["name"]}`
        productInfo.append(productName)

        var productPrice = document.createElement("p")
        productPrice.classList.add("product-price")
        productPrice.textContent = `${data[i]["price"] ? data[i]["price"] : 199.99} TL`
        productInfo.append(productPrice)

        product.style.width = "19%"
        product.style.height = "100%"
        product.style.display = "inline"
        product.style.cursor = "pointer"
        product.style.margin = "0 5%"
        product.style.transition = "transform 0.5s ease"

        productImage.style.width = "100px"
        productImage.style.margin = "0 auto"

        productInfo.style.maxWidth = "150px"

        productName.style.marginTop = "10px"
        productName.style.textDecoration = "none"
        productName.style.color = "black"
        productName.style.textAlign = "left"

        productPrice.style.color = "red"
    }
})

//Following how many times customer have clicked on buttons (used for slider boundaries)
var clickCount = 0

//Code that works when user clicks the left button
buttonPrevious.addEventListener("click", () => {
    if(clickCount !== 0) {
        clickCount--
        for(let i = 0; i < document.querySelectorAll(".product").length; i++) {
            document.querySelectorAll(".product")[i].style.transform = `translateX(${clickCount * -200}px)`
        }
    }
})

//Code that works when user clicks the right button
buttonNext.addEventListener("click", () => {
    if(clickCount !== (sliderProducts.childElementCount - sliderProducts.childElementCount / 2)) {
        clickCount++
        for(let i = 0; i < document.querySelectorAll(".product").length; i++) {
            document.querySelectorAll(".product")[i].style.transform = `translateX(${clickCount * -200}px)`
        }
    }
})