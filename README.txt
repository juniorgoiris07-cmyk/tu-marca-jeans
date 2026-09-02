TU MARCA — Landing page de jeans
=================================

QUÉ HAY EN ESTA CARPETA
------------------------
index.html          La página completa (HTML + CSS + JS en un solo archivo).
images/              Fotos del sitio.
  product-*.jpg        Una por cada jean del catálogo. Por ahora son texturas
                        de tela genéricas de relleno (no fotos reales de tus
                        productos) — sirven para probar cómo se ve el diseño
                        con fotos en vez de bloques de color.
  about-denim.jpg      Imagen de relleno de la sección "Nosotros".
content/productos.json  El catálogo (nombre, precio, talles, stock, oferta,
                        foto de cada jean). El sitio lo lee solo al cargar.
admin/                El panel de administración (ver PANEL-ADMIN.txt para
                        activarlo — no funciona todavía "de fábrica", hay
                        que conectarlo a GitHub una sola vez).
PANEL-ADMIN.txt        Guía paso a paso para activar el panel de arriba.

Para simplemente MIRAR el diseño, no necesitás nada de esto: podés abrir
index.html haciendo doble clic y se ve igual que publicada (el catálogo
tiene un respaldo interno por si el navegador no puede leer el archivo
content/productos.json al abrirlo así). Para EDITAR productos desde un
panel con usuario y contraseña, hace falta activar lo de PANEL-ADMIN.txt.


CÓMO PROBARLA EN NETLIFY (gratis, sin cuenta, ~1 minuto)
-----------------------------------------------------------
1. Andá a https://app.netlify.com/drop en tu navegador.
2. Arrastrá esta carpeta completa (tu-marca-jeans) directo a esa página.
   Si tu navegador no te deja arrastrar una carpeta, comprimila en un .zip
   primero y arrastrá el .zip — Netlify lo entiende igual.
3. En unos segundos te da una URL propia tipo "algo-al-azar.netlify.app",
   ya funcionando, sin necesidad de crear cuenta.
4. Si querés conservar el sitio y poder actualizarlo más adelante (en vez
   de que sea descartable), creá una cuenta gratis en Netlify antes del
   paso 2, o "reclamá" el sitio con el botón que aparece después del
   deploy.

Cuando tengas cuenta, para subir una actualización alcanza con volver a
arrastrar la carpeta (con los cambios que hayas hecho) a tu mismo sitio
dentro del panel de Netlify.


CÓMO EDITAR EL CONTENIDO
--------------------------
Todo lo editable (nombre, logo, WhatsApp, precios, productos, redes) está
explicado en un comentario al principio de index.html — abrilo con
cualquier editor de texto (recomendado: VS Code, es gratis) y buscá
"GUÍA RÁPIDA DE EDICIÓN".

Los PRODUCTOS (agregar, editar precio, marcar sin stock, poner en oferta)
ya no se editan dentro de index.html: viven en content/productos.json.
Se puede editar ese archivo a mano, o mejor, activar el panel de
administración (PANEL-ADMIN.txt) y hacerlo con formularios, sin tocar
código.

Para cambiar una foto de producto: reemplazá el archivo correspondiente
dentro de images/ por tu foto real (mismo nombre de archivo, o cambiá el
nombre en el campo "imagen" de ese producto dentro de
content/productos.json). Usá fotos verticales (proporción 3:4, por
ejemplo 900x1200px) para que se recorten bien dentro de la tarjeta.

Para cambiar el ícono de la pestaña (favicon): eso no se configura en
Netlify, es parte del sitio. Reemplazá los 4 archivos que están en
images/ (favicon.ico, favicon-32.png, favicon-16.png,
apple-touch-icon.png) por tu propio ícono con esos mismos nombres —
no hace falta tocar nada en index.html. Usá una imagen cuadrada simple
(un logo, una inicial); si querés que te lo genere yo, pedímelo en el
chat.


SI QUERÉS QUE LOS CAMBIOS TE LOS SIGA HACIENDO CLAUDE
--------------------------------------------------------
Seguí pidiéndolos en la misma conversación de Claude donde se generó este
proyecto. Si mientras tanto editaste vos el archivo a mano, mandale tu
versión editada antes de pedir el próximo cambio, para que siga trabajando
sobre tu copia más reciente y no te la pise.
