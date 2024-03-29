
"use client";

import React from 'react';
import Link from "next/link";
import {ModeToggle} from "@/app/components/ModeToggle";

function Navbar() {
    const handleClick = () => {
        alert('测试');
    };
    return (
        <div className='w-full relative flex  items-center justify-between max-w-3xl mx-auto px-4 py-5'>
            <Link href="/" className="font-bold text-3xl">
                Marshal <span className="text-primary">Blog</span>
            </Link>

            <div className="flex items-center gap-x-4">
                <Link href="/about" >About</Link>
                <Link href="/contact" >Contact</Link>
                <Link href="" onClick={handleClick}>Button Test</Link>
                <ModeToggle />
            </div>
        </div>
    );
}

export default Navbar;