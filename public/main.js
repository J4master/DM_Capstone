const form = document.querySelector('form')
const input = document.querySelector('input')

const characterContainer = document.querySelector('character-container')

const nameElement = document.querySelector('nameElement')
const imageElement = document.querySelector('imageElement')
const altNameElement = document.querySelector('alternate_namesElement')
const actorElement = document.querySelector('actorElement')
const houseElement = document.querySelector('houseElement')
const ancestryElement = document.querySelector('ancestryElement')
const wandElement = document.querySelector('wandElement')
const patronusElement = document.querySelector('patronusElement')



const clearContainer = () => {
    characterContainer.innerHTML = ''
}

const getCharacter = evt => {
    evt.preventDefault()
    let characterName = input.value

    axios.post(`api/characters`, { name: characterName })
        .then(response => {
            console.log(response.data)

        if (response.data.length > 0) {
            // const character = response.data[0]
            // displayCharacter(character)
            response.data.forEach(character => {
            displayCharacter(character)
          })
        } else {
            console.log(`No character found with name '${characterName}'`);
         }
        })
        .catch(err => {
            console.log('Maxima Bombarda', err)
    })
}

const displayCharacter = (character) => {
    const container = document.getElementById('character-info-container');
    console.log(character)
    const card = document.createElement('div')
    card.classList.add('card')
  

    const nameElement = document.createElement('h1')
    nameElement.classList.add('char-text')
    nameElement.textContent = character.name
    card.appendChild(nameElement)

    if(character.image) {
      const imageElement = document.createElement('img')
      imageElement.classList.add('actor-img')
      imageElement.src = character.image
      card.appendChild(imageElement)
    }


    const altNameElement = document.createElement('h2')
    altNameElement.textContent = `Alternate Names: ${character.alternate_names[0]}`
    card.appendChild(altNameElement)

    const actorElement = document.createElement('p')
    actorElement.textContent = `Actor: ${character.actor}`
    card.appendChild(actorElement)
  
    const houseElement = document.createElement('p')
    houseElement.textContent = `House: ${character.house}`
    card.appendChild(houseElement)
  
    const ancestryElement = document.createElement('p')
    ancestryElement.textContent = `Ancesrty: ${character.ancestry}`
    card.appendChild(ancestryElement)

    const wandElement = document.createElement('p')
    wandElement.textContent = `Wand: ${character.wand.core} ${character.wand.wood} ${character.wand.length}`
    card.appendChild(wandElement)

    const patronusElement = document.createElement('p')
    patronusElement.textContent = `Patronus: ${character.patronus}`
    card.appendChild(patronusElement)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = `X`
    card.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', evt => {
      evt.target.parentNode.remove()
    })

    container.appendChild(card)
}

const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", function() {
  window.scrollTo(0, 0);
});


form.addEventListener('submit', getCharacter)
