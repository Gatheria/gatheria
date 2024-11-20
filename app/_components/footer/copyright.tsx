import Link from "next/link"

export default function Copyright() {
  return (
    <>
      <span>
        Copyright &copy; {new Date().getFullYear()}・
        <Link href="https://zhenyuan.dev/">Zhenyuan Studio</Link>. All Rights{" "}
        Reserved.
      </span>
    </>
  )
}
