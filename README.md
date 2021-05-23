# Reto técnico - Indra Perú - Rimac Seguros

Repositorio para evaluar conocimientos con la librería ReactJS.

## Instalación

Realizar los siguientes pasos para levantar el proyecto a nivel local:

```bash
git clone https://github.com/JhosepGC14/challenge-indra-rimac.git
```
```bash
git fetch
```
```bash
git checkout develop
```
```bash
npm install
```
En una nueva pestaña de la terminal ejecute el siguiente comando:

```bash
json-server --watch db.json --port 4000
```
Luego, en otra terminal ejecute el siguiente comando:

```bash
npm run start
```

## Librerías Utilizadas

#### Axios : 
Esta librería te permite hacer llamadas HTTPS a un servidor ya sea local o externo, se eligío debido a su facilidad de configuración para reutilizar en varios sitios del proyecto.

#### React Boostrap : 
Es un framework de CSS3 recontruido y orientado netamente para React, ya que cuenta con la disponibilidad de componentes que se pueden reutilizar y personalizar según sea solicitado por el diseño.

#### SASS : 
Se eligío este pre-procesador de CSS debido a la facilidad de uso, reducción del tiempo para crear y mantener estilos CSS. Además, te permite tener una organización modular de los estilos, lo cual es vital para proyectos grandes y escalables.

#### React Router DOM: 
Se eligío esta libreria debido a que es una colección de componentes de navegación la cual podemos usar tanto en Web como Mobile. Con esta librería vamos a obtener un enrutamiento dinámico gracias a los componentes, en otras palabras tenemos unas rutas que renderizan un componente.

#### Json-Server : 
Se eligío esta libreria debido a que se puede crear facilmente una API rest fake para poder consumir desde el frontend ya que uno mismo puede construir un servidor con datos falsos para prototipos y simulaciones rapidas.

## El Reto Dividido en Tareas

En este reto, aplique una metología agíl llamada SCRUM, como ya tenia una interfaz visual no hubo necesidad de separarlo en Historias de Usuario. Simplemente divide la interfaz en componentes, para luego por cada componente volverlo una tarea pequeña. Así llegué a tener más claro los objetivos diarios y un numero de horas para realizar cada una de ellas con la finalidad de acabar los requerimientos obligatorios y opcionales del reto.
