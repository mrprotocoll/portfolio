"use client";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    return (
        <header class="container">
            <div class="header-area">
                <div class="gx-row d-flex align-items-center justify-content-between">
                    <Link href="/" className="flex gap-2 flex-center">
                        <Image 
                        src="/assets/images/logo.svg" 
                        alt="Mrprotocoll portfolio logo" 
                        width={30} 
                        height={30} 
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
                    {/* <a href="contact.html" class="theme-btn">Let's talk</a> */}

                    <div class="show-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Nav;