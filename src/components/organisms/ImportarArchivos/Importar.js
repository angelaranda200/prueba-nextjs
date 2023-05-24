import React from 'react'

const Importar = () => {
  const archivoInput = document.getElementById("archivo");
  const vistaPrevia = document.getElementById("vista-previa");

  archivoInput?.addEventListener("change", () => {
    const archivo = archivoInput.files[0];
    const tipoArchivo = archivo.type;

    if (tipoArchivo === "application/pdf") {
      // Si el archivo es un PDF
      const lectorPDF = new FileReader();

      lectorPDF.addEventListener("load", () => {
        vistaPrevia.innerHTML = `<iframe src="${lectorPDF.result}" width="100%" height="500px"></iframe>`;
      });

      lectorPDF.readAsDataURL(archivo);
    } else if (
      tipoArchivo === "application/msword" ||
      tipoArchivo ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      // Si el archivo es un documento de Word
      const lectorDoc = new FileReader();

      lectorDoc.addEventListener("load", () => {
        vistaPrevia.innerHTML = `<embed src="${lectorDoc.result}" width="100%" height="500px" type="application/msword" />`;
      });

      lectorDoc.readAsDataURL(archivo);
    } else if (tipoArchivo === "image/jpeg" || tipoArchivo === "image/png") {
      // Si el archivo es una imagen
      const lectorImagen = new FileReader();

      lectorImagen.addEventListener("load", () => {
        vistaPrevia.innerHTML = `<img src="${lectorImagen.result}" width="100%" />`;
      });

      lectorImagen.readAsDataURL(archivo);
    } else {
      // Si el archivo no es compatible
      vistaPrevia.innerHTML = "Este tipo de archivo no es compatible.";
    }
  });
  return (
    <>
        <legend>Importar archivo</legend>
        <input
          type="file"
          className="files"
          id="archivo"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        />
        <div id="vista-previa"></div>
      </>
  )
}

export default Importar