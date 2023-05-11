const express = require('express')
const cors = require('cors')
const path = require('path')
const axios = require('axios')



const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const { getHomePage } = require('./fileSender.js')


app.post('/api/characters', (req, res) => {
  const userCharacterName = req.body.name;

  axios.get('https://hp-api.onrender.com/api/characters')
    .then(response => {
      const allCharacters = response.data
      console.log(allCharacters)

      const matchingCharacters = allCharacters.filter(character => {
        // console.log(character)
        return character.name.includes(userCharacterName)
      })

      res.status(200).send(matchingCharacters);
    })
    .catch(error => {
      console.error(error)
      res.status(400).send({ error: 'Bombarda Maxima' })
    })
})


axios.get('https://hp-api.onrender.com/api/spells')
  .then(response => console.log(response.data))
  .catch(error => console.error(error))


app.get('/', (req,res) => {
  res.status(200).sendFile(path.join(__dirname, '[path to frontend html from server file]'))
})

app.listen(4000, console.log(`App running on 4000`))