var templates = {};
templates.movie = [

  "<img src='<%= coverImg %>'>",
  "<h3 contentEditable='false'><%= title %></h3>",
  "<p><%= date %></p>",
  "<i class='fa fa-trash'></i>",
  "<i class='fa fa-pencil'></i>"

].join('');

templates.edit =[
  '<form>',
  '<input type="text" class="title" name="title" value="<%= title %>" placeholder="Title">',
  '<input type="text" class="author" name="author" value="<%= author %>" placeholder="Director">',
  '<input type="text" class="coverImg" name="image" value="<%= coverImg %>" placeholder="Image">',
  '<input type="text" class="date"name="date" value="<%= date %>" placeholder="Date">',
  '<button><i class="fa fa-plus"></i></button>',
  '</form>'
].join('');

templates.add =[
  '<form>',
    '<input type="text" name="title" placeholder="Title">',
    '<input type="text" name="author" placeholder="Director">',
    '<input type="text" name="image" placeholder="Image">',
    '<input type="text" name="date" placeholder="Date">',
    '<input class="create "type="button" name="create" value="Create">',
  '</form>'
].join('');
