const countryCollection = require('../models/countriesSchema')


//retorna todos os países
const getCountries = (req, res) => {

    console.log(req.url)

    countryCollection.find((error, countries) => {
        if (error) {
            return res.status(500).send
                (error)
        } else {
            return res.status(200).send(countries)
        }
    })
}


//retornar o país a partir do ID passado na url
const getCountryById = (req, res) => {

    console.log(req.url)

    const id = req.params.id//pega o id na url

    countryCollection.findById(id, (error, country) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            if (country) {
                return res.status(200).send({ message: 'País encontrado! ' + country })
            } else if (!country) {
                return res.status(404).send('País não encontrado')
            }

        }
    })
}


//adiciona um novo país
const addCountry = (req, res) => {

    console.log(req.url)

    const countryBody = req.body//pega o id na url

    const country = new countryCollection(countryBody)//novo modelo do schema passando o body

    country.save((error) => {
        if (error) {
            return res.status(400).send({ message: 'Houve um erro! ' + error })
        } else {
            return res.status(201).send({ message: 'País criado com sucesso! ' + country })
        }
    })
}


//edita um país
const updateCountry = (req, res) => {

    console.log(req.url)

    const { id } = req.params.id //pega o id na url
    const { countryBody } = req.body//recebe o cadastro pelo body
    const update = { new: true }

    countryCollection.findByIdAndUpdate(
        id, 
        countryBody, 
        update, 
        (error, country) => {

        if (error) {
            return res.status(500).send({ 
                message: 'Houve um erro! ' + error 
            })
        } else {
            return res.status(200).send({ 
                message: 'País editado com sucesso ' + country 
            })
        }
    })
}


//deleta um país a partir de um ID
const deleteCountry = (req, res) => {

    console.log(req.url)

    const id = req.params.id //pega o id na url

    countryCollection.findByIdAndDelete(id, (error, country) => {
        if (error) {
            return res.status(500).send({ message: 'Houve um error! ' + error })
        } else if (country) {
                return res.status(200).send({ message: 'País removido com sucesso.' + country })
            } else {
                return res.sendStatus(404)

            }
    })
}


module.exports = {
    getCountries,
    getCountryById,
    addCountry,
    updateCountry,
    deleteCountry
}