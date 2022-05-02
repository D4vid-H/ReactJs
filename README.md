# MASALA

## _Proyecto: E-commerce_

Demo de una compra en la tienda [Masala](./entregaFinal.gif)

Este es el proyecto que relice en el curso de ReactJs. Se trata de un E-commerce el cual muestra una vidriera de almacen de productos comestibles naturales. Se pueden acceder al detalle de cada producto y realizar una compra si se desea. Al realizar la compra la misma queda almacenada con un ID generado automaticamente (Firebase).

## Features

- Se utilizo el framemwork Tailwind para la mayoria de vistas.
- Los productos y orden de compras, se encuentran cargados en Firebase.
- Los productos se pueden filtrar por categoria.
- Se puede realizar la busqueda de producto por su nombre.

## Use

La APP Masala, consta de un componente (ItemListContainer) donde se aloja la lista de productos (ItemList) los mismos estan modelados por el componente (Item). 

> Los productos viene definidos con el siguientes formato.
> { 
name: String, 
category: String(numerico), 
categoryName: String, 
description: String, 
information: String, 
price: Number, 
picturUrl: String, 
stock: Number 
} 

```sh
Imagenes
Las imagenes de los productos estan cargadas a travez de un require.context("../../img")
por ende para realizar la llamada a la imagen se debe pasar como String el formato siguiente "./11.webp".
Donde el primer digito indica la categoria ej: '1' = Cereales, el segundo indica el producto dentro de esa categoria.

```

Cada producto tiene su componente de detalle definido por (ItemDetail) el cual ademas de mostrar los detalles del producto contiene un contador para seleccionar la cantidad que se desea comprar. 

> ItemCount es el componente contador
 el mismo recibe un callback(addQuantity) como parametro
 desde CartContext para advertir
 que no se pueda agregar mas que el stock
 existente de ese producto.

Una vez elegida la cantidad a comprar, desde el mismo componente (ItemDetail) se accede a las opciones:  ir al carrito u seguir comprando.
Si accedemos al carrito para realizar la compra, se pueden ver el/los productos agregados (ItemCart) al mismo y su cantidad la cual se puede modificar agregando u quitando desde el componente (InputCount), tambien parte de la informacion es el sub total por producto y el total de la compra. 

> El componente InputCount es un input
que recibe desde CartContext un callback 
(addQuantity) como parametro, la cual
comprueba si hay stock y permite agregar o quitar
la cantidad de productos.

Para terminar la simulacion de la compra, desde el boton Realizar Compra en el componente (Cart) navegamos a un componente formulario (Modal) el cual solicita unos pocos datos personales necesarios para completar la orden de compra. La misma se genera automaticamente una vez completado el formulario.

> Al igual que los productos
estas ordenes se guardan 
en la base de datos de Firestore.

El componente Adapter se creo para darle formato al objeto producto que recibe la App desde la base de datos (Firebase). De esta manera, podemos recibir productos desde otra API y darle el formato que usa nuestra App.

```sh
El componente AsyncMock contiene un array de productos que se pueden observar como ejemplo. Tambien tiene las funciones que se necesitan para que la App pueda funcionar sin necesidad de conectarse a Firestore. 

```
```sh
Se debe agregar: import { getProduct } from "../AsyncMock/AsyncMock"
- ItemListContainer
- ItemDetailContainder
- NavBar
```


