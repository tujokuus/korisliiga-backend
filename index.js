const express = require('express')
const app = express()

let matches = [
    {
        "id": "1",
        "teamA": {
          "name": "Tampereen Pyrintö"
        },
        "teamB": {
          "name": "Bisons"
        },
        "date": "2024-03-15T18:30:00"
      },
      {
        "id": "2",
        "teamA": {
          "name": "Kouvot"
        },
        "teamB": {
          "name": "Karhubasket"
        },
        "date": "2024-03-17T19:00:00"
      },
      {
        "id": "3",
        "teamA": {
          "name": "BC Nokia"
        },
        "teamB": {
          "name": "Helsinki Seagulls"
        },
        "date": "2024-03-19T17:00:00"
      },
      {
        "id": "4",
        "teamA": {
          "name": "Kataja Basket"
        },
        "teamB": {
          "name": "Lahti Basketball"
        },
        "date": "2024-03-21T18:45:00"
      },
      {
        "id": "5",
        "teamA": {
          "name": "Ura Basket"
        },
        "teamB": {
          "name": "Kouvot"
        },
        "date": "2024-03-23T18:00:00"
      },
      {
        "id": "6",
        "teamA": {
          "name": "Kobrat"
        },
        "teamB": {
          "name": "Tampereen Pyrintö"
        },
        "date": "2024-03-25T20:15:00"
      },
      {
        "id": "7",
        "teamA": {
          "name": "Vilpas Vikings"
        },
        "teamB": {
          "name": "BC Nokia"
        },
        "date": "2024-03-27T19:30:00"
      },
      {
        "id": "8",
        "teamA": {
          "name": "Helsinki Seagulls"
        },
        "teamB": {
          "name": "Kataja Basket"
        },
        "date": "2024-03-29T18:00:00"
      }
]

let predictions = [
    {
        "match_id": 1,
        "user_id": 1,
        "predicted_winner": "Tampereen Pyrintö",
        "created_at": "2024-11-19T08:54:40.096Z",
        "id": "1"
      },
      {
        "match_id": 2,
        "user_id": 1,
        "predicted_winner": "Kouvot",
        "created_at": "2024-11-14T14:41:08.418Z",
        "id": "2"
      },
      {
        "match_id": 3,
        "user_id": 1,
        "predicted_winner": "Helsinki Seagulls",
        "created_at": "2024-11-14T10:33:09.374Z",
        "id": "3"
      },
      {
        "match_id": 4,
        "user_id": 1,
        "predicted_winner": "Kataja Basket",
        "created_at": "2024-11-14T10:33:09.374Z",
        "id": "4"
      },
      {
        "match_id": 5,
        "user_id": 1,
        "predicted_winner": "Ura Basket",
        "created_at": "2024-11-19T08:58:35.329Z",
        "id": "5"
      },
      {
        "match_id": 6,
        "user_id": 1,
        "predicted_winner": "Tampereen Pyrintö",
        "created_at": "2024-11-19T08:58:25.221Z",
        "id": "6"
      }
]

app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/matches', (request, response) => {
    response.json(matches)
})

app.get('/api/matches/:id', (request, response) => {
    const id = request.params.id
    const match = matches.find(match => match.id === id)
    
    if (match) {
        response.json(match)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/matches/:id', (request, response) => {
    const id = request.params.id
    matches = matches.filter(match => match.id !== id)
    
    response.status(204).end()
})

app.post('/api/matches', (request, response) => {
    const maxId = matches.length > 0
        ? Math.max(...matches.map(match => Number(match.id)))
        : 0

    const match = request.body
    match.id = String(maxId + 1)

    matches = matches.concat(match)

    response.json(match)
})

app.get('/api/predictions', (request, response) => {
    response.json(predictions)
})

app.get('/api/predictions/:id', (request,response) => {
    const id = request.params.id
    const prediction = predictions.find(prediction => prediction.id === id)

    if (prediction) {
        response.json(prediction)
    } else {
        response.status(404).end() 
    }
})

app.patch('/api/predictions/:id', (request, response) => {
    const id = request.params.id
    const updatePrediction = request.body

    let prediction = predictions.find(prediction => prediction.id === id)

    if (prediction) {
        prediction = { ...prediction, ...updatePrediction }
        predictions = predictions.map(p => p.id === id ? prediction : p)
        response.json(prediction)
    } else {
        response.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`) 
})