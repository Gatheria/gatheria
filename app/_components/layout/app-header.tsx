import Logo from "@/app/_components/header/logo"
import NavBar from "@/app/_components/header/nav-bar"

export default function AppHeader() {
  return (
    <>
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-nav">
        <NavBar />
      </div>
      <div></div>
    </>
  )
}
