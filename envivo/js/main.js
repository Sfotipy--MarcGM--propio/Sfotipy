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
		/*
		Al anteponer "$" a "el", lo que estamos haciendo es decir a Backbone que vamos a utilizar una función JQuery.
		(Backbone, permite hacer eso, con JQuery.)
		*/
		this.$el.html("<span>"+author+"</span> - <span>"+name+"</span>");
	}
});

/*
	Creamos un objeto con nombre "Sfotypy" en el window(entorno global de Javascript)
		y le decimos que ese objeto sea igual al objeto "Sfotipy" creado anteriormente (el que acabamos de crear).
 */
window.Sfotipy = Sfotipy;