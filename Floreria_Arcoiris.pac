| package |
package := Package name: 'Floreria 09-10-2025'.
package paxVersion: 1;
	basicComment: ''.

package classNames
	add: #Floreria;
	add: #ItemRamo;
	add: #Pedido;
	add: #PedidoFueraRosario;
	add: #Persona;
	add: #Variedad;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: #(
	'..\..\Documentos\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin'
	'..\..\Documentos\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin Legacy Date & Time'
	'..\..\Documentos\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin Message Box'
	'..\..\Documentos\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Prompters\Dolphin Prompter').

package!

"Class Definitions"!

Object subclass: #Floreria
	instanceVariableNames: 'nombreFloreria variedades pedidos personas'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

Object subclass: #ItemRamo
	instanceVariableNames: 'variedad cantidad'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

Object subclass: #Pedido
	instanceVariableNames: 'numeroOrden fechaOrden remitente destinatario items total'
	classVariableNames: 'UltimoNroOrden'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

Object subclass: #Persona
	instanceVariableNames: 'nroDNI tipoDNI nombre apellido telefono direccion localidad'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

Object subclass: #Variedad
	instanceVariableNames: 'codigo descripcion precio'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

Pedido subclass: #PedidoFueraRosario
	instanceVariableNames: ''
	classVariableNames: 'Recargo'
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"End of package definition"!

"Source Globals"!

"Classes"!

Floreria guid: (GUID fromString: '{553295d0-7e8c-44c1-92c5-713f094c0959}')!

Floreria comment: ''!

!Floreria categoriesForClass!Kernel-Objects! !

!Floreria methodsFor!

agregarPersona
|per|
per := self buscarOCrearPersona.
personas add: per.
^per
!

buscarFlor
|variedad cod|
   variedad := nil.
    [variedad = nil] whileTrue: [
        cod := (Prompter prompt: 'Ingrese código de flor (-1 para terminar)') asNumber.
	variedad:= (variedades detect: [:v | v codigo = cod] ifNone: [nil]).
	(variedad = nil) ifTrue:[MessageBox notify:'No existe la variedad con dicho codigo'].
		].
^variedad

!

buscarOCrearPersona
| numero pers |
numero := (Prompter prompt: 'Ingrese su DNI: ').

pers := personas detect: [:x | x nroDNI = numero] ifNone: [nil].

pers isNil ifTrue: [
    pers := Persona new.
    pers cargarDatos: numero.
].

^pers
!

cargaDatosPrueba
|ped item pers remitente destinatario var|
var := Variedad new.
var descripcion: 'Rosa'.
var codigo: 1.
var precio: 100 asFloat.
variedades add: var.
var := Variedad new.
var descripcion: 'Margarita'.
var codigo: 2.
var precio: 200 asFloat.
variedades add: var.
var := Variedad new.
var descripcion: 'Petuña'.
var codigo: 3.
var precio: 300 asFloat .
variedades add: var.
"PEDIDO 1"
pers := Persona new.
pers nombre: 'Juan'.
pers apellido: 'Johnson'.
pers localidad: 'Rosario'.
pers nroDNI: '46366884'.
pers tipoDNI: 'A'.
pers direccion: 'Av. Pellegrini 805'.
pers telefono: '3415623980'.
personas add: pers.
remitente := pers.
	pers := Persona new.
	pers nombre: 'Pablo'.
	pers apellido: 'Ferrari'.
	pers localidad: 'Rosario'.
	pers nroDNI: '47456543'.
	pers tipoDNI: 'A'.
	pers direccion: 'Vespucio 4956'.
	pers telefono: '3415692432'.
	personas add: pers.
    destinatario :=  pers.
    (destinatario esRosario) ifTrue: [ped := Pedido new]
    ifFalse: [ped := PedidoFueraRosario new].
    ped inicioItems.
    Pedido incrementaUltimoNroOrden.
    ped numeroOrden: Pedido ultimoNroOrden.
    ped destinatario: destinatario.
	item := ItemRamo new.
	item variedad: (variedades at:1).
	item cantidad: 5.
    ped agregarItem: item.
	item := ItemRamo new.
	item variedad: (variedades at:2).
	item cantidad: 3.	
    ped agregarItem: item.
    ped destinatario: destinatario.
    ped remitente: remitente.
    ped total: ped calculoTotal.
    ped fechaOrden: Date yesterday.
    pedidos add: ped.
"PEDIDO 2"
pers := Persona new.
pers nombre: 'Juan'.
pers apellido: 'Johnson'.
pers localidad: 'Rosario'.
pers nroDNI: '46366884'.
pers tipoDNI: 'A'.
pers direccion: 'Av. Pellegrini 805'.
pers telefono: '3415623980'.
personas add: pers.
remitente := pers.
	pers := Persona new.
	pers nombre: 'Mateo'.
	pers apellido: 'Martín'.
	pers localidad: 'Peyrano'.
	pers nroDNI: '44543982'.
	pers tipoDNI: 'A'.
	pers direccion: 'Bv. Lavalle 13'.
	pers telefono: '3402564391'.
	personas add: pers.
    destinatario :=  pers.
    (destinatario esRosario) ifTrue: [ped := Pedido new]
    ifFalse: [ped := PedidoFueraRosario new].
    ped inicioItems.
    Pedido incrementaUltimoNroOrden.
    ped numeroOrden: Pedido ultimoNroOrden.
    ped destinatario: destinatario.
	item := ItemRamo new.
	item variedad: (variedades at:3).
	item cantidad: 4.
    ped agregarItem: item.
	item := ItemRamo new.
	item variedad: (variedades at:1).
	item cantidad: 6.	
    ped agregarItem: item.
    ped destinatario: destinatario.
    ped remitente: remitente.
    ped total: ped calculoTotal.
    ped fechaOrden: Date today.
    pedidos add: ped.!

inicializarColecciones
	variedades := OrderedCollection new.
	pedidos := OrderedCollection new.
	personas := OrderedCollection new.
!

listarPedido: unPedido
    | factura pedidoTemporal |
factura := String new.
    1 to: unPedido items size do: [:i |
        pedidoTemporal := unPedido items at: i.
        factura := factura,
            i printString , String tab ,
            (pedidoTemporal variedad codigo) printString , String tab ,
            (pedidoTemporal variedad descripcion) , String tab , String tab,
            (pedidoTemporal cantidad) printString , String tab ,
            (pedidoTemporal costoItemRamo) printString , String cr
    ].
Transcript
    show: self nombreFloreria asUppercase; cr;
    show: 'Fecha: ', unPedido fechaOrden printString; cr;
    show: '------------------------------------------------------------'; cr;
    show: 'Pedido número: ', unPedido numeroOrden printString; cr;
    show: 'Remitente:';
    show: '  ', unPedido remitente nombre, ' ', unPedido remitente apellido; cr;
    show: 'Dirección: ', unPedido remitente direccion; cr; cr;
    show: 'Destinatario:';
    show: '  ', unPedido destinatario nombre, ' ', unPedido destinatario apellido; cr;
    show: 'Dirección: ', unPedido destinatario direccion; cr; cr;
    show: 'Detalle del pedido:'; cr;
    show: 'Nº', String tab, 'Código', String tab, 'Descripción', String tab, 'Cantidad', String tab, 'Subtotal'; cr;
    show: '------------------------------------------------------------'; cr;
    show: factura; cr;
    show: '------------------------------------------------------------'; cr;
    show: 'TOTAL: ', unPedido total printString; cr;
    show: 'Gracias por confiar en ', self nombreFloreria; cr;cr;cr.



!

listarPedidoPorFecha
|inicio fin pedidosSeleccionados|
inicio := Date fromString: (Prompter prompt:'Ingresar fecha de inicio de periodo').
fin := Date fromString: (Prompter prompt:'Ingresar fecha de fin de periodo' ).

pedidosSeleccionados := pedidos select: [:unPedido | 
    (unPedido fechaOrden <= fin) and: [unPedido fechaOrden >= inicio]].

	(pedidosSeleccionados isEmpty) 
	ifTrue:[MessageBox notify:'No hay pedidos en el rango solicitado'.]
	ifFalse:[pedidosSeleccionados do:[:unPedido | self listarPedido:unPedido].].!

menu
|opc|
opc := 3.
Pedido inicializaUltimoNroOrden.
self inicializarColecciones.
self cargaDatosPrueba.
[opc = 0] whileFalse: [
MessageBox notify: 'MENU
1- Nuevo Pedido
2- Reporte Pedidos
3- Crear nueva variedad
0- Salir'.
opc := (Prompter prompt: 'Ingrese un número entre 0 y 3') asNumber.
(opc = 1) ifTrue:[self nuevoPedido].
(opc = 2) ifTrue:[self listarPedidoPorFecha].
(opc = 3) ifTrue:[self nuevaVariedad].
(opc = 0) ifTrue:[].
].!

nombreFloreria
	nombreFloreria := 'Arcoíris'.
	^nombreFloreria!

nombreFloreria: anObject
	nombreFloreria := anObject!

nuevaVariedad
|variedad opc|
opc := 'S'.
[opc = 'S'] whileTrue:[
variedad := Variedad new.
variedad codigo: (Prompter prompt: 'Ingrese un codigo para la flor que creará') asNumber.
variedad descripcion: (Prompter prompt: 'Ingrese una descripción para esta flor').
variedad precio: (Prompter prompt: 'Ingrese el precio de esta variedad.') asNumber asFloat.
variedades add: variedad.
opc := Prompter prompt: 'Ingrese S para continuar, de lo contrario dejará de añadir variedades y será devuelto al menú principal.'.].
!

nuevoPedido
| ped opc remitente destinatario sigue item|

sigue := 'S'.
opc := 'S'.
[opc = 'S'] whileTrue: [
    variedades isEmpty ifTrue: [
        MessageBox notify: 'No hay variedades cargadas'.
        opc := 'N'.
        ^self
    ].
    MessageBox notify: 'Ingrese datos del remitente'.
    remitente := self agregarPersona.
    MessageBox notify: 'Ingrese datos del destinatario'.
    destinatario := self agregarPersona.
    (destinatario esRosario) ifTrue: [ped := Pedido new]
	ifFalse: [ped := PedidoFueraRosario new].
    ped inicioItems.
    Pedido incrementaUltimoNroOrden.
    ped numeroOrden: Pedido ultimoNroOrden.
    ped remitente: remitente.
    ped destinatario: destinatario.
    
	[sigue = 'S'] whileTrue:[
	item := ItemRamo new.
	item variedad: self buscarFlor.
	item cantidad: (Prompter prompt: 'Ingrese cantidad') asNumber.

    ped agregarItem: item.
	sigue := Prompter prompt:'¿Quiere Ingresar otro item? Para seguir ingrese S.'].
    
    ped total: ped calculoTotal.
    ped fechaOrden: Date today.
    pedidos add: ped.

    opc := Prompter prompt: 'Digite S para ingresar otro pedido, de lo contrario será enviado al menú principal'.
].
!

pedidos
	^pedidos!

pedidos: anObject
	pedidos := anObject!

solicitarPedido "Cambiar clave principal por fecha"
|ret|
ret := (Prompter prompt: 'Ingrese el numero de pedido que quiere mostrar en pantalla')asNumber.
self listarPedido:(self pedidos at:(ret))
!

variedades
	^variedades!

variedades: anObject
	variedades := anObject! !

!Floreria categoriesForMethods!
agregarPersona!public! !
buscarFlor!public! !
buscarOCrearPersona!public! !
cargaDatosPrueba!public! !
inicializarColecciones!public! !
listarPedido:!public! !
listarPedidoPorFecha!public! !
menu!public! !
nombreFloreria!accessing!private! !
nombreFloreria:!accessing!private! !
nuevaVariedad!public! !
nuevoPedido!public! !
pedidos!accessing!private! !
pedidos:!accessing!private! !
solicitarPedido!public! !
variedades!accessing!private! !
variedades:!accessing!private! !
!

ItemRamo guid: (GUID fromString: '{e9c465bb-c9e9-4d82-9149-062d5abf0edd}')!

ItemRamo comment: ''!

!ItemRamo categoriesForClass!Kernel-Objects! !

!ItemRamo methodsFor!

cantidad
	^cantidad!

cantidad: anObject
	cantidad := anObject!

costoItemRamo
^((self variedad precio) * self cantidad).!

variedad
	^variedad!

variedad: anObject
	variedad := anObject! !

!ItemRamo categoriesForMethods!
cantidad!accessing!private! !
cantidad:!accessing!private! !
costoItemRamo!public! !
variedad!accessing!private! !
variedad:!accessing!private! !
!

Pedido guid: (GUID fromString: '{9b911237-5bdd-429b-ba50-faebc9b10811}')!

Pedido comment: ''!

!Pedido categoriesForClass!Kernel-Objects! !

!Pedido methodsFor!

agregarItem: unItem
    items add: unItem.!

calculoTotal
|ret|
ret := 0.
(self items) do:[:item| ret := (ret + item costoItemRamo)].
^ret.!

destinatario
	^destinatario!

destinatario: anObject
	destinatario := anObject!

fechaOrden
	^fechaOrden!

fechaOrden: anObject
	fechaOrden := anObject!

inicioItems
	items := OrderedCollection new.!

items
	^items!

items: anObject
	items := anObject!

numeroOrden
	^numeroOrden!

numeroOrden: anObject
	numeroOrden := anObject!

remitente
	^remitente!

remitente: anObject
	remitente := anObject!

total
	^total!

total: anObject
	total := anObject! !

!Pedido categoriesForMethods!
agregarItem:!public! !
calculoTotal!public! !
destinatario!accessing!private! !
destinatario:!accessing!private! !
fechaOrden!accessing!private! !
fechaOrden:!accessing!private! !
inicioItems!public! !
items!accessing!private! !
items:!accessing!private! !
numeroOrden!accessing!private! !
numeroOrden:!accessing!private! !
remitente!accessing!private! !
remitente:!accessing!private! !
total!accessing!private! !
total:!accessing!private! !
!

!Pedido class methodsFor!

incrementaUltimoNroOrden
UltimoNroOrden := UltimoNroOrden + 1!

inicializaUltimoNroOrden
UltimoNroOrden := 0!

ultimoNroOrden
^UltimoNroOrden! !

!Pedido class categoriesForMethods!
incrementaUltimoNroOrden!public! !
inicializaUltimoNroOrden!public! !
ultimoNroOrden!public! !
!

Persona guid: (GUID fromString: '{0879b65e-4079-4ca4-b71d-d84d3368a70e}')!

Persona comment: ''!

!Persona categoriesForClass!Kernel-Objects! !

!Persona methodsFor!

apellido
	^apellido!

apellido: anObject
	apellido := anObject!

cargarDatos: unNumero"Parametro del metodo"
nroDNI:= unNumero.
tipoDNI:= (Prompter prompt: 'Ingrese el tipo del DNI:').
nombre:= (Prompter prompt: 'Ingrese el nombre de la persona a cargar:'). 
apellido:= (Prompter prompt: 'Ingrese el apellido de la persona a cargar:').
telefono:= (Prompter prompt: 'Ingrese el teléfono de la persona, (sea destinatario o remitente), para comunicarnos:').
localidad:= (Prompter prompt: 'Ingrese la localidad de la persona:').
direccion:= (Prompter prompt: 'Ingrese la dirección de la persona:').!

direccion
	^direccion!

direccion: anObject
	direccion := anObject!

esRosario
(self localidad = 'Rosario')
	ifTrue:[^true]
	ifFalse:[^false].!

localidad
	^localidad!

localidad: anObject
	localidad := anObject!

nombre
	^nombre!

nombre: anObject
	nombre := anObject!

nroDNI
	^nroDNI!

nroDNI: anObject
	nroDNI := anObject!

telefono
	^telefono!

telefono: anObject
	telefono := anObject!

tipoDNI
	^tipoDNI!

tipoDNI: anObject
	tipoDNI := anObject! !

!Persona categoriesForMethods!
apellido!accessing!private! !
apellido:!accessing!private! !
cargarDatos:!public! !
direccion!accessing!private! !
direccion:!accessing!private! !
esRosario!public! !
localidad!accessing!private! !
localidad:!accessing!private! !
nombre!accessing!private! !
nombre:!accessing!private! !
nroDNI!accessing!private! !
nroDNI:!accessing!private! !
telefono!accessing!private! !
telefono:!accessing!private! !
tipoDNI!accessing!private! !
tipoDNI:!accessing!private! !
!

Variedad guid: (GUID fromString: '{c9a53c8d-d9c1-467b-a189-9a20d1618011}')!

Variedad comment: ''!

!Variedad categoriesForClass!Kernel-Objects! !

!Variedad methodsFor!

codigo
	^codigo!

codigo: anObject
	codigo := anObject!

descripcion
	^descripcion!

descripcion: anObject
	descripcion := anObject!

precio
	^precio!

precio: anObject
	precio := anObject! !

!Variedad categoriesForMethods!
codigo!accessing!private! !
codigo:!accessing!private! !
descripcion!accessing!private! !
descripcion:!accessing!private! !
precio!accessing!private! !
precio:!accessing!private! !
!

PedidoFueraRosario guid: (GUID fromString: '{f5df7904-be5f-4461-af06-84cbd51225f9}')!

PedidoFueraRosario comment: ''!

!PedidoFueraRosario categoriesForClass!Kernel-Objects! !

!PedidoFueraRosario methodsFor!

calculoTotal
|ret|
ret := super calculoTotal.
ret := ret + (ret*(PedidoFueraRosario recargo) / 100).
^ret.! !

!PedidoFueraRosario categoriesForMethods!
calculoTotal!public! !
!

!PedidoFueraRosario class methodsFor!

recargo
	Recargo := 5.
	^Recargo! !

!PedidoFueraRosario class categoriesForMethods!
recargo!public! !
!

"Binary Globals"!

