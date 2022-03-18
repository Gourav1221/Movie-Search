function getMovie() {
    document.getElementById("details").textContent = null;
    let name = document.getElementById("mov").value;

    // let url = `http://www.omdbapi.com/?t=${name}&apikey=35a3027c`;
    let url = `http://www.omdbapi.com/?apikey=35a3027c&t=${name}`
    async function movie() {
      try {
        let res = await fetch(url);
        let response = await res.json();
      
        if (response.Response == "False") {
          alert(`sorry this movie is not available`)
          err()
        }else{
          display(response);
        console.log(response);
        }
      } catch (er) {
        console.log(er);
        // err()
      }
    }
    movie();
  }
  function display(arr) {
    var main = document.createElement("div");
    main.setAttribute("class", "main");

    var pic = document.createElement("div");
    pic.setAttribute("class", "left");

    var det = document.createElement("div");
    det.setAttribute("class", "right");

    /// data--------------->>>>>>>>>>>>>

    var img = document.createElement("img");
    img.src = arr.Poster;

    var title = document.createElement("h1");
    title.textContent = arr.Title;

    var actor = document.createElement("h3");
    actor.textContent = arr.Actors;

    var date = document.createElement("p");
    date.textContent = arr.Released;

    var rate = document.createElement("p");
    rate.textContent = arr.imdbRating;

    var genere = document.createElement("p");
    genere.textContent = arr.Genre;

    var rec = document.createElement("img")
    rec.setAttribute("class","recom")
    rec.src = "https://previews.123rf.com/images/gl0ck33/gl0ck331202/gl0ck33120200007/12304878-recommended-stamp.jpg"
    

    var rec_div = document.createElement("div")
    rec_div.setAttribute("class","rec_div")
    
    if(arr.imdbRating>8.5){
     // rate.textContent = arr.imdbRating + "  Reconmended";
     rec_div.append(rate,rec)
    det.append(title, actor, date, rec_div, genere);
    pic.append(img);
    main.append(pic, det);

    document.getElementById("details").append(main);
    }

    else{
      rec_div.append(rate)
    det.append(title, actor, date, rec_div, genere);
    pic.append(img);
    main.append(pic, det);

    document.getElementById("details").append(main);
    }


  

    // det.append(title, actor, date, rec_div, genere);
    // pic.append(img);
    // main.append(pic, det);

    // document.getElementById("details").append(main);
  }

  function err() {
    var img = document.createElement("img");
    img.src ="https://c.tenor.com/IHdlTRsmcS4AAAAM/404.gif";

    document.getElementById("details").append(img);
  }