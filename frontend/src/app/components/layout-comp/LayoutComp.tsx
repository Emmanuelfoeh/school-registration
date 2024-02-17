import Link from "next/link";
import style from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${style.mainContainer}`}>
      <aside className={`${style.sidebar}`}>
        <div className="flex flex-col pl-6 ">
          <h1 className="py-2 text-white text-4xl">IWINS</h1>
          <nav className="flex flex-col gap-5 mt-16 text-white">
            <Link href={"/"} className="font-bold text-lg">
              Home
            </Link>
            <Link href={"/profile"} className="font-bold text-lg">
              Profile
            </Link>
            <Link href={"/"} className="font-bold text-lg">
              Contact
            </Link>
          </nav>
        </div>
      </aside>
      <div className={`${style.headerMain}`}>
        <header className={`${style.header}`}> header</header>
        <div className={`${style.content}`}>{children}</div>
      </div>
    </main>
  );
}
