import express, { response } from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express())
app.use(express.json())

const users = []
const tweets = []


// Rota de tweets

app.get('/tweets', (req, res) => {

    const list = [] //Criando o 

    for(let i=0; i<tweets.length; i++){
        for(let j=0; j<users.length; j++){
            if(users[j].username === tweets[i].username){

            }
        }
    }


    res.status(200).send('MENSSAGEM SUPER IMPORTANTE AQUI')
})


// Rota de cadastro
app.post('/sign-up', (req, res) => {

    const {username, avatar} = req.body

    users.push({username, avatar})
    res.status(200).send("ok")
})

// Rota de tweets
app.post('/tweets', (req, res) => {

    const {username, tweet} = req.body

    if(!username || !tweet){
        res.status(400).send("UNAUTHORIZED")
        return
    }


    tweets.push({username, tweet})
    res.status(200).send("ok")
})


app.listen(5000, () => console.log("App running in port 4000"))