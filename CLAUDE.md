# Casa Lele — instrucciones del repositorio

Web de dos apartamentos de alquiler vacacional en Cevio (Valle Maggia,
Ticino, Suiza). Sitio estático, sin framework, sin dependencias.
Publicado en Vercel; cada commit en `main` se publica automáticamente.

URL: https://casa-lele-cevio.vercel.app

## Idiomas

Cuatro páginas independientes, cada una completa:

- `index.html` — alemán, es la portada y el idioma por defecto
- `en.html` — inglés
- `fr.html` — francés
- `it.html` — italiano

**Regla principal: cualquier cambio de contenido se aplica en los cuatro
archivos, en la misma sesión.** Un texto corregido solo en alemán deja la
web incoherente y rompe los hreflang. Cuando el cambio sea de texto, no
traduzcas de forma literal: adapta al idioma y respeta el tono de cada
página, que ya está escrito.

## Estructura

```
index.html  en.html  fr.html  it.html
style.css        estilos, compartido por las cuatro
sitemap.xml  robots.txt
fotos/           126 archivos: cada foto en varios anchos, JPEG y WebP
data.json        datos compartidos por los cuatro idiomas
template.html    estructura común
build.py         generador (NO funciona ahora mismo, ver Deuda técnica)
```

## Datos de la casa

Casa Lele, Rovana 32, 6675 Cevio. En la periferia del pueblo, ladera
soleada, 419 m. Gestionada por Adrian y Eleonora, negocio familiar,
reformada y abierta en 2018. Teléfono y WhatsApp +41 76 503 70 50.

**Casa Lele – Sole** (primera planta): 57,8 m², 4 huéspedes, 1 dormitorio
con cama de matrimonio más sofá cama, 1 baño con ducha, cocina de
inducción, suelo radiante, balcón panorámico. Desde 140 CHF/noche.

**Casa Lele – Luna** (planta baja): 33,4 m², 2 huéspedes, 1 dormitorio con
cama de matrimonio, 1 baño con ducha, cocina de inducción, lavadora, suelo
radiante, terraza privada de 8,9 m². Desde 120 CHF/noche.

**Común**: terraza compartida de 31,5 m² con barbacoa eléctrica; casa
entera hasta 6 huéspedes desde 260 CHF; limpieza 140 CHF por apartamento;
tasa turística 2 CHF por persona y noche; pago con tarjeta al reservar;
cancelación 100 % hasta 30 días antes, 50 % hasta 7 días, después nada;
perros 30 CHF por estancia; sin cuna; 10 % desde 7 noches; entrada desde
las 15:00 con caja de llaves, salida hasta las 10:00.

**Distancias**: parada del autopostal Rovana (línea 331) a 180 m;
aparcamiento en la calle a unos 180 m; tienda, supermercado y restaurante
a 1,2 km; Val Bavona, Foroglio, Bosco Gurin y Locarno a 30 min; Zúrich
3 h; Milán 2 h.

## Reglas que no se saltan

1. **No inventar datos.** Metros, distancias, equipamiento, precios,
   horarios: si no está en este archivo, pregunta. Es preferible dejar un
   hueco visible a publicar algo falso.
2. **No escribir reseñas ni valoraciones.** En Suiza es competencia
   desleal (LCD/UWG). El bloque de reseñas se retira hasta que haya
   reseñas reales de huéspedes, copiadas literalmente.
3. **Nunca claves ni contraseñas en el repositorio.** Todo lo que entra
   queda en el historial aunque luego se borre.
4. **No reescribir archivos enteros.** Ediciones quirúrgicas: cambia las
   líneas que toque y deja el resto intacto.
5. **No tocar el diseño sin que se pida.** La paleta (blush #F5E9E1,
   terracota #B5714C) y las tipografías (Cormorant Garamond, Jost) están
   decididas.

## Imágenes

Cada foto existe en 640, 1024, 1600 y 2400 px (hasta donde dé el
original), en JPEG y WebP, y se sirve con `<picture>`, `srcset` y `sizes`,
con `width` y `height` declarados y `loading="lazy"` salvo la de cabecera.

Si se añade una foto hay que generar todas sus variantes con el mismo
criterio: JPEG con calidad 80 progresivo, WebP con calidad 76, nombre
`<nombre>-<ancho>.jpg` y `.webp`. Los originales de 4000 px no van al
repositorio, están en la carpeta de Drive del proyecto.

`sizes` según el contexto: cabecera `100vw`; tarjeta de apartamento
`(max-width:860px) 100vw, 46vw`; galería `(max-width:700px) 100vw, 300px`.

## SEO

Cada página declara canonical, hreflang de los cuatro idiomas más
x-default, Open Graph y datos estructurados `LodgingBusiness`. El dominio
escrito en todo eso es **casacevio.ch** y aún no está decidido si será el
definitivo: si cambia, hay que actualizarlo en los cuatro HTML, en
`sitemap.xml`, en `robots.txt` y en `data.json`, y también el correo de
contacto.

## Flujo de trabajo

Trabajan dos personas, Adrian y Ele, cada una desde su cuenta.

- `git pull` **antes** de empezar, siempre. Nunca trabajar sobre una copia
  de días anteriores.
- Commits pequeños y con mensaje claro, en español.
- Un commit por tarea, no uno por archivo: los cuatro idiomas del mismo
  cambio van juntos.
- `git push` al terminar, y comprobar en la URL de Vercel que la web sigue
  bien antes de cerrar la sesión.
- El reparto de archivos y las tareas pendientes están en `ESTADO.md`, en
  la carpeta de Drive del proyecto.

## Deuda técnica

`build.py` genera las cuatro páginas a partir de `template.html`,
`data.json` y una carpeta `i18n/` con los textos de cada idioma. **Esa
carpeta se perdió**, así que el generador no se puede usar y cada cambio
de texto hay que repetirlo a mano en los cuatro HTML.

Rehacer `i18n/` extrayendo los textos de los cuatro HTML actuales es la
tarea que más trabajo ahorra a partir de entonces. Requiere que las cuatro
páginas sigan compartiendo exactamente la estructura de `template.html`:
conviene comprobarlo antes de empezar.

## Pendiente ahora mismo

Lista completa y actualizada en `ESTADO.md` (Drive). Lo que bloquea la
publicación: quitar el bloque de reseñas vacío, escribir Impressum,
protección de datos y reglamento de la casa (los enlaces del pie ya
apuntan a `impressum.html`, `datenschutz.html` y `hausregeln.html`, que
dan 404), decidir el dominio, y poner la calle en el pie, donde sale `__`
en lugar de Rovana 32.
