function Input() {
  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
      <img src="https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg" className="h-11 w-11 rounded-full cursor-pointer" alt="user-icon" />
      <div className="w-full divide-y divide-gray-700">
        <div >
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  )
}

export default Input
