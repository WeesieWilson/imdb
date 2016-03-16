var AddMovieView = Backbone.View.extend({
  el: '.form',
  addTemplate: _.template(templates.add),
  events: {
    'click .create': 'addMovie'
  },

  addMovie: function (event) {
    event.preventDefault();
    this.model.set({
      title: this.$el.find('input[name="title"]').val(),
      coverImg: this.$el.find('input[name="image"]').val(),
      date: this.$el.find('input[name="date"]').val(),
    });
    this.$el.find('input').val('');
    this.collection.add(this.model);
    this.model = new MovieModel;
  },
  initialize: function () {
    if(!this.model) {
      this.model = new MovieModel({});
    }
    this.render();
  },
  render: function () {
    var markup = this.addTemplate();
    this.$el.html(markup);
    return this;
  }
});





var MovieView = Backbone.View.extend({
  tagName: 'article',
  template: _.template(templates.movie),
  editTemplate: _.template(templates.edit),
  events: {
   'click .fa-trash': 'removeMovie',
   'click .fa-pencil': 'showEdit',
   'click .fa-plus': 'editMovie'
 },


  showEdit: function(){
    console.log("CLICK", $(this));
    this.$el.append(this.editTemplate(this.model.toJSON()));
  },

  editMovie: function (event) {
   event.preventDefault();

   this.model.set({
     title: this.$el.find('.title').val(),
     coverImg: this.$el.find('.coverImg').val(),
     date: this.$el.find('.date').val()

   });


 },
 removeMovie: function () {
    this.model.destroy();

  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
var CollectionView = Backbone.View.extend({
  el: '.container',
  initialize: function(){
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
  },
  addOne: function (el) {
    var modelView = new MovieView({model: el});
    this.$el.append(modelView.render().el);
  },
  addAll: function () {
    $('.container').html('');
    window.glob = this.collection
    _.each(this.collection.models, this.addOne, this);
}
});
