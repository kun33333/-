const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-blue-500">Let's Chat</span>
        </h1>

        <form>
          <div>
            <label className="lable p-2">
              <span className="text-base label-text">用户名</span>
            </label>
            <input
              type="text"
              placeholder="请输入用户名"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="lable p-2">
              <span className="text-base label-text">密码</span>
            </label>
            <input
              type="password"
              placeholder="请输入密码"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            创建账号
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">登录</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
