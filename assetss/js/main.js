$(document).ready(function() {
	var dibujarGifs = function(data){
		var gif = "";
		var url = "";
		data.forEach(function(element){
			gif = element.images.downsized_large.url;
			url = element.bitly_gif_url;
			$('#elementos').append(armarTemplate(gif, url));
		});
	}
		var armarTemplate = function(gif,url){
		var t = "<div class='elemento'><img src='" + gif + "'/><a href='"+ url +"'>Ver más</a></div>"
		return t;
		} 

	var ajaxGif = function(gif){
		$.ajax({
			url: 'https://api.giphy.com/v1/gifs/search', //dirección de donde va a pedir info
			type: 'GET', // tipo de petición
			datatype: 'json', // tipo de dato
			data: {
				q: gif,
				api_key:'dc6zaTOxFJmzC'
			}
		})
		.done(function(response){
			console.log(response);
			dibujarGifs(response.data);
		})
		.fail(function(){
			console.log("error");
		});
		}

	$("#buscar-gif").click(function(event) {
		console.log("Entro");
		$("#elementos").empty();
		var gif = $("#gif-text").val();
		ajaxGif(gif);
	});

});







