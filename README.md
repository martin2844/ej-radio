## Ejercicio técnico para Radio M.

# Consigna:

En nuestro sitio necesitamos crear un bloque de notas, las notas son dinámicas y se obtienen de un endpoint dado. Lenguajes permitidos HTML, CSS y JS (incluye frameworks), el programador es libre de usar los que crea necesarios para resolver el ejercicio.

Endpoint de notas: https://www.mocky.io/v2/5cfbb853300000da1d0a8bd2

A tener es cuenta

1. Son tres bloques de notas, con título y la imagen de la nota en cada uno
La información de las notas a mostrar se debe levantar directamente desde este endpoint https://www.mocky.io/v2/5cfbb853300000da1d0a8bd2 (devuelve la información a mostrar en cada bloque en formato JSON)

2. Tener en cuenta que el endpoint es siempre el mismo y la información que devuelve podría variar

3. Los bloques de notas deben ser clickeables y llevarte al link de la nota correspondiente, se deja a criterio del programador que zona o zonas del bloque son linkeables para ingresar a la nota.


4. Tiene que ser responsive, esto quiere decir que el sitio debe verse bien tanto en desktop como en mobile

5. El bloque principal debe estar contenido dentro de un container con un ancho máximo de X píxeles, se puede usar bootstrap, otra librería para grillado o resolverlo uno mismo

6. Se debe utilizar alguna tipografía de Google Fonts (https://fonts.google.com/) para los títulos de las notas

# Como yo lo resolvería:

1. Sinceramente, la consigna es simple, para realizarlo de modo eficiente, usaria Javascript puro con async await para obtener la info. Como el puesto es para React. Vamos a usar este Framework y hacer un SPA con él. Usando Axios con react vamos a tener algunos beneficios a la hora de trabajar con apis. Como por ejemplo que la información ya viene Stringificada (?), y la podemos meter directo al Virtual Dom.
2. Una vez obtenida la data la vamos a pasar al state, con un simple Hook. Si la información cambia, se vuelve a hacer un render del componente de las notas a mostrar y se va actualizar. Con esto, nos aseguramos de que si cambia la info de la API, cambia nuestro display.
3. Esto lo podemos hacer, haciendo que todo el componente tenga un anchor tag, y directamente nos lleve a la nota. Esto es a criterio nuestro, siendo el formato de las tarjetas tan simples, en mi opinion las haria completamente clickeables. Si tuvieran un abstracto, o hashtags, haria que solo el titulo y la imagen lleven a la nota. En este caso haremos toda la tarjeta clickeable.
4. Simplemente, con mediaqueries vamos a adaptar la estructura a la pantalla.
5. No usaria bootstrap para algo tan simple, es cargar la pagina con cosas que no hacen falta, y nos va a quitar performance. Simplemente con CSS media queries y flexbox vamos a lograr esto. En pantallas grandes, se ven en fila, en pantallas menos anchas en columnas.
6. Esto es simple, importamos al CSS el font que queremos de google fonts. Con esto estaría listo el ejercicio.


# Finalmente.


Hacer el ejercicio, me llevo 1.30 hs, principalmente el SCSS, para dejarlo aproximadamente parecido a la pagina de radio mitre.

Aquí un detalle del tiempo:

![Tiempo](https://github.com/martin2844/ej-radio/blob/master/public/images/tiempo.png)



