import { useState, useEffect } from 'react'
import styles from './DSA2.module.css'
import { Document, Page, pdfjs } from 'react-pdf'
import TriangleIcon from '../../../assets/triangle.svg?react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import pdfNotes from './dsa2.pdf'

import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker

const DSA2 = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [pdfWidth, setPdfWidth] = useState(800)
  const [pageText, setPageText] = useState(pageNumber)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  function onItemClick({ pageNumber: nextPage }) {
    setPageNumber(nextPage)
  }

  const changePage = (offset) => setPageNumber(prevPage => prevPage + offset)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width < 480) {
        setPdfWidth(300)
      } else if (width < 768) {
        setPdfWidth(400)
      } else if (width < 1024) {
        setPdfWidth(700)
      } else if (width < 1200) {
        setPdfWidth(800)
      } else if (width < 1600) {
        setPdfWidth(900)
      } else {
        setPdfWidth(1000)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setPageText(pageNumber)
  }, [pageNumber])

  const pageChange = (event) => {
    setPageText(event.target.value)
  }

  const moveToPage = (event) => {
    event.preventDefault()
    document.activeElement.blur()

    const targetPage = parseInt(pageText)
    if (targetPage >= 1 && targetPage <= numPages) {
      setPageNumber(targetPage)
    } else {
      setPageText(pageNumber)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Data Structures and Algorithms 2</h1>
          <h3 className={styles.description}>My PDF
            <a
              href={pdfNotes}
              target="_blank"
              rel="noopener noreferrer">
              notes
            </a>
            (last update: initial class layout):
          </h3>

          <div className={styles.pdfContainer}>
            <div className={styles.controls}>
              <button disabled={pageNumber <= 1} onClick={() => changePage(-1)} className={styles.button}>
                <TriangleIcon className={styles.triangle} style={{ transform: "rotate(-90deg)" }} fill="currentColor" />
              </button>
              <form onSubmit={moveToPage}>
                <span className={styles.pageNumberText}>Page
                  <input type="text" name="pageNumber" value={pageText} onChange={pageChange} className={styles.pageInput}></input>
                  / {numPages}
                </span>
              </form>
              <button disabled={pageNumber >= numPages} onClick={() => changePage(1)} className={styles.button}>
                <TriangleIcon className={styles.triangle} style={{ transform: "rotate(90deg)" }}></TriangleIcon>
              </button>
            </div>

            <Document file={pdfNotes} onLoadSuccess={onDocumentLoadSuccess} onItemClick={onItemClick} className={styles.document}>
              <Page width={pdfWidth} pageNumber={pageNumber} renderAnnotationLayer={true} renderTextLayer={true} renderMode="svg" />
            </Document>

            <div className={styles.controls}>
              <button disabled={pageNumber <= 1} onClick={() => changePage(-1)} className={styles.button}>
                <TriangleIcon className={styles.triangle} style={{ transform: "rotate(-90deg)" }} fill="currentColor" />
              </button>
              <form onSubmit={moveToPage}>
                <span className={styles.pageNumberText}>Page
                  <input type="text" name="pageNumber" value={pageText} onChange={pageChange} className={styles.pageInput}></input>
                  / {numPages}
                </span>
              </form>
              <button disabled={pageNumber >= numPages} onClick={() => changePage(1)} className={styles.button}>
                <TriangleIcon className={styles.triangle} style={{ transform: "rotate(90deg)" }}></TriangleIcon>
              </button>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}

export default DSA2
