//NameSpace
Sfotipy = {};

//Clase "song"(está dentro del NameSpace "Sfotipy") y extiende de la clase "Model".
Sfotipy.Song = Backbone.Model.extend({});
//Clase "song" extiende de la clase "View" (por lo tanto es una vista).
Sfotipy.SongView = Backbone.View.extend({
	tagName: 'li',
	className: 'item border-bottom',

	//La función "render" se ejecuta cuando se vaya a visualizar esta vista en pantalla.
	render: function(){
		var song = this.model;
		var name = song.get('name');
		var author = song.get('author');

		this.$el.html("<span>"+author+"</span> - <span>"+name+"</span>");
	}
})