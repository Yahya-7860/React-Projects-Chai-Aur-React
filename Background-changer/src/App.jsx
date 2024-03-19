import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-500 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
        <div className="flex flex-wrap gap-4 justify-center bg-white rounded-2xl px-4 py-3 shadow-md">
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("red");
            }}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Red
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("Green");
            }}
            style={{ backgroundColor: "Green", color: "white" }}
          >
            Green
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("Blue");
            }}
            style={{ backgroundColor: "Blue", color: "white" }}
          >
            Blue
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("Yellow");
            }}
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("Olive");
            }}
            style={{ backgroundColor: "Olive", color: "white" }}
          >
            Olive
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("Purple");
            }}
            style={{ backgroundColor: "Purple", color: "white" }}
          >
            Purple
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("Orange");
            }}
            style={{ backgroundColor: "Orange", color: "white" }}
          >
            Orange
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("lavender");
            }}
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("Pink");
            }}
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("Brown");
            }}
            style={{ backgroundColor: "Brown", color: "white" }}
          >
            Brown
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("Crimson");
            }}
            style={{ backgroundColor: "Crimson", color: "white" }}
          >
            Crimson
          </button>
          <button
            className="outline-none rounded-xl px-4 py-1 shadow-md"
            onClick={() => {
              setcolor("Black");
            }}
            style={{ backgroundColor: "Black", color: "white" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
