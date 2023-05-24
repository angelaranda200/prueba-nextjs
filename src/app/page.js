
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

// import CssBaseline from '@mui/material/CssBaseline';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


export default function Home() {
  return (
    <>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <a href='/candidato'>Candidato</a>
        </h1>
        <h1 className={styles.title}>
          Ir a <a href='/detalle'>detalle</a>
        </h1>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        
      </main>
    </>
   
    
  )
}
