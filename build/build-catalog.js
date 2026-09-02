// Arma content/productos.json (lo que lee el sitio) a partir de los archivos
// individuales en content/productos/ (lo que edita el panel de administración).
// Netlify corre esto solo antes de cada publicación — no hace falta tocarlo.
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'content', 'productos');
const OUT_FILE = path.join(__dirname, '..', 'content', 'productos.json');

function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error('No existe la carpeta content/productos — nada para armar.');
    process.exit(1);
  }

  const archivos = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith('.json'));

  const productos = archivos.map((archivo) => {
    const ruta = path.join(SRC_DIR, archivo);
    try {
      return JSON.parse(fs.readFileSync(ruta, 'utf8'));
    } catch (err) {
      throw new Error(`content/productos/${archivo} no es JSON válido: ${err.message}`);
    }
  });

  // Orden de aparición en el catálogo: por el campo "orden" si está cargado,
  // y si no, alfabético por nombre — para que un producto nuevo sin "orden"
  // no rompa nada, solo aparece al final o intercalado por nombre.
  productos.sort((a, b) => {
    const oa = typeof a.orden === 'number' ? a.orden : 999;
    const ob = typeof b.orden === 'number' ? b.orden : 999;
    if (oa !== ob) return oa - ob;
    return String(a.nombre || '').localeCompare(String(b.nombre || ''), 'es');
  });

  fs.writeFileSync(OUT_FILE, JSON.stringify({ productos }, null, 2) + '\n');
  console.log(`content/productos.json generado con ${productos.length} producto(s).`);
}

main();
