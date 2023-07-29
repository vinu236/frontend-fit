import React from 'react';
import { HiCheck } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PlanActive = () => {
  return (
    <div className="min-h-[88vh] flex flex-col items-center justify-center">
      <div className="text-6xl text-red-500 mb-6">
        <HiCheck />
      </div>
      <p className="text-2xl text-center mb-8 text-white">
        Chat with Your Trainer
      </p>
      <Link
        to={"/chat"}
        className="flex items-center justify-center bg-custom-gym hover:bg-custom-head text-white font-semibold text-lg py-3 px-6 rounded-md transition duration-300"
      >
        Chat with Trainer
        <BsArrowRight className="ml-2 text-xl " />
      </Link>
    </div>
  );
};

export default PlanActive;