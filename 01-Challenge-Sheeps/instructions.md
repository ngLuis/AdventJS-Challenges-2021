
# CHALLENGE #01 - Contando ovejas para dormir
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:
  
```
const ovejas = [

	{ name: 'Noa', color: 'azul' },

	{ name: 'Euge', color: 'rojo' },

	{ name: 'Navidad', color: 'rojo' },

	{ name: 'Ki Na Ma', color: 'rojo'}

]
```

Al ejecutar el método debería devolver lo siguiente:

```
const ovejasFiltradas = contarOvejas(ovejas)

Valor devuelto por la función:

// [{ name: 'Navidad', color: 'rojo' },
// { name: 'Ki Na Ma', color: 'rojo' }]
```

Todos los retos se encuentran en [AdventJs](https://adventjs.dev/challenges/)