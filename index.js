const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :post :patch')
)
morgan.token('post', (req) => {
  return req.method === 'POST' ? JSON.stringify(req.body) : ' '
})
morgan.token('patch', (req) => {
  return req.method === 'PATCH' ? JSON.stringify(req.body) : ' '
})

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
  },
  {
    "id": "9",
    "teamA": {
      "name": "Lahti Basketball"
    },
    "teamB": {
      "name": "Kobrat"
    },
    "date": "2024-03-31T19:00:00"
  },
  {
    "id": "10",
    "teamA": {
      "name": "Karhubasket"
    },
    "teamB": {
      "name": "Vilpas Vikings"
    },
    "date": "2024-04-02T17:30:00"
  },
  {
    "id": "11",
    "teamA": {
      "name": "Bisons"
    },
    "teamB": {
      "name": "Ura Basket"
    },
    "date": "2024-04-04T18:45:00"
  },
  {
    "id": "12",
    "teamA": {
      "name": "Kouvot"
    },
    "teamB": {
      "name": "BC Nokia"
    },
    "date": "2024-04-06T19:15:00"
  },
  {
    "id": "13",
    "teamA": {
      "name": "Tampereen Pyrintö"
    },
    "teamB": {
      "name": "Helsinki Seagulls"
    },
    "date": "2024-04-08T20:00:00"
  },
  {
    "id": "14",
    "teamA": {
      "name": "Kataja Basket"
    },
    "teamB": {
      "name": "Karhubasket"
    },
    "date": "2024-04-10T18:30:00"
  },
  {
    "id": "15",
    "teamA": {
      "name": "Lahti Basketball"
    },
    "teamB": {
      "name": "Bisons"
    },
    "date": "2024-04-12T19:00:00"
  },
  {
    "id": "16",
    "teamA": {
      "name": "Kobrat"
    },
    "teamB": {
      "name": "Kouvot"
    },
    "date": "2024-04-14T17:00:00"
  },
  {
    "id": "17",
    "teamA": {
      "name": "Vilpas Vikings"
    },
    "teamB": {
      "name": "Ura Basket"
    },
    "date": "2024-04-16T18:15:00"
  },
  {
    "id": "18",
    "teamA": {
      "name": "BC Nokia"
    },
    "teamB": {
      "name": "Tampereen Pyrintö"
    },
    "date": "2024-04-18T19:30:00"
  },
  {
    "id": "19",
    "teamA": {
      "name": "Helsinki Seagulls"
    },
    "teamB": {
      "name": "Lahti Basketball"
    },
    "date": "2024-04-20T18:00:00"
  },
  {
    "id": "20",
    "teamA": {
      "name": "Karhubasket"
    },
    "teamB": {
      "name": "Kobrat"
    },
    "date": "2024-04-22T19:00:00"
  },
  {
    "id": "21",
    "teamA": {
      "name": "Tampereen Pyrintö"
    },
    "teamB": {
      "name": "Kouvot"
    },
    "date": "2024-04-24T18:30:00"
  },
  {
    "id": "22",
    "teamA": {
      "name": "BC Nokia"
    },
    "teamB": {
      "name": "Karhubasket"
    },
    "date": "2024-04-26T19:00:00"
  },
  {
    "id": "23",
    "teamA": {
      "name": "Lahti Basketball"
    },
    "teamB": {
      "name": "Vilpas Vikings"
    },
    "date": "2024-04-28T17:00:00"
  },
  {
    "id": "24",
    "teamA": {
      "name": "Kataja Basket"
    },
    "teamB": {
      "name": "Bisons"
    },
    "date": "2024-04-30T18:15:00"
  },
  {
    "id": "25",
    "teamA": {
      "name": "Ura Basket"
    },
    "teamB": {
      "name": "Helsinki Seagulls"
    },
    "date": "2024-05-02T19:30:00"
  },
  {
    "id": "26",
    "teamA": {
      "name": "Kouvot"
    },
    "teamB": {
      "name": "Kobrat"
    },
    "date": "2024-05-04T18:00:00"
  },
  {
    "id": "27",
    "teamA": {
      "name": "Tampereen Pyrintö"
    },
    "teamB": {
      "name": "Vilpas Vikings"
    },
    "date": "2024-05-06T19:00:00"
  },
  {
    "id": "28",
    "teamA": {
      "name": "BC Nokia"
    },
    "teamB": {
      "name": "Lahti Basketball"
    },
    "date": "2024-05-08T18:30:00"
  },
  {
    "id": "29",
    "teamA": {
      "name": "Karhubasket"
    },
    "teamB": {
      "name": "Ura Basket"
    },
    "date": "2024-05-10T19:00:00"
  },
  {
    "id": "30",
    "teamA": {
      "name": "Helsinki Seagulls"
    },
    "teamB": {
      "name": "Kataja Basket"
    },
    "date": "2024-05-12T17:00:00"
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

let results = [
      {
        "id": "1",
        "match_id": 1,
        "winner": "Tampereen Pyrintö",
        "score": "85-80",
        "created_at": "2024-03-15T20:00:00"
      },
      {
        "id": "2",
        "match_id": 2,
        "winner": "Karhubasket",
        "score": "67-85",
        "created_at": "2024-03-17T21:00:00"
      }
]

let standings = [
  {
    "team": "Tampereen Pyrintö",
    "played": 20,
    "won": 15,
    "lost": 5,
    "points": 30,
    "id": "5218"
  },
  {
    "team": "Kouvot",
    "played": 20,
    "won": 14,
    "lost": 6,
    "points": 28,
    "id": "81a7"
  },
  {
    "team": "BC Nokia",
    "played": 20,
    "won": 13,
    "lost": 7,
    "points": 26,
    "id": "7fad"
  },
  {
    "team": "Kataja Basket",
    "played": 20,
    "won": 12,
    "lost": 8,
    "points": 24,
    "id": "c0d6"
  },
  {
    "team": "Karhubasket",
    "played": 20,
    "won": 11,
    "lost": 9,
    "points": 22,
    "id": "b509"
  },
  {
    "team": "Lahti Basketball",
    "played": 20,
    "won": 10,
    "lost": 10,
    "points": 20,
    "id": "260a"
  },
  {
    "team": "Ura Basket",
    "played": 20,
    "won": 9,
    "lost": 11,
    "points": 18,
    "id": "5188"
  },
  {
    "team": "Kobrat",
    "played": 20,
    "won": 8,
    "lost": 12,
    "points": 16,
    "id": "08e6"
  },
  {
    "team": "Vilpas Vikings",
    "played": 20,
    "won": 7,
    "lost": 13,
    "points": 14,
    "id": "5ea2"
  },
  {
    "team": "Bisons",
    "played": 20,
    "won": 6,
    "lost": 14,
    "points": 12,
    "id": "79e2"
  },
  {
    "team": "Helsinki Seagulls",
    "played": 20,
    "won": 5,
    "lost": 15,
    "points": 10,
    "id": "bdc2"
  }
]


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

// hakee kaikki ottelut
app.get('/api/matches', (request, response) => {
    response.json(matches)
})

// hakee yhden ottelun
app.get('/api/matches/:id', (request, response) => {
    const id = request.params.id
    const match = matches.find(match => match.id === id)
    
    if (match) {
        response.json(match)
    } else {
        response.status(404).end()
    }
})

// poistaa yhden ottelun
app.delete('/api/matches/:id', (request, response) => {
    const id = request.params.id
    matches = matches.filter(match => match.id !== id)
    
    response.status(204).end()
})

// lisää uuden ottelun
app.post('/api/matches', (request, response) => {
    const maxId = matches.length > 0
        ? Math.max(...matches.map(match => Number(match.id)))
        : 0

    const match = request.body
    match.id = String(maxId + 1)

    matches = matches.concat(match)

    response.json(match)
})

// hakee sarjataulukon
app.get('/api/standings', (request, response) => {
  response.json(standings)
})

// hakee tulokset
app.get('/api/results', (request, response) => {
  response.json(results)
})

// hakee kaikki ennustukset
app.get('/api/predictions', (request, response) => {
    response.json(predictions)
})

// hakee yhden ennustuksen
app.get('/api/predictions/:id', (request,response) => {
    const id = request.params.id
    const prediction = predictions.find(prediction => prediction.id === id)

    if (prediction) {
        response.json(prediction)
    } else {
        response.status(404).end() 
    }
})

// lisää uuden ennustuksen
app.post('/api/predictions', (request, response) => {
  const maxId = predictions.length > 0
      ? Math.max(...predictions.map(prediction => Number(prediction.id)))
      : 0

  const prediction = request.body
  prediction.id = String(maxId + 1)

  predictions = predictions.concat(prediction)

  response.json(prediction)
})

// muokkaa ennustusta
app.patch('/api/predictions/:id', (request, response) => {
  console.log(request.body);
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