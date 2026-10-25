# Casa Lele — instrucciones del repositorio

Web de dos apartamentos de alquiler vacacional en Cevio (Valle Maggia,
Ticino, Suiza). Sitio estático, sin framework, sin dependencias.
Publicado en Vercel; cada commit en `main` se publica automáticamente.

URL: https://casa-lele-cevio.vercel.app

## Antes de nada, en cada sesion

Este proyecto se coordina con dos archivos Excel que viven en la carpeta
de Drive «Casa Lele»:

- `AN - Cambios web_Casa Lele.xlsx` — el de Adrian, en castellano
- `EM - Modifiche web_Casa Lele.xlsx` — el de Ele, en italiano

**Al empezar cualquier sesion, lo primero es mirarlos. No esperes a que
te lo pidan.** El orden es este:

1. Pide permiso en una linea: «¿Abro los dos Excel de seguimiento para
   ver si hay novedades?». Si dicen que no, sigue y no vuelvas a
   preguntarlo en esa sesion.
2. Abrelos y detecta las novedades asi: **lo que esta escrito en la
   columna E de un archivo y no aparece en la columna F del otro es
   nuevo**. No hace falta ningun registro aparte, los propios archivos lo
   dicen.
3. Avisa en pocas lineas de lo que haya: cuantos puntos nuevos ha escrito
   la otra persona y cuales son, por su numero y su zona.
4. Pregunta que prefieren: ver esas novedades en detalle y sincronizar
   ahora, o dejarlo y seguir con otra cosa. Espera respuesta.
5. Si no hay novedades, dilo en una linea y pregunta por donde quieren
   seguir. No conviertas esto en un informe largo.

Si no encuentras la carpeta de Drive, pregunta por su ruta: cambia segun
el ordenador. En el Mac de Adrian esta en
`~/Library/CloudStorage/GoogleDrive-<correo>/Mi unidad/Casa Lele`.

## Los dos Excel de seguimiento

Cada hoja tiene 17 puntos numerados, y **el Nº es la clave**: el punto 9
de un archivo es el mismo punto que el 9 del otro. Nunca renumerar ni
reordenar filas.

| Col | Que es | Quien escribe |
|---|---|---|
| A | Nº del punto | nadie |
| B | Captura de la zona de la web | nadie |
| C | Zona de la web | nadie |
| D | Punto a cambiar | nadie |
| E (amarilla) | la idea del dueño de ese archivo | Adrian / Ele |
| F (azul) | la idea de la otra persona, traducida | Claude |
| G | Estado | formula, luego Claude |
| H | Fecha del ultimo movimiento | Claude |
| I | De quien es la idea que gana | Claude |

Toda la hoja esta protegida menos la columna E, sin contraseña. Al
escribir con openpyxl la proteccion se ignora: no hay que desactivarla.

Estados, castellano / italiano: Pendiente / In sospeso, En curso / In
corso, Decidido / Deciso, Hecho / Fatto, Descartado / Scartato.

G lleva una formula que pone Pendiente mientras E y F esten vacias, y En
curso en cuanto una de las dos tenga texto. Al pasar un punto a Decidido,
Hecho o Descartado se sustituye la formula por el texto.

### Al sincronizar

1. Abrir los dos archivos y comparar punto por punto.
2. Copiar lo que cada uno ha escrito en su E a la F del otro, traducido
   (castellano a italiano y al reves). La F se reescribe entera cada vez.
3. Poner la fecha de hoy en H en los puntos que hayan cambiado.
4. Resumir a la persona: que hay nuevo, en que coinciden, en que no, y
   que puntos estan listos para decidir.
5. **No aplicar ningun cambio en la web por iniciativa propia.**

### Cuando dicen que un punto esta decidido

Estado a Decidido, iniciales en I de quien era la idea ganadora, fecha de
hoy en H, y la idea descartada se deja **tachada** en su celda (fuente con
strike), sin borrarla.

### Cuando piden aplicar los decididos

Hacer los cambios en los cuatro HTML y despues marcar esos puntos como
Hecho con la fecha de hoy. Solo se aplican los que esten en Decidido.

### Reglas de los dos archivos

- Se abren con **LibreOffice**, no con Numbers ni con Google Sheets: solo
  LibreOffice respeta el bloqueo, los desplegables y las imagenes, y
  guarda en `.xlsx` sin exportar.
- Si un texto de la columna E no cabe en su fila, agrandar la altura de
  esa fila al sincronizar.
- Si alguien ha escrito por error fuera de su columna, restaurar el valor
  original y decir que se ha restaurado.

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
escrito en todo eso es **casalele.ch** y aún no está decidido si será el
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

Lista completa y actualizada en `ESTADO.md` (Drive), y los 17 puntos de
mejora grafica en los dos Excel de seguimiento.

El dominio y las doce paginas legales estan **aplazados a proposito**:
son los ultimos pasos, justo antes de migrar a Hostpoint. Vercel es solo
el visor de trabajo mientras tanto, y por eso la indexacion esta
bloqueada en `robots.txt`.

## Pendiente para el dia de la migracion a Hostpoint

La web vive en Vercel solo como visor de trabajo. El destino final es el
alojamiento de Hostpoint con el dominio casalele.ch. Mientras tanto, la
indexacion esta bloqueada a proposito.

Al migrar hay que hacer todo esto, y en este orden:

1. **Restaurar `robots.txt`**: `Allow: /` y la linea
   `Sitemap: https://casalele.ch/sitemap.xml`. Ahora pone `Disallow: /`.
2. **Subir los archivos a Hostpoint** por FTP, respetando la estructura:
   los HTML y `style.css` en la raiz, y las carpetas `fotos/`, `logo/` y
   `video/` tal cual.
3. **Apuntar el dominio casalele.ch** al alojamiento de Hostpoint y
   comprobar que responde con y sin www, y que el certificado HTTPS esta
   activo.
4. **Comprobar los canonicos y los hreflang**: ya dicen casalele.ch, pero
   hay que verificar que la portada alemana responde en la raiz del
   dominio y no en /index.html.
5. **Decidir como se publica a partir de entonces**: Hostpoint es FTP
   clasico, asi que el despliegue automatico desde GitHub se acaba. O se
   sube a mano cada cambio, o se monta una publicacion automatica.
6. **Dar de alta la web en Google Search Console** y enviar el sitemap.
7. **Apagar o borrar el proyecto de Vercel**, para que no queden dos
   copias de la misma web en internet.
8. **Escribir las doce paginas legales** antes de abrir al publico: son
   el ultimo paso del contenido y son obligatorias en Suiza.
