$(document).ready(function(){
    page.init();
});

var movieCollection = new MovieCollection(movies);

var page ={
  movieTmpl: _.template(templates.movie),
  init: function(){
    page.addAllMovies();
    page.initEvents();
  },
  initEvents: function(){
    $('.create').on('click', function(event){
      event.preventDefault();
      var newMovie = {
      title: $('input[name="title"]').val(),
      author: $('input[name="author"]').val(),
      coverImg: $('input[name="image"]').val(),
      date: $('input[name="date"]').val(),
    };
    $('input[name="title"]').val("");
    $('input[name="author"]').val("");
    $('input[name="image"]').val("");
    $('input[name="date"]').val("");
    var myMovie = new MovieModel(newMovie);
    movieCollection.add(myMovie);
    page.addAllMovies();
  });

  $('body').on('click', '.fa-pencil', function(evt){
    evt.preventDefault();
    window.glob = $(this);
    var tmpl = _.template(templates.edit);
    var title = $(this).closest('article').find('h3').text();
    var img = $(this).closest('article').find('img').prop('src');
    var date = $(this).closest('article').find('p').text();
    var tmplObj = {
      title: title,
      coverImg: img,
      date: date,

    }
    $(this).closest('article').append(tmpl({movie: tmplObj}));

  });

  $('body').on('click', '.fa-trash', function (evt) {
     evt.preventDefault();
     var movieId = $(this).closest('article').data('id');
     movieCollection.remove(movieId);
     page.addAllMovies();
   });

  $('body').on('click', 'button', function(event){
    event.preventDefault();
    var newMovie = {
    title: $('article input[name="title"]').val(),
    author: $('article input[name="author"]').val(),
    coverImg: $('article input[name="image"]').val(),
    date: $('article input[name="date"]').val(),
  };
  $('input[name="title"]').val("");
  $('input[name="author"]').val("");
  $('input[name="image"]').val("");
  $('input[name="date"]').val("");
  var myMovie = new MovieModel(newMovie);
  var movieId = $(this).closest('article').data('id');
  movieCollection.get(movieId).set(newMovie);
  page.addAllMovies();
});

$('h3').on('dblclick',function(event) {
  event.preventDefault();
  $(this).attr('contentEditable',true);
  
});

  },
  addOneMovie: function(el){
    el.attributes.id = el.cid;
    var markup = page.movieTmpl({movie: el.toJSON()});
    $('.container').append(markup);

  },
  addAllMovies: function(){
    $('.container').html('');
    _.each(movieCollection.models, page.addOneMovie);

  },

}
