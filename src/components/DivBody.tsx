const DivBody = () => {
  return (
    <div className="flex justify-center text-gray-300 font-semibold">
      <div className="w-full max-w-xl h-full max-h-screen bg-gray-800 grid grid-cols-12">
        {/* Habits Col / Left Section */}
        <div className="col-span-4">
          <div className="h-12 my-1 bg-gray-700 flex justify-center items-center">
            &nbsp;
          </div>
          <div className="h-12 my-1 bg-gray-700 flex justify-center items-center">
            ورد استغفار
          </div>
          <div className="h-12 my-1 bg-gray-700 flex justify-center items-center">
            ورد الصلاة على النبي
          </div>
          <div className="h-12 my-1 bg-gray-700 flex justify-center items-center">
            ورد استغفار
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-8">
          <div className="grid grid-rows-6  overflow-auto">
            {/* Dates row */}
            <div className="row-span-1">
              <div className="w-full h-12 my-1 bg-gray-700 flex">
                <span className="w-12 text-center">
                  MON
                  <br />
                  16
                </span>
                <span className="w-12 text-center">
                  SUN
                  <br />
                  15
                </span>
                <span className="w-12 text-center">
                  SAT
                  <br />
                  14
                </span>
                <span className="w-12 text-center">
                  FRI
                  <br />
                  13
                </span>
                <span className="w-12 text-center">
                  THU
                  <br />
                  12
                </span>
                <span className="w-12 text-center">
                  WED
                  <br />
                  11
                </span>
                <span className="w-12 text-center">
                  TUE
                  <br />
                  10
                </span>
                <span className="w-12 text-center">
                  MON
                  <br />9
                </span>
                <span className="w-12 text-center">
                  SUN
                  <br />8
                </span>
                <span className="w-12 text-center">
                  SAT
                  <br />7
                </span>
              </div>

              <div className="w-full h-12 my-1 bg-gray-700 flex">
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
              </div>

              <div className="w-full h-12 my-1 bg-gray-700 flex">
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
              </div>

              <div className="w-full h-12 my-1 bg-gray-700 flex">
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
                <span className="w-12 flex items-center justify-center">x</span>
              </div>
            </div>

            {/* Checkboxs side */}
            <div className="row-span-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivBody;
