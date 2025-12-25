import { useState, useEffect } from 'react'
import styles from './SDE.module.css'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const SDE = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfWidth, setPdfWidth] = useState(800);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onItemClick({ pageNumber: nextPage }) {
    setPageNumber(nextPage);
  }

  const changePage = (offset) => setPageNumber(prevPage => prevPage + offset);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 480) {
        setPdfWidth(300); 
      } else if (width < 768) {
        setPdfWidth(400);
      } else if (width < 1024) {
        setPdfWidth(700);
      } else if (width < 1200){
        setPdfWidth(800);
      } else {
        setPdfWidth(1000)
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Software Development Essentials</h1>
          <p className={styles.description}>My pdf
            <a
              href="/assets/main.pdf"
              target="_blank"
              rel="noopener noreferrer">
              notes
            </a>
            (made with with LaTeX):
          </p>

          <div className={styles.pdfContainer}>
            <Document file="/assets/main.pdf" onLoadSuccess={onDocumentLoadSuccess} onItemClick={onItemClick} className={styles.document}>
              <Page width={pdfWidth} pageNumber={pageNumber} renderAnnotationLayer={true} renderTextLayer={true} renderMode="svg" />
            </Document>

            <div className={styles.controls}>
              <button disabled={pageNumber <= 1} onClick={() => changePage(-1)} className={styles.button}>Back</button>
              <span>Page {pageNumber} of {numPages}</span>
              <button disabled={pageNumber >= numPages} onClick={() => changePage(1)} className={styles.button}>Next</button>
            </div>
          </div>

        </div>
      </div >
    </>
  )
}

export default SDE
