import Link from "next/link"

export default function NavBar() {
  const navItems = [{ name: "", link: "" }]
  return (
    <>
      <nav>
        {navItems.map((item, index) => (
          <Link href={item.link} key={index}>
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  )
}
