// //sample data modified from randomUser.me
// var randomUser = {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "ms",
//         "first": "stella",
//         "last": "meyer"
//       },
//       "location": {
//         "street": "7385 kapellenweg",
//         "city": "schmalkalden-meiningen",
//         "state": "saarland",
//         "postcode": 58225
//       },
//       "email": "stella.meyer@example.com",
//       "picture": {
//         "medium": "https:randomuser.me/api/portraits/med/women/50.jpg"
//       },
//       "nat": "DE"
//     }
//   ]
// }
console.log("stuff")

function waitForTheStuf() {

//handlebars step one: grap the html from the script tag
var userHTML = $("#theUser").html()

//handlebars step two: compile it into a template
var userTemplate = Handlebars.compile(userHTML)

//handlebars step three:render the HTML by passing the data to the template
var userOutput = userTemplate(boostUser)

//handlebars step four: put the complete HTML into the DOM
$("#putstuffhere").append(userOutput)

}
var boostUser = new Promise(function(resolve, reject){
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        resolve(data)
        // console.log(data);
      }
    });
})

  boostUser
    .then(
  function(data){
    boostUser = data
    // console.log("hey", boostUser)
    waitForTheStuf()
  })
