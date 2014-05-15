//NameSpace
Sfotipy = {};

//Clase "song"(está dentro del NameSpace "Sfotipy") y extiende de la clase "Model".
Sfotipy.Song = Backbone.Model.extend({});
//Estamos creando una colección de Backbone. Esta colección contendrá objetos de tipo "Song".
Sfotipy.Songs = Backbone.Collection.extend({
	model: Sfotipy.Song
});
//Clase "song" extiende de la clase "View" (por lo tanto es una vista).
Sfotipy.SongView = Backbone.View.extend({
	//La propiedad "events", contendrá el mapeo de los eventos de esta interfaz (solo los eventos de esta vista que estamos renderizando(la de las canciones)).
	events: {
		/*
			La estructura de eventos en Backbone es la siguiente:
				'evento selector': 'función_a_ejecutar'
		*/
		//Cuando se haga click a los elementos con clases ".action" y ".icon-add", ejecutar la función "add".
		'click .action.icon-add': 'add'
	},

	tagName: 'li',
	className: 'item border-bottom',

	//La variable "template", contendrá la compilación del template con id "song-template"(del archivo "index.html") con Handlebars.
	template: Handlebars.compile($("#song-template").html()),

	//Este método, es llamado cada vez que se instáncia una vista o un modelo. Es un método predefinido de Backbone.
	initialize: function(){
		/*
			Esta función "escucha" el modelo asociado a la vista, escucha el evento "change", ejecutará la función "this.render" (y también le decimos el scope donde se ejecutará la función(this)).
		 	
		 	this.listenTo(QUE_ESCUCHA, QUE_EVENTO_ESCUCHA, FUNCIÓN_QUE_EJECUTARÁ, SCOPE_DONDE_SE_EJECUTARÁ_LA_FUNCIÓN)
		 */
		this.listenTo(this.model, "change", this.render, this);
	},
	//La función "render" se ejecuta cuando se vaya a visualizar esta vista en pantalla.
	render: function(){
		var html = this.template(this.model.toJSON());
		/*
			Al anteponer "$" a "el", lo que estamos haciendo es decir a Backbone que vamos a utilizar una función JQuery.
				(Backbone, permite hacer eso, con JQuery.)
		*/
		this.$el.html(html);
	},
	//La función "add", es llamada por un evento y recibe como argumento, el evento como tal (en este caso, "click").
	add: function(e){
		alert(this.model.get("name"));
	}
});

/*
	Creamos un objeto con nombre "Sfotypy" en el window(entorno global de Javascript)
		y le decimos que ese objeto sea igual al objeto "Sfotipy" creado anteriormente (el que acabamos de crear).
 */
window.Sfotipy = Sfotipy;