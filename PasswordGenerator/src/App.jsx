import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [charAllowed, setcharAllowed] = useState(false);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passRef = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYzabcdefghijklmnopqrstuvwxyz";

    if (charAllowed) string += "@#$#%^&^^)){}{[][]_()*&^{&(}";
    if (numberAllowed) string += "0123456789";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(index);
    }
    setpassword(pass);
  }, [length, charAllowed, numberAllowed, setpassword]);

  const CopyToClipboard = () => {
    passRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordgenerator();
  }, [length, charAllowed, numberAllowed, passwordgenerator]);

  return (
    <>
      <div className=" w-full max-w-md mx-auto rounded bg-gray-500 text-white px-4 py-4 my-8  ">
        <h1 className=" text-center">Random Password Generator</h1>
        <div className="flex w-full rounded-2lg px-3 py-3 ">
          <input
            type="text"
            value={password}
            placeholder="Search"
            className="rounded-lg px-4 py-2 w-full outline-none border-none text-black"
            readOnly
            ref={passRef}
          />
          <button
            className=" bg-blue-700 rounded-lg px-3 active:bg-blue-800"
            onClick={CopyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="w-full flex justify-center text-white">
          <input
            type="range"
            min={8}
            max={25}
            value={length}
            className=" cursor-pointer "
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label className="ml-2">Length : {length}</label>

          <div className="flex items-center mx-3">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label className="mx-1">Symbol</label>
          </div>
          <div className="flex items-center ">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label className="mx-1">Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
