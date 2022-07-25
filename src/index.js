//External imports
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

//Internal imports
const api = require('./services/api')
const getEndPoint = require('./utils/get_endpoint')

//Midlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/:id', async (req, res) => {
  const { id } = req.params
  let categoria = req.query.categoria

  if(!categoria) {
    const catArr = ['films', 'species', 'people', 'planets', 'starships']
    const position = Math.floor(Math.random() * catArr.length)
    categoria = catArr[position]
    console.log(categoria)
  }

  try {
    
    const response = await api.get(`/${categoria}/${id}`)
    const responseObj = response.data

    const newObj = {}
    await Promise.all(Object.keys(responseObj).map(async (item) => {
      if(Array.isArray(responseObj[item])) {
        const endPoints = getEndPoint(responseObj[item])
        newObj[item] = await Promise.all(endPoints.map(async endPoint => {
          const result = await api.get(endPoint)
          return result.data.name ? result.data.name : result.data.title
        }))
      } else {
        newObj[item] = responseObj[item]
      }
    }))

    res.json(newObj)
  
  } catch(error) {
    res.json({ message: `Erro ao processar a api: ${error}`})
  }
})

app.listen(PORT, () => console.log('Server runnig at '+ PORT))