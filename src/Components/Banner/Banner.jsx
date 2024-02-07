import { Link } from "react-router-dom";

export default function Banner({image,tittle,text,route}) {
  return (
    <div className="relative">
        <img className="w-full h-[480px] object-cover" src={image} />
        <div className="absolute text-center top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30 p-4">
          <Link
            to="/"
            className="absolute top-24 left-4 bg-black bg-opacity-30 text-white px-4 py-2 rounded-full"
          >
            Home {" > "}
            <span className="text-gray-400">{route}</span>
          </Link>

          <h1 className="text-2xl sm:text-4xl mt-24 mb-2 w-[80%]">
            {tittle}
          </h1>
          <p className="text-base sm:text-lg w-[80%]">
          {text}
          </p>
        </div>
      </div>
  )
}
