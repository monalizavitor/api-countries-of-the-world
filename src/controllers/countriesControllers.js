const countryTest = require('../models/countriesSchema')

const getCountries = (req, res) => {
    console.log(req.url)
    countryTest.countryCollection.find((error, countriesOfWorld) => {
        if (error) {
            return res.status(500).send
                (error)
        } else {
            return res.status(200).send(countriesOfWorld)
        }
    })
}

const getCountryById = (req, res) => {
    const idParam = req.params.id
    countryTest.countryCollection.findById(idParam, (error, country) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            if (country) {
                return res.stauts(500).send(error)
            } else {
                if (country) {
                    return res.status(404).send('Maravilhosa não encontrada')
                }
            }
        }
    })
}

const addCountry = (req, res) => {
    console.log(req.url)
    const countryBody = req.body
    const country = new countryTest.countryCollection(countryBody)

    country.save((error) => {
        if (error) {
            return res.status(400).send(error)
        } else {
            return res.status(201).send(country)
        }
    })
}

const updateCountry = (req, res) => {
    const idParam = req.params.id
    const countryBody = req.body

    countryTest.countryCollection.findIdAndUpdate(idParam, countryBody, (error, country) => {
        if (error) {
            return res.status(500).send(error)
        } else if (country) {
            return res.status(200).send(country)
        } else {
            return res.sendStatus(404)
        }
    })
}

const deleteCountry = (req, res) => {
    const idParam = req.params.id
    countryTest.countryCollection.findByIdAndDelete(idParam, (error, country) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            if (country) {
                return res.stauts(200).send("Data foi removida.")
            } else {
                return res.sendStatus(404)

            }
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