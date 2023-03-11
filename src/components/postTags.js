// Overview: component to display tags color depending on the content
// TAILWIND REACT CSS JAVASCRIPT HTML NODEJS

const postTags = ({ post }) => {

    // Function to ger random color
    function getRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    const randomStyle = {
        backgroundColor: getRandomColor()
    }

    const content = post.postHeader.split(' ');

    return (
        <div className="grid grid-cols-4 my-2">
            {content.map(substring => {
                let element;
                if (substring === 'tailwind') {
                    element = <button key={substring} className="font-semibold text-sm text-white rounded-md py-1 bg-red-600  px-2 m-1">TAILWIND</button>;
                } else if (substring === 'react') {
                    element = <button key={substring} className="font-semibold text-sm text-white rounded-md px-2 bg-blue-600 py-1 m-1">REACT</button>;
                }
                else if (substring === 'css') {
                    element = <button key={substring} className="font-semibold text-sm text-white rounded-md px-2 bg-green-600 py-1 m-1">CSS</button>;
                }
                else if (substring === 'javascript') {
                    element = <button key={substring} className="font-semibold text-sm text-white rounded-md px-2 bg-green-600 py-1 m-1">JAVASCRIPT</button>;
                }
                else if (substring === 'html') {
                    element = <button key={substring} className="font-semibold text-sm text-white rounded-md px-2 bg-pink-600 py-1 m-1">HTML</button>;
                }
                else if (substring === 'nodejs') {
                    element = <button key={substring} className="font-semibold text-sm text-white rounded-md px-2 bg-yellow-600 py-1 m-1">NODEJS</button>;
                } else {
                    const randomStyle = {
                        backgroundColor: getRandomColor()
                    };
                    element = <button key={substring} style={randomStyle} className="uppercase font-semibold text-sm text-white rounded-md px-2 py-1 m-1">{substring}</button>;
                }
                return element;
            })}
        </div>
    );
};

export default postTags;
