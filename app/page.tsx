import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello, This is the main Page</h1>
      <br />
      <Link href = "/header">Header Page</Link>
      <hr />
      <Link href = "/about">About Page</Link>
    </div>
  );
}
