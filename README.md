



Objetivo = Tienda eCommerce de instrumentos musicales ficticios 

Resumen de conceptos aplicados

En el archivo App.js se montan todos los componentes implementando el hook BrowserRoutes, los que contienen navegabilidad estan montados a traves del hook Routes(dentro de BrowserRoutes)

Componentes

NavBar : 
Obtengo un array con las categorias que tienen las propiedades nombre, id y ruta que luego utilizo para montar en el NavLink, a su vez hago un .map de dicho array para automatizar la muestra de dichas categorias (si en el futuro se agregaran o se quitaran categorias el componente estará automatizado).
Tambien estoy implementando un logo dentro de un Link que al clickear nos lleva a la vista Home, un Link a Cart y un h3 con el nombre de la tienda


ItemListContainer : 
Este componente toma el array de productos original proveniente de Firebase y lo envia a ItemList por parametro


ItemList :
Recibe el array de productos y setea en la const "products" el array completo o filtrado segun categoria segun corresponda, luego se envia por props a Item un solo producto del nuevo array ("products") y se hace un .map para que muestre un Item por cada producto que haya en el mismo. Ademas incorpora un spinner durante el lapso de tiempo que tarda en mostrarse los productos


Item: 
Recibe un producto con todas sus propiedades y a traves del destructuring estoy asignando un tag img con la prop picture (que trae la url) un h3 para el nombre, otro para el precio y un Link con una url creada a partir del id del objeto que nos llevará a ver el detalle del item seleccionado.

ItemDetailContainer:
Recibe el array de productos original (igual que ItemListContainer) con la diferencia de que este componente va a setear en "product" el objeto que se encuentre en una posicion (index) determinada, dicha posicion variará de acuerdo al valor de itemId que estoy trayendo con useParams(), y luego con "ternario Spinner" de por medio lo enviará por props a ItemDetail.


ItemDetail :
Similar a Item pero con otras caracteristicas mostradas, ademas aquí se encuentra montado el componente ItemCount, al cual le pasa por props un numero de stock, un numero inicial y una funcion onAdd, que si bien está declarada en este componente será llamada por ItemCount.

ItemCount:
Este recibe por parametro un numero de stock con el cual se establece un condicional para que en el caso de que stock sea 0 no se permita agregar el producto al carrito, y otro condicional para que el contador no permita agregar mas cantidad de las que marca stock.
tambien recibe un numero inicial para setear el contador, y la funcion onAdd que será llamada al clickear el boton, con otra funcion condicional de por medio (addCart) que no permite activar la funcion onAdd cuando el contador es 0.

CartWidget:
Muestra en el NavBar una imagen con el numero de la cantidad de productos agregados al Cart, siempre y cuando este sea mayor a 0, en base a una operacion lógica.

Cart:
Si hay productos agregados este componente desplegará una vista con la información de dichos productos a traves del RenderCart, además mostrará en pantalla el formulario que deberá llenarse para confirmar la compra y un boton que varia su estado entre diabled y enabled según el estado del formulario (si esta completo o vacio).

ConfirmScreen: 
Este componente mostrará un saludo final, la informacion de la transaccion, un ID de la venta realizada para el usuario y un boton que redirije hacia el Home para realizar otra compra.

CartContext:
Contiene funciones y datos que seran utilizados por distintos componentes no relacionados entre si en la App.


Link Deploy:
https://melodious-puffpuff-c5ba2f.netlify.app/









