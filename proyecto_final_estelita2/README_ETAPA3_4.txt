# Clothes Brand - Etapas 3 y 4

## Archivos
- `main.js`: menú hamburguesa y validación del formulario.
- `styles.css`: estilos responsivos y mensajes de validación.
- `index.html`, `productos.html`, `contacto.html`: páginas del sitio.

## Probar localmente
Abre `index.html` en el navegador. Para probar el formulario, abre `contacto.html`.
El formulario valida los datos en el navegador, pero no almacena ni envía pedidos:
GitHub Pages es alojamiento estático y para recibir pedidos se requiere un backend o servicio de formularios.

## Publicar en GitHub Pages
1. Crea un repositorio público en GitHub.
2. Entra al repositorio y selecciona **Add file > Upload files**.
3. Sube el CONTENIDO de esta carpeta (los tres HTML, `styles.css`, `main.js` y las imágenes) directamente a la raíz del repositorio.
4. Pulsa **Commit changes**.
5. Entra a **Settings > Pages**.
6. En **Build and deployment**, selecciona **Deploy from a branch**.
7. Selecciona la rama `main` y la carpeta `/(root)`. Pulsa **Save**.
8. Espera a que GitHub Pages publique el sitio. La URL tendrá la forma `https://TU-USUARIO.github.io/NOMBRE-REPOSITORIO/`.
9. Abre la URL y comprueba Inicio, Productos, Contacto, imágenes y menú móvil.

## Importante
- Conserva exactamente los nombres de las imágenes, incluyendo mayúsculas, espacios y extensión.
- `main.js` y `styles.css` deben estar en la misma carpeta que los HTML.
- La publicación HTTPS la proporciona GitHub Pages automáticamente.
- Si el repositorio se llama `TU-USUARIO.github.io`, la página se publica en `https://TU-USUARIO.github.io/`.
