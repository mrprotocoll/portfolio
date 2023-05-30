"use client";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    return (
        <header class="header-area">
            <div class="gx-row d-flex align-items-center justify-content-between">
                <Link href="/" className="flex gap-2 flex-center">
                    <Image 
                    src="/assets/images/logo.png" 
                    alt="Mrprotocoll portfolio logo" 
                    width={200} 
                    height={50} 
                    className="object-contain" />
                </Link>

                <nav class="navbar">
                    <ul class="menu">
                        <li className="active"><Link href="/">About</Link></li>
                        <li><Link href="/">Works</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                    <Link href="/contact" className="theme-btn">Let's talk</Link>
                </nav>

                <Link href="/contact" className="theme-btn">Let's talk</Link>

                <div class="show-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Nav;