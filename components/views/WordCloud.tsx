import React from "react";
import TagCloud from "@frank-mayer/react-tag-cloud";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"
import type { TagCloudOptions } from "@frank-mayer/react-tag-cloud";

const Skills = [
    "VSCode",
    "JavaScript",
    "TypeScript",
    "React",
    "ESLint",
    "Next",
    "Node",
    "Express",
    "MongoDB",
    "Firebase",
    "Framer Motion",
    "TailwindCSS",
    "Solidity",
    "Web3",
    "Truffle",
    "Ethers.js",
    "Git",
    "GitHub",
];

export default function WordCloud () {
    return (
        <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
                radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                maxSpeed: "fast",
            })}
            onClick={(tag: string, ev: MouseEvent) => alert(tag)}
            onClickOptions={{ passive: true }}
            className="select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white font-semibold w-96 h-96"
        >
            {Skills}
        </TagCloud>
    )
}