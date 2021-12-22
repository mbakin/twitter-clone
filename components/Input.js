import { useState } from "react";

function Input() {
  const [input, setInput] = useState("");

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}
    >
      <img
        src="https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg"
        alt="user-icon" className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="2"
            placeholder="What's happening?"
            className="bg-transparent outline-none text-lg text-[#d9d9d9] placeholder-gray-500 w-full tracking-wide"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Input;
