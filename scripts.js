//fetch the information
fetch("https://api.github.com/users/Jordanwbutterwick/repos")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //   made it to the actual data
    console.log(data);
  });

// //   content to send

// var content = {
//   title: "WOW",
//   body: "Butts",
//   userId: 1
// };

// // fetch the URL again

// fetch("https://jsonplaceholder.typicode.com/users", {
//   // set your method
//   method: "POST",
//   // set your headers
//   headers: {
//     "content-type": "application/json"
//   },
//   //   set the body
//   body: JSON.stringify(content)
// })
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });
