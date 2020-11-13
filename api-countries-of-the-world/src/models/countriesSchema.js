const mongoose = require('mongoose')
const Schema = mongoose.Schema

const countriesSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        auto: true, //autogerado?
        required: true //é obrigatório?
    },
    name: {
        type: String,
        required: true
    },
    Alpha2Code: {
        type: String
    },
    Alpha3Code: {
        type: String
    },
    NativeName: {
        type: String
    },
    Region: {
        type: String
    },
    SubRegion: {
        type: String
    },
    Latitude: {
        type: Number
    },
    Longitude: {
        type: Number
    },
    Area: {
        type: Number
    },
    NumericCode: {
        type: Number
    },
    NativeLanguage: {
        type: String
    },
    CurrencyCode: {
        type: String
    },
    CurrencyName: {
        type: String
    },
    CurrencySymbol: {
        type: String
    },
    Flag: {
        type: String
    },
    FlagPng: {
        type: String
    }
},
    {
        collection: 'countriesOfWorld'
    }

)

const countriesCollection = mongoose.model('countriesOfWorld', countriesSchema)

module.exports = countriesCollection