import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const SearchBar = () => {
  const router = useRouter();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const navigator = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else if (min == max) {
      toast.error(
        "Your Max price should'nt be smaller or equal to your Min Price ! ",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } else {
      toast.error("You Must Enter both Min Price and Max Price !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="w-full px-5 py-10 mt-[-80px] mb-20 ">
      <h2 className="text-center mb-[-60px] text-xl">
        Find a Car That Fits your Budget
      </h2>
      <div className="flex lg:w-[60%] w-[99%] flex-col lg:flex-row items-center justify-center gap-2 mx-auto bg-white shadow-2xl border-2 border-gray-300 pt-24 pb-16 rounded-xl ">
        <div className="flex gap-5 flex-col mx-auto w-80">
          <div className="flex items-center justify-start gap-2 w-full">
            <input
              value={min}
              onChange={(e) => setMin(e.target.value)}
              placeholder="From"
              type="number"
              className="border-2 border-blue-500 p-2 rounded-md text-black w-[80%] mx-auto"
            />
          </div>
          <div className="flex items-center justify-start gap-2 w-full">
            <input
              value={max}
              onChange={(e) => setMax(e.target.value)}
              type="number"
              placeholder="To"
              className="border-2 border-blue-500 p-2 rounded-md text-black w-[80%] mx-auto "
            />
          </div>
        </div>
        <button
          onClick={navigator}
          type="submit"
          className="bg-blue-200 px-6 py-3 text-lg lg:px-4 lg-py-2 lg:text-md rounded-md mt-10 lg:mt-0 lg:mr-32 "
        >
          Search
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default SearchBar;
