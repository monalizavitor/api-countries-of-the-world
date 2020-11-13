const app = require('./src/app')

const PORT = 8080

app.listen(PORT, () => {
    console.log('Server is running in port ' + PORT);
})