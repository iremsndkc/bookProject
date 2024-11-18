import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCart = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt?.id}`);
  };

  return (
    <div className="w-[260px] h-[260px] relative m-2 rounded-lg shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 hover:scale-105 transition-transform duration-300">
      <img
        src={dt?.url}
        alt="product"
        className="w-full h-full object-contain rounded-t-lg p-4"
      />
      <div className="absolute left-0 bottom-0 bg-purple-800/90 text-white w-full px-4 py-3 rounded-b-lg">
        <div className="text-md font-semibold">{dt?.name}</div>{" "}
        {/* text-lg'den text-md'ye düşürdük */}
        <div className="text-sm font-light">{dt?.price}$</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-3 right-3 cursor-pointer shadow-md p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
      >
        <BsThreeDots color="#555" size={20} />
      </div>
      {openEdit && (
        <div className="bg-white border border-gray-300 text-gray-800 absolute top-14 p-4 text-sm right-3 rounded-md shadow-md">
          <div
            onClick={() => dispatch(deleteDataFunc(dt?.id))}
            className="cursor-pointer hover:text-red-500 transition-colors"
          >
            Sil
          </div>
          <div
            onClick={updateFunc}
            className="cursor-pointer mt-2 hover:text-blue-500 transition-colors"
          >
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCart;
