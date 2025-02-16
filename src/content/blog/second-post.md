---
title: 'Blog deployment in Raspberry Pi'
pubDate: 16-02-2025
description: 'steps to deploy and serve my blog on a raspberry 4'
---

En esta fecha, mi blog personal esta desplegado en dos dominios diferentes.

* Netlify: https://millan-castro.xyz/
* Raspberry en casa arrumada:  https://millancastro.ddns.net/

En ambos casos el despliegue esta automatizado:

- Cada vez que se suben cambios a github, rama main, netlify se actualiza
- Cada vez que se suben cambios a github, rama main, una github action establece una conexion ssh con la raspberry (hay un secret con una clave privada en github) para descargar los ultimos cambios y hacer un build del proyecto.

Para hacer el despliegue en la raspberry tuve que:

- Asignar una ip fija a la raspberry, en el router.
- Hacer un port forward de los puertos del router hacia la raspberry: 80, 443 y 22
- Admitir conexiones ssh con la key publica asociada a la key privada que usamos en github. Esta key fue creada en otro equipo de desarrollo
- Instalar nginx en la raspberry para servir el blog. Al ser archivos estaticos no me hace falta un servidor web intermedio entre el codigo y nginx.
- Configurar nginx para servir  a traves de https y redireccionar las conexiones de http. Tuve que crear un certificado SSL con Cerbot para poder usar https
- Tuve que cambiar mi tarifa en DIGI para poder salir de CG-Nat
- Cree un hostname en no-ip para asociarlo a mi direccion ip publica y poder acceder desde el exterior
- Cada 30 dias hay que decir a noip que quiero renovar el hostname, se puede evitar pagando
- Configure el router para que comunique a noip los cambios de ip que digi aplica.
- Cree una accion en Github que cada vez que se suben cambios a la rama main se le comunican a la raspberry para actualizar el sistema.
- Anule la posibilidad de acceder a la rasberry por ssh con contrasena , ya que es una practica de seguridad recomendada.

Cosas que me gustaria ver:

- Hacer que el trafico pase por cloudfare y entender porque es mas seguro.
- Conseguir un dominio como [millancastro.com](http://millancastro.com) y usarlo.
- Entender y mejorar la seguridad de la raspberry y de mi red, ya que tiene puertos abiertos.
- Hacer que todo el trafico vaya a la raspberry, y si est caida que vaya a Netlify.
- Habria ventajas en usar Docker o Kubernetes.
- Ver como podria tener multiples paginas web en la raspberry.
- Ver como podria tener una api rest.
- Entender mejor ssh, las diferentes configuraciones, comandos y posibilidades
- Entender mejor que es un dominio, un hostname…