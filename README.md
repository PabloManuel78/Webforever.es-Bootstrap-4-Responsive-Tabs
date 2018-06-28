# Webforever.es-Bootstrap-4-Responsive-Tabs
Responsive tabs in Bootstrap 4

Developed by https://webforever.es

This plugin makes the tabs of Bootstrap 4 receptive. If they do not fit, it will create a drop-down menu. It also works when you change the size of the screen.

## DEMO
[Open Demo](https://cerrajero24huelva.es/borrame.php)


## HTML code
Your website's HTML structure has to be similar to this in order to work:
```
<head>
  <script type="text/javascript" src="/js/responsivetab.min.js"></script>
</head>

<body>
  <!-- Nav tabs -->
  <ul id="rbtt_1" class="nav nav-tabs rem1" role="tablist">

	  <li class="nav-item">
		  <a class="nav-link active" id="#rbtt1-1-tab" href="#rbtt1-1" data-toggle="tab">Datos Web</a>
	  </li>
  
	  <li class="nav-item">
		  <a class="nav-link" id="#rbtt1-2-tab" href="#rbtt1-2" data-toggle="tab">Datos Negocio</a>
    </li>
  
      ...
  </ul>
</body>
```
## JQUEY code
```
$(document).ready(function() {
  $('#rbtt_1').wf_responsivetab({text: '...',});
  $(window).on('resize', function() {$('#rbtt_1').wf_responsivetab({text: '...',});});
});

``` 

## License
MIT
