import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><Link href="/">Home</Link></li>
//         <li><Link href="/books">Books</Link></li>
//         <li><Link href="/about">About</Link></li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar