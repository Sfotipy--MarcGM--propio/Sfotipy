//NameSpace
Sfotipy = {};

//Clase "song"(está dentro del NameSpace "Sfotipy") y extiende de la clase "Model".
Sfotipy.Song = Backbone.Model.extend({});
//Clase "song" extiende de la clase "View" (por lo tanto es una vista).
Sfotipy.SongView = Backbone.View.extend({
	//La propiedad "events", contendrá los eventos de esta interfaz (solo los eventos de esta vista que estamos renderizando(la de las canciones)).
	events: {

	},

	tagName: 'li',
	className: 'item border-bottom',

	//La variable "template", contendrá la compilación del template con id "song-template"(del archivo "index.html") con Handlebars.
	template: Handlebars.compile($("#song-template").html()),

	//La función "render" se ejecuta cuando se vaya a visualizar esta vista en pantalla.
	render: function(){
		var html = this.template(this.model.toJSON());
		/*
			Al anteponer "$" a "el", lo que estamos haciendo es decir a Backbone que vamos a utilizar una función JQuery.
				(Backbone, permite hacer eso, con JQuery.)
		*/
		this.$el.html(html);
	}
});

/*
	Creamos un objeto con nombre "Sfotypy" en el window(entorno global de Javascript)
		y le decimos que ese objeto sea igual al objeto "Sfotipy" creado anteriormente (el que acabamos de crear).
 */
window.Sfotipy = Sfotipy;