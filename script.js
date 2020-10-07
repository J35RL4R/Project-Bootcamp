alert('connected!')
$("#search-input").on("click", function() {
  
    var pokemon = $("#input").val().toLowerCase().trim();
    
    var pokeGame = "https://pokeapi.co/api/v2/pokemon/" +pokemon;
    var pokeDescription = "https://pokeapi.co/api/v2/characteristic/" +pokeid;
    var pokeGif = "https://api.giphy.com/v1/gifs/search?api_key=I4lc5z5Pjva79mvZq3suogFUfDYu5RbM&q=" +pokemon; "&limit=1&offset=0&rating=g&lang=en";

  $.ajax({
    url: pokeGame,
    method: "GET"
  })

    .then(function(response) {
        console.log(response)
        var pokeName = response.species.name;
        var pokeHeader = $("<h1>");
        pokeHeader.text(pokeName);
        $(".pokemon-name").append(pokeHeader);
         // then i want to appened description of pokemon
        // then i want to append top 5 moves to page
        // then i want to append stat names
        // then i want to appened stat values
        //then i want to append pokemon type
        console.log(response)
        console.log(response.species.name)
    });
    $.ajax({
      url: pokeGif,
      method: "GET"
    })
  
      .then(function(response) {
        var imageUrl = response.data[1].images.original.url;
        var pokeImage = $("<img>");
        pokeImage.attr("src", imageUrl);
        pokeImage.attr("alt", "pokemon image")
        $(".poke-img").append(pokeImage);
        console.log(response)
        console.log(response.data)
      });
});
