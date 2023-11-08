import React from "react";

function PDFViewer() {
  return (
    <div className="w-full max-w-screen-xl mx-auto h-screen p-8">
      <object
        data="./ChiCheColinWuResume.pdf"
        type="application/pdf"
        class="w-full h-full relative"
      ></object>
    </div>
  );
}

export default PDFViewer;
