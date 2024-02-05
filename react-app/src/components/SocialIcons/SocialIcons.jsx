import React from "react";

export default function SocialIcons({Icons}) {
    return <div className="text-teal-500">
        {Icons.map(icon=>(
            <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-grey-700 mx-1.5 text-xl hover:text-grey-100 hover:bg-teal-500 duration-300">
                <ion-icon name={icon.name}></ion-icon>
            </span>
        ))}
        </div>
}