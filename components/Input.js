import { useState, useRef } from "react";
import { PhotographIcon, XIcon } from "@heroicons/react/outline";

function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePicker = useRef()

  const addImageToPost = (event) => { }

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}
    >
      <img
        src="https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg"
        alt="user-icon"
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="2"
            placeholder="What's happening?"
            className="bg-transparent outline-none text-lg text-[#d9d9d9] placeholder-gray-500 w-full tracking-wide min-h-[50px]"
          />

          {selectedFile && (
            <div className="relative">
              <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer" onClick={() => setSelected(null)} >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
              <div onClick={() => filePicker.current.click()}>
                <PhotographIcon className="h-[22px] text-[#ad9bf0]" />
                <input type="file" hidden onChange={addImageToPost} ref={filePicker} />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
