// Overview: Component to render background in component title

import React from 'react'

const ComponentTitleEditor = ({ title }) => {
    const words = title.split(' ');


    return (
        <h1 className="font-semibold mt-10 p-1">
            {words.map((word, index) => {
                if (word.startsWith('"') && word.endsWith('"')) {
                    return (
                        <span key={index} className="bg-gray-600 px-2 rounded-md mr-2 text-white">
                            {word}
                        </span>
                    );
                } else {
                    return <span key={index}>{word} </span>;
                }
            })}
        </h1>
    )
}

export default ComponentTitleEditor