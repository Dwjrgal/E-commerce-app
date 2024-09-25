import React from "react";
import { ProgressBar } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="w-40 h-40 flex justify-center mx-auto">
     {/* render(<ProgressBar
  visible={true}
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />) */}
      <p className="text-xs">Түр хүлээнэ үү...</p>
    </div>
  );
};

export default Loader;
