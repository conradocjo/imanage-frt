'use client';

import { signOut } from "next-auth/react";

export default function Logout() {
    return <>
        <button className="btn btn-outline" onClick={() => signOut()}>
            Sair
        </button>
    </>
}