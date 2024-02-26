import React from "react";
import GenderCheckbox from "./GenderCheckbox";
const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">真实姓名</span>
            </label>
            <input
              type="text"
              placeholder="请输入姓名"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">用户名</span>
            </label>
            <input
              type="text"
              placeholder="请输入用户名"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">密码</span>
            </label>
            <input
              type="password"
              placeholder="请输入密码"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">确认密码</span>
            </label>
            <input
              type="password"
              placeholder="确认密码"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox></GenderCheckbox>
          <a
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            href="#"
          >
            已有账户
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              注册
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
