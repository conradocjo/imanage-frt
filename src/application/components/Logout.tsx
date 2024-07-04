'use client';

import { signOut } from "next-auth/react";

export default function Logout() {
    return <>
        <a href="#" className="" onClick={() => signOut()}>
            Sair
        </a>
    </>
}