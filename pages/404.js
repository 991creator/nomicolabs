import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navi from "../components/navi";

export default function Wrong () {
    const [state, setState] = useState(0);

    const handleNav = () => {
    setState(!state);
    }
    return (
        <>
    <div className="flex flex-col h-screen w-screen justify-center items-center">
        <div>
        <p className="text-3xl md:text-7xl">NOMICO</p>
        <p className="text-3xl md:text-7xl text-orange-500">#404</p>
        <p className="text-3xl md:text-7xl">LABS</p>
        </div>
    </div>
        </>
    );
}