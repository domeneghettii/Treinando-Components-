"use client"; // This is a client component

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/pagina");
    }, [router]);
	
return (
	<p>Redirecting …</p>
);
}
