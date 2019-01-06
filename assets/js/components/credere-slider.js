(function() {
  var news = axios.get("news.json");
  var $slider = document.getElementById("slider");

  news
    .then(function(res) {
      var data = res.data;
      for (var i = 0; i < data.length; i++) {
        createSlide(i, data[i], data.length);
      }
    })
    .catch(function(err) {
      console.error(err);
    });

  function createSlide(index, data, last) {
    var $slide = document.createElement("li");
    $slide.className = "slide";

    var $radio = document.createElement("input");
    with ($radio) {
      type = "radio";
      className = "radio";
      id = index + 1;
      name = "slide";
      checked = index === 0;
    }
    $slide.append($radio);

    var $next = document.createElement("label");
    var $nextText = document.createTextNode("Próximo");
    $next.append($nextText);
    with ($next) {
      className = "label";
      htmlFor = index + 2;
    }
    if (index + 2 <= last) {
      $slide.append($next);
    }

    var $previous = document.createElement("label");
    var $previousText = document.createTextNode("Anterior");
    $previous.append($previousText);
    with ($previous) {
      className = "label -previous";
      htmlFor = index;
    }
    if (index > 0) {
      $slide.append($previous);
    }

    $slide.append(createCard(data));

    $slider.append($slide);
  }

  function createCard(data) {
    var $credereCard = document.createElement("div");
    $credereCard.className = "credere-card " + data.classes.join(" ");

    var $image = document.createElement("img");
    with ($image) {
      src = data.image;
      className = "image";
      alt = "Thumbnail";
    }
    $credereCard.append($image);

    var $content = document.createElement("div");
    $content.className = "content";

    var $title = document.createElement("h1");
    $title.className = "title";

    var $titleText = document.createTextNode(data.title);
    $title.append($titleText);

    $content.append($title);

    if (data.subtitle) {
      var $subtitle = document.createElement("h2");
      $subtitle.className = "subtitle";

      var $subtitleText = document.createTextNode(data.subtitle);
      $subtitle.append($subtitleText);

      $content.append($subtitle);
    }

    var $paragraph = document.createElement("p");
    $paragraph.className = "paragraph";

    var $paragraphText = document.createTextNode(data.paragraph);
    $paragraph.append($paragraphText);

    $content.append($paragraph);

    $credereCard.append($content);

    return $credereCard;
  }
})();
