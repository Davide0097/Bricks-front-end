import { Link } from "react-router-dom";

function PageNotFound() {

    return (
        <>
            <div className="pt-[250px]  lg:py-40 2xl:p-40 h-[5570px] md:h-[200px] 2xl:h-[170px]">
                <h3
                    className="uppercase font-bold text-transparent  bg-clip-text bg-gradient-to-r from-pink-600  to-blue-600 text-5xl sm:text-6xl  text-center pt-2 tracking-thight">
                    The page was not found.</h3>
                <Link className="	" to={"/"}>
                    <h3
                        className="uppercase font-bold decoration-gray-200 underline text-transparent md:px-20 h-[270px] md:h-[200px] 2xl:h-[170px] bg-clip-text bg-gradient-to-r from-pink-600  to-blue-600 text-5xl sm:text-6xl  text-center mt-2 tracking-thight">
                        <b>Go back to the home</b>
                    </h3>
                </Link>
            </div>
        </>);
}

export default PageNotFound;