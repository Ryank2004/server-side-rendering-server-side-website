// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'


// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Maak een GET route voor de index
app.get('/', function (request, response) {
    // fetchJson("https://fdnd-agency.directus.app/admin/content/dh_services").then((apiData) => {

    response.render('index')
    })
// })
// app.get('/detail/:id', function(request, response) {
//     fetchJson('https://fdnd-agency.directus.app/items/dh_services?filter={"id": '+ request.params.id +'}').then((initiatiefDetail) => {
//       response.render('detail', {
//         initiatief: initiatiefDetail.data[0]
//       })
//     })
//   })
// app.get('/initiatieven/:id', function (request, response){
//     fetchJson('https://fdnd-agency.directus.app/items/dh_services?filter={"id":' + request.params.id + '}').then((initiatievenData) => {

//     response.render('initiatieven', {initiatieven: initiatievenData.data[0]})
//     })

// })

app.get('/initiatieven', function (request, response){
    fetchJson('https://fdnd-agency.directus.app/items/dh_services').then((initiatievenData) => {

    response.render('initiatieven', {initiatieven: initiatievenData.data})
  })
  
})





// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8008)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
