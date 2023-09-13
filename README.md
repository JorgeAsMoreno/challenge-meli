# challenge-meli

## Configuracion del proyecto
Para levantar el proyecto es necesario seguir los siguientes pasos

- Hacer un `npm install` en la raiz del proyecto y dentro de la carpeta frontend
- Una vez instalad las dependencias para levantar el proyecto tenemos que correr el siguiente comando `npm start` en la raiz del proyecto

## Stack utilizado

### Cliente

- HTML
- SCSS
- React

### Servidor

- Express

## Aspectos tomados en cuenta

- Usabilidad
- SEO
- Performance
- Escalabilidad

## Vistas creadas

- Caja de busqueda: `/`
- Pagina de resultados: `/items?search=${query}`
- Detalle de producto: `/items/:id`

## Endpoints creados

### Busqueda de productos

Se consulto la siguiente API para detalle de producto: `https://api.mercadolibre.com/sites/MLA/search?q=:query` y se construyo la el siguiente endpoint: `/api/items?=${query}`

### Detalle de producto

Se consultaron los siguientes endpoints
- `https://api.mercadolibre.com/items/:id`
- `https://api.mercadolibre.com/items/:id​/description`

Y se construyo el siguiente endpoint `/api/items/:id`

## Descripcion general del proyecto

- En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el
formulario navegar a la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego,
al hacer click sobre uno de ellos, debería navegar a la vista de Detalle de Producto.

- Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.

### Especificaciones extra del proyecto

### Generales
- Se manejo un Layout que contenga toda la app un Header y un footer
- Las vistas son responsivas
- Se trataron de hacer funcionalidades pequeñas pero que reflejen su proposito como hooks ('useMemo, useReducer')

### Busqueda

- Aqui para hacer mas dinamico el programa se consulto a la api con el query de 'Apple' los cuales se pueden filtrar en el input de busqueda agregando esa funconalidad extra asi tambien manejando un estado de 'Busqueda sin resultados', los resultados mostrados tambien pueden llevar a la pagina de detalle del producto seleccionado

### Resultados de busqueda

- En los resultados de busqueda se pedia que solo regresaran 4 items, se me ocurrio que en lugar de solo tener 4 items agregar una paginacion de esos 4 resultados por pagina asi como agregarle mas porpiedades a la card, como iconos, colores y propiedades del producto
- Se agregaron las breadcrumbs que se muestran dependiendo si el producto buscado esta contenido en alguna categoria
- Se agrego un Loader a las cards para manejar el estado de carga de consulta
- Se formatea la URL

### Detalle de producto
- Se manejo el estado de la descripcion ya que en algunos casos era demasiado extensa haciendolo mas dinamico
- Se agregaron thumbnails dinamicas las cuales toman el rol de imagen principal al hacer click sobre alguna
