var $form = $('#formulario'),
		$titulo = $('#titulo'),
		$url = $('#link'),
		$primerPost = $('.item').first(),
		$lista = $('#contenido');

function mostrarFormulario(){
	$form.slideToggle();
	return false;
}

function agregarPost(){
	var titulo = $titulo.val(),
			url = $url.val(),
			clone = $primerPost.clone();

	// debugger;

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	clone.hide();

	$lista.prepend(clone);		

	clone.slideDown();
}

$('#publicar_nav a').click(mostrarFormulario);
$('#formulario').on('submit', agregarPost);