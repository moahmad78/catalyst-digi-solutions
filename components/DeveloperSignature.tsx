"use client";

import { useEffect } from "react";

export default function DeveloperSignature() {
    useEffect(() => {
        console.log(
            "%c Developed by Sahil Sheikh %c https://www.instagram.com/sahil_sheikh78/ ",
            "color: #fff; background: #7c3aed; padding: 5px 10px; border-radius: 5px; font-weight: bold;",
            "color: #7c3aed; background: #fff; padding: 5px 10px; border-radius: 5px; border: 1px solid #7c3aed;"
        );
    }, []);

    return (
        <div style={{ display: 'none' }}>
            {/* 
        Developed by Sahil Sheikh
        Instagram: https://www.instagram.com/sahil_sheikh78/
        "Building digital experiences that matter."
      */}
        </div>
    );
}
