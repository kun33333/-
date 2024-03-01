import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "男" ? "selected" : ""
          }`}
        >
          <span className="label-text">男</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "男"}
            onChange={() => onCheckboxChange("男")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "女" ? "selected" : ""
          }`}
        >
          <span className="label-text">女</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "女"}
            onChange={() => onCheckboxChange("女")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
