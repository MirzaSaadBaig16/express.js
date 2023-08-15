import express from 'express'

const app = express();

const port = 8000;

app.get('/' , (req, res)=> {
    res.status(200).send("Welcome to the home page")
})

app.get('/about' , (req, res)=> {
    res.status(200).send("Welcome to the about page")
})

app.get('/contact' , (req, res)=> {
    res.status(200).send("Welcome to the contact page")
})

app.get('/bihari Kabab' , (req, res)=> {
    res.status(200).send("Welcome to the biryani page")
})

app.get('/biryani', (req, res)=> {
        res.status(200).json({
            plate: 1,
            name: "biryani",
            price: 500
        })
    })
    app.post('/biryani', (req, res)=> {
        res.status(200).send("Jani post biryani ki request ban gai")
    })
    app.delete('/biryani', (req, res)=> {
        res.status(200).send("Jani biryani delete kardi")
    })
    app.put('/biryani', (req, res)=> {
        res.status(200).send("Jani biryani main masala daal diya hai")
    })


    app.listen(port, ()=> {
        console.log(`Sun raha hun server ko port number ${port} per`) 
     })