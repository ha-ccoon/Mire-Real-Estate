const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">미래 합동 공인중개사무소</h1>
      </div>
      <div className="w-[690px] h-[570px] bg-white border-2 border-black rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center mb-10">
          <span className="text-blue-500">Manager</span>{' '}
          <span className="text-black">LOGIN</span>
        </h1>
        <div className="mb-5">
          <input
            type="text"
            id="username"
            className="w-[400px] h-[60px] border border-gray-300 p-2 rounded focus:outline-none"
            placeholder="아이디"
          />
        </div>
        <div className="mb-12">
          <input
            type="password"
            id="password"
            className="w-[400px] h-[60px] border border-gray-300 p-2 rounded focus:outline-none"
            placeholder="비밀번호"
          />
        </div>
        <button className="w-[400px] h-[60px] bg-gray-800 text-white py-2 rounded-full hover:bg-gray-700">
          로그인
        </button>
      </div>
    </div>
  )
}

export default Page
