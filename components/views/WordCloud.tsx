import React from "react";
import TagCloud from "@frank-mayer/react-tag-cloud";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"
import type { TagCloudOptions } from "@frank-mayer/react-tag-cloud";

export default function WordCloud ({ skills }: { skills: string[] }) {

    return (
        <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
                radius: Math.min(666, w.innerWidth, w.innerHeight) / 2,
                maxSpeed: "fast",
            })}
            onClick={(tag: string, ev: MouseEvent) => alert(tag)}
            onClickOptions={{ passive: true }}
            className="select-none z-10 text-gray-400 font-semibold w-max h-max"
        >
            {skills}
        </TagCloud>
    )
}