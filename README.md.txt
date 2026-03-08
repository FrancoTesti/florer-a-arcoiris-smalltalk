#Gestión de Pedidos - Florería Arcoiris

Proyecto desarrollado para la cátedra de Paradigmas de Programación de la carrera de INGENIERIA EN SISTEMAS para SEGUNDO AÑO.
El sistema gestiona la preparación y envío de ramos de flores, diferenciando costos y logística para entregas locales y de larga distancia (pueblos o ciudades que no sean Rosario)

#Descripción del Proyecto
La aplicación permite administrar el catálogo de flores, registrar clientes (remitentes/destinatarios) y procesar pedidos. Fue diseñado bajo el Paradigma Orientado a Objetos para garantizar escalabilidad y modularidad (lo pedido por la catedra).

#Características Principales:
- Gestión de Variedades: Registro de códigos, descripciones y precios por unidad.
- Cálculo de Costos: Sistema dinámico que computa el total del ramo y aplica recargos por envíos fuera de Rosario.
- Reportes: Generación de listados de pedidos filtrados por períodos de fecha.
- Validación: Registro completo de datos personales (DNI, dirección, localidad) para remitentes y destinatarios.

#Tecnologías y Conceptos Aplicados
- Lenguaje: Smalltalk (Dolphin Smalltalk).
- Herencia: Jerarquía de clases para "Pedido" y "PedidoFueraRosario".
- Polimorfismo: Implementado en el método "calculoTotal" para manejar diferentes tipos de envíos.
- Colecciones: Uso de "OrderedCollection" para gestionar ramos y registros generales.

# Integrantes - Grupo 04 (Comisión 205)
- Santiago Cordoba
- Octavio Alejandro Gudiño
- Emanuel Salomón
- Renzo Scollo
- Franco Testi

# Ejecución
Para probar el sistema en Dolphin Smalltalk:
1. Installa Dolphin Smalltalk 
2. Entra a file ( arriba a la izquierda ), luego darle click a install package ( instalas el paquete), dale click al paquete llamado Floreria_Arcoiris , busca la "tuerquita" que tenes en la herramientas la cual se llama Open System Browser ( y alli podes observar todas clases), para iniciar el proyecto anda al menu inicio.
2. Abrir un *Workspace*.
3. Escribir:
"
flor := Floreria new.
flor menu."
4. Listo, prueba el programa. 