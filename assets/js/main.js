$(document).ready(function(){

    var cambiarImagen = function () {
        var $this = $(this);
        var nuevoCodigo = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', nuevoCodigo);
    }

    $('img').hover(cambiarImagen, cambiarImagen);

})