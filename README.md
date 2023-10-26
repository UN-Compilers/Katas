# ¿Cómod usar docker para ejecutar estos tests?

## 1. Construir docker
Ejecuta

    make build
## 2. Ejecutar tests
Los tests pueden ser probados y ejecutados usando 
1. `make test` para ejecutar test una sola vez.
2. `make test-watch` para ejecutar los test en modo *watch*.
3. `make test-coverage` para ejecutar los tests y ver estadísticas de cobertura.
4. `make test-bash` ejecutar contenedor en *bash*.
### Nota
Si los tests usan *skip* o *only* no se puede usar el modo *watch*.