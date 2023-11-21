import React from "react"import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { Menu } from '../componentes/Menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Livros Next</title>
        <meta name="description" content="Projeto em nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu></Menu>
      <main className={styles.main}>
        <h1 className={styles.title}>Livros Next</h1>
      </main>
    </>
  )
}
