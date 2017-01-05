//sample data modified from randomUser.me
var randomUser = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "stella",
        "last": "meyer"
      },
      "location": {
        "street": "7385 kapellenweg",
        "city": "schmalkalden-meiningen",
        "state": "saarland",
        "postcode": 58225
      },
      "email": "stella.meyer@example.com",
      "picture": {
        "medium": "https:randomuser.me/api/portraits/med/women/50.jpg"
      },
      "nat": "DE"
    }
  ]
}
console.log("stuff")

// JS file>
// assign html to var
//     var entryHTML = $("#use_this").html();
//     var entryTemplate = Handlebars.compile(entryHTML)
//     var entryOutput = entryTemplate(use_this) <--this is the html markup

//     $("#use_this").append(entryOutput);

//handlebars step one: grap the html from the script tag
var userHTML = $("#theUser").html()

//handlebars step two: compile it into a template
var userTemplate = Handlebars.compile(userHTML)

//handlebars step three:render the HTML by passing the data to the template
var userOutput = userTemplate(randomUser)

//handlebars step four: put the complete HTML into the DOM
$("#putstuffhere").append(userOutput)
