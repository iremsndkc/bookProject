import { MdPostAdd } from "react-icons/md";
import React from "react";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-purple-400 text-white px-4 py-3">
      <div className="text-3xl">React Uygulama</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select className="h-10 rounded-lg" name="" id="">
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>

        <div>
          <input
            className="h-10 rounded-lg px-4"
            type="text"
            placeholder="Arama Yapınız..."
          />
        </div>

        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-indigo-900 w-10 h-10 rounded-full flex 
        items-center justify-center cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
