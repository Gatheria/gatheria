import Link from "next/link"

export default function NavBar() {
  return (
    <>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </>
  )
}
