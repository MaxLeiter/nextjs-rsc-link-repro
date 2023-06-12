import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Link href="/test">
      Link to <code>pages</code>
    </Link>
  </>
  )
}
