import Link from "next/link"

export default function Copyright() {
  return (
    <>
      <span>
        Copyright &copy; {new Date().getFullYear()}・
        <Link href="https://zhenyuan.dev/">Zhenyuan 工作室</Link>. All Rights{" "}
        Reserved.
      </span>
    </>
  )
}
