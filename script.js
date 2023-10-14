let data = [
    {
        id: 1,
        img: './img4.jpg',
        item: 'burger',
        desc: "Lorem Ipsum has been the industrys standard dummy text"
    },
    {
        id: 2,
        img: './img2.jpg',
        item: 'pizza',
        desc: "Lorem Ipsum has been the industrys standard dummy text"
    },
    {
        id: 3,
        img: './img3.jpg',
        item: 'pasta',
        desc: "Lorem Ipsum has been the industrys standard dummy text"
    },
]

// all items card

let container = document.getElementById('item-container')

data.map((el, ind) => {
    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    let div = document.createElement('div')
    div.setAttribute('class', 'img-container')
    let img = document.createElement('img')
    img.setAttribute('src', el.img)
    let item = document.createElement('h4')
    item.textContent = el.item
    let desc = document.createElement('p')
    desc.textContent = el.desc
    div.append(img)
    card.append(div, item, desc)
    container.append(card)
})

