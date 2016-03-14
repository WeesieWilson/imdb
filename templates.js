var templates = {};
templates.movie = [
  "<article data-id='<%= movie.id %>'>",
  "<img src='<%= movie.coverImg %>'>",
  "<h3 contentEditable='false'><%= movie.title %></h3>",
  "<p><%= movie.date %></p>",
  "<i class='fa fa-trash'></i>",
  "<i class='fa fa-pencil'></i>",
  "</article>"
].join('');

templates.edit =[
  '<form>',
  '<input type="text" name="title" value="<%= movie.title %>" placeholder="Title">',
  '<input type="text" name="author" value="<%= movie.author %>" placeholder="Director">',
  '<input type="text" name="image" value="<%= movie.coverImg %>" placeholder="Image">',
  '<input type="text" name="date" value="<%= movie.date %>" placeholder="Date">',
  '<button><i class="fa fa-plus"></i></button>',
  '</form>'
].join('');
