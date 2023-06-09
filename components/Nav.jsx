"use client";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    return (
        <header className="header-area">
            <div className="gx-row d-flex align-items-center justify-content-between">
                <Link href="/" className="flex gap-2 flex-center">
                    <Image 
                    src="/assets/images/logo.png" 
                    alt="Mrprotocoll portfolio logo" 
                    width={200} 
                    height={50}
                    layout="responsive" 
                    className="object-contain" />
                </Link>

                <nav className="navbar">
                    <ul className="menu">
                        <li className="active"><Link href="/">About</Link></li>
                        <li><Link href="/">Works</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                    <Link href="/contact" className="theme-btn">Let's talk</Link>
                </nav>

                <Link href="/contact" className="theme-btn">Let's talk</Link>

                <div className="show-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Nav;