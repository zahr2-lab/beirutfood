import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/menu">
        <a>Menu</a>
      </Link>
    </div>
  );
}
