"use client";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    return (
        <header className="header-area">
            <div className="gx-row d-flex align-items-center justify-content-between">
                <Link href="/" className="flex gap-2 flex-center position-relative logo">
                    <Image 
                    src="/assets/images/logo.png" 
                    alt="Mrprotocoll portfolio logo" 
                    fill
                    className="object-contain" />
                </Link>

                <nav className="navbar">
                    <ul className="menu">
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/project">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    <Link href="/contact" className="theme-btn">Let&apos;s talk</Link>
                </nav>

                <Link href="/contact" className="theme-btn">Let&apos;s talk</Link>

                <div className="show-menu">
                 <Link href="/contact" className="theme-btn">Let&apos;s talk</Link>
                </div>
            </div>
        </header>
    );
}

export default Nav;