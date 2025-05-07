import "../Header.css";
import reactLogo from "../assets/react.svg";

function Header() {
  return (
    <div className="header">
      <h1 className="text-[23px] text-white-900 font-bold ">
        <img src={reactLogo} alt="" />
        Header is coming from the Header.jsx file components
      </h1>
    </div>
  );
}

export default Header;

export let click = () => {
  return alert("I'm clicked");
};

export function Card() {
  return (
    <>
      <div className="flex">
        <div className="m-4 max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img
            className="w-full"
            src="https://images.pexels.com/photos/31223301/pexels-photo-31223301/free-photo-of-dramatic-tokyo-skyline-at-twilight-with-tokyo-tower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Nature"
          />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">Nature</h2>
            <p className="text-gray-700 text-base">
              This is a beautiful nature scene.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
              #nature
            </span>
            <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
              #forest
            </span>
          </div>
        </div>

        <div className="m-4 max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img
            className="w-full"
            src="https://images.pexels.com/photos/31223301/pexels-photo-31223301/free-photo-of-dramatic-tokyo-skyline-at-twilight-with-tokyo-tower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Nature"
          />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">Nature</h2>
            <p className="text-gray-700 text-base">
              This is a beautiful nature scene.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
              #nature
            </span>
            <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
              #forest
            </span>
          </div>
        </div>

        <div className="m-4 max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img
            className="w-full"
            src="https://images.pexels.com/photos/31223301/pexels-photo-31223301/free-photo-of-dramatic-tokyo-skyline-at-twilight-with-tokyo-tower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Nature"
          />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">Nature</h2>
            <p className="text-gray-700 text-base">
              This is a beautiful nature scene.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
              #nature
            </span>
            <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
              #forest
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
