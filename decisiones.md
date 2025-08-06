# Leonardo Carmelo Morabito
## Clave: 2100781


1.
* Hice un fork del repo original tocando el botón del fork 
2.
* creo una rama nueva
* git branch dev
* git branch feature sumar
* Creo una rama con cada feature que desarrolle. luego de crear sumar con dos commit hago un merge hacia dev para continuar con la rama de desarrollo. no hago el merge hasta que esté seguro de que funcione bien.
* hago un git push origin dev para subirlo al repo 

3. 
* supongamos que hay un error en info.txt y le tengo que agregar una segunda linea al txt. uso la estrategia de gitflow.
* creo la rama hotfix y añado cambios (fix)
* luego voy a la rama main y realizo:
* git merge hotfix
* git tag 1.0 para un mejor control de version
* me voy a dev
* git merge hotfix para que el fix esté también en la rama de desarollo

4. voy a crear una feature para mi programa de la rama dev y voy a realizar un pullrequest
* git checkout dev
* git branch feature/adios
* programo y cuando termino hago un git push origin feature/adios para crear un pr y que se mergee en dev
* entro a github y apruebo el pr para completar el merge
* vuelvo el vscode a la rama dev y realizo git pull origin dev para traer los cambios realizados en mi rama de desarrollo

5.
* para crear un tag uso git tag [version]
* elegí la convención de 1.x.x cambios en la arquitectura, x.1.x cambios en las funcionalidaddes, x.x.1, arreglos de errores
* me parece la más directa y la que está más aceptada entre los desarrolladores