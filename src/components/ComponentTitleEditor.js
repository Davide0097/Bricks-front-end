// Overview: Component to render background in component title

import React from 'react'

const ComponentTitleEditor = ({ title }) => {
    const words = title.split(' ');


    return (
        <h1 className="font-semibold my-2 p-1">
            {words.map((word, index) => {
                if (word === '"Basico"') {
                    return (
                        <span key={index} className="bg-black px-3 mr-2 text-white">
                            {word}
                        </span>
                    );}
                    if (word === '"Simple"') {
                        return (
                            <span key={index} className="bg-blue-600 px-3 mr-2 rounded-md text-white">
                                {word}
                            </span>
                        );}
                     else if (word.startsWith('"') && word.endsWith('"')) {
                        return (
                            <span key={index} className="bg-gray-600 px-2 rounded-md mr-2 text-white">
                                {word}
                            </span>
                        );}
                                
                    return <span key={index}>{word}</span>;
            })}
        </h1>
    )
}

export default ComponentTitleEditor