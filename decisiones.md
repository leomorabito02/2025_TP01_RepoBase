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
* programo y cuando termino hago un git push para crear un pr y que se mergee en dev