// const generateBtn = document.querySelector('#generate-button')
// const form = document.querySelector('form')
const button = document.getElementById('generate-btn')

const getRandomSpell = () => {
    try {
      axios.get('https://hp-api.onrender.com/api/spells')
      .then(response => {
        const spells = response.data
        const randomIndex = Math.floor(Math.random() * spells.length)
        const randomSpell = spells[randomIndex]
        spellDisplay(randomSpell)
      })
    } catch (error) {
      console.error('MAXIMA BOMBARDA', error)
    }
  }
button.addEventListener('click', getRandomSpell)


/////////////////////////////////////////////////////////////////////////////////////////////////////
const nameElement = document.querySelector('nameElement')
const descElement = document.querySelector('descElement')

const spellDisplay = (spells) => {
    const container = document.getElementById('spell')
    console.log(spells)
    const card = document.createElement('div')
    card.classList.add('spell-card')

    const nameElement = document.createElement('h1')
    nameElement.classList.add('h1-title')
    nameElement.textContent = `${spells.name}`
    card.appendChild(nameElement)

    const descElement = document.createElement('h2')
    descElement.classList.add('h2-title')
    descElement.textContent = `${spells.description}`
    card.appendChild(descElement)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('dlt-btn')
    deleteBtn.textContent = `X`
    card.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', evt => {
      evt.target.parentNode.remove()
    })

    container.appendChild(card)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// const scrollToTopButton = document.getElementById("scroll-to-top")
// window.addEventListener("scroll", function() {
//   if (window.scrollY > 0) {
//     scrollToTopButton.style.display = "block"
//   } else {
//     scrollToTopButton.style.display = "none"
//   }
// })

// scrollToTopButton.addEventListener("click", function() {
//   window.scrollTo(0, 0)
// })