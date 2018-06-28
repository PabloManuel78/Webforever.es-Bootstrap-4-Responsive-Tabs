/*
	Webforever.es Bootstrap 4 Responsive Tabs
	
	Oculta las leng�etas sobrantes en un men�. 
	Al cambiar de tama�o de pantalla vuelve a pintar las leng�etas.
	
*/
(function($) {

	"use strict";

	$.fn.wf_responsivetab = function(param) {

		// Es el link que despliega el men�, se parametriza con el texto que
		// se puede pasar por par�metro.
		var link_menu = '<a class="nav-link dropdown-toggle" data-toggle="dropdown" ' + 
							'href="#" role="button" aria-haspopup="true" aria-expanded="false">' + 
							param.text + 
						'</a>';

		// En caso de cambiar de tama�o de pantalla, 
		// debemos deshacer los cambios.
		var html_limpio = "";

		// Este .each desempaqueta la barra que ya haya sido tratada o no
		// Es imprescindible cuando hay que repintar y deshacer lo hecho al cambiar la
		// dimensi�n de la pantalla.
		$(this).find(".nav-item").each(function( index, element){
			if($(this).hasClass('dropdown')){

			}else{
				html_limpio += '<li class="nav-item">' + $(this).html() + '</li>';
			}
		})

		// Si empaquet� el men�, los LI han cambiado de clases y se han convertido en A,
		// aqu� deshacemos el men� dropdown.
		$(this).find(".dropdown-item").each(function( index, element){
			html_limpio += '<li class="nav-item">' + 
								$(this).addClass('nav-link').removeClass('dropdown-item').prop("outerHTML") + 
							'</li>';
		})
	
		// Vaciamos la barra y pintamos de nuevo.
		$(this).empty()
		$(this).html(html_limpio);
		
		// Ancho total de las leng�etas
		var ancho_total = $(this).width();
		
		// Ir� controlando el ancho, cuando la barra vaya a salirse
		// meter� el resto de hijos en un dropdown
		var ancho = 0;

		// Guardamos el objeto principal para llamarlo dentro
		// del Each
		var nav = this;

		// Recorremos cada LI de la barra
		$(this).children().each(function( index, element){

			// Vamos hayando el ancho
			ancho += $(element).width();
			
			// Si el ancho con 130px m�s supera el total
			// Desde el LI anterior hasta el final, lo metemos en un UL.dropdown-menu
			if(ancho+130 > ancho_total){
				
				// Contiene las leng�etas que no caben y las pasa a men�
				var hijos = "";
				
				// Contendr� el men� dropdown co las lenguetas que no caben.
				var li_menu = "";
				
				// por cada hijo de la barra desde esta posici�n index...
				$(nav).children("li").slice(index).each(function( index, element){
				
					// Cogemos el A dentro del LI y adem�s de cambiamos la clase.
					// Con .prop obtenemos cadena del html resultante.
					hijos += $(this).children().removeClass("nav-link").addClass("dropdown-item").prop("outerHTML");
				});
				
				// Metemos estos hijos en el nuevo men� dropdown
				// Con su bot�n de apertura declarado al inicio.
				li_menu = '<li class="nav-item dropdown">' +
								link_menu +
								'<div class="dropdown-menu">' +
									hijos +
								'</div>' +
						  '</li>';

				// De la barra, borramos los que no se ven, que hemos pasado 
				// a men�.
				$(nav).children("li").slice(index).remove();
				
				// Y le a�adimos (a la barra) el nuevo men� con los elementos
				// que no cab�an.
				$(nav).append(li_menu)


				// Salimos del .each.
				return false;
			}
		})
	}
})(jQuery);

