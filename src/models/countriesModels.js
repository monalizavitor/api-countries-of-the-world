const fs = require('fs')

const database = require('../data/data.json')
const { findById } = require('./countriesSchema')

const getAll = () => {
    if (database) {
        return { error: null, data: database }
    } else {
        return { error: { message: "Ocorreu um erro" }, data: null }
    }
}

const getById = (id) => {
    const countriesId = id
    const findData = database.find(item => item.id = countriesId)
    if (findData) {
        return { error: null, data: findData }
    } else {
        return { error: { message: "Registro não encontrado na base." }, data: null }
    }

}

const insertData = (newCountry) => {
    const findCountry = database.find(item => item.name == newCountry.name)
    if (!newCountry.id) {
        newCountry.id = Math.random().toString(36).substr(-8)
    }
    if (findCountry) {
        return { error: { message: "Ops registro duplicado" } }
    } else {
        fs.writeFileSync('./src/data/data.json', JSON.stringify([...database, newCountry]), 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })
        return { error: null }
    }

}

const updateData = (id, dataToUpdate) => {
    const countryId = id
    const countryFound = database.find(item => item.id == countryId)
    const countryIndex = database.indexOf(countryFound)

    if (countryIndex >= 0) {
        database.splice(countryIndex, 1), dataToUpdate)
        fs.writeFileSync('./src/data/data.json', JSON.stringify([database]), 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })
        return { error: null, data: getById(id) }
    } else {
        return { error: { message: 'Ops, não encontrei esse registro para poder alterá-lo' }, data: null }
    }
}

const deleteData = (id) => {
    const countryId = id
    const countryFound = database.find(item => item.id == countryId)
    const countryIndex = database.indexOf(countryFound)

    if (countryIndex >= 0) {
        database.splice(countryIndex, 1)
        fs.writeFileSync('./src/data/data.json', JSON.stringify([database]), 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })
        return { error: null }
    } else {
        return { error: { message: "Ops, não encontrei esse registro para poder deletá-lo" } }
    }
}

module.exports = {
    getAll,
    getById,
    insertData,
    updateData,
    deleteData
}