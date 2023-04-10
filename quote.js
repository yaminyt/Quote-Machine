fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    document.querySelector("h1").textContent=data[Math.floor(Math.random()*1643)].text
    document.querySelector("h2").textContent=data[Math.floor(Math.random()*1643)].author
  
});

