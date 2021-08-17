import { DayCell, WorkDayCell } from "./utils";

const DivBody = () => {
  return (
    <div className="flex justify-center text-gray-300 font-semibold">
      <div className="w-full max-w-xl h-full max-h-screen bg-gray-800 grid grid-cols-12">
        {/* Habits Col / Left Section */}
        <div className="col-span-4">
          <div className="h-12 my-1 bg-gray-800 flex justify-center items-center">
            &nbsp;
          </div>
          <div className="h-12 my-1 bg-gray-700 flex justify-center items-center">
            ورد استغفار
          </div>
          <div className="h-12 my-1 bg-gray-700 flex justify-center items-center">
            ورد الصلاة على النبي
          </div>
          <div className="h-12 my-1 bg-gray-700 flex justify-center items-center">
            ورد التوحيد
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-8">
          <div className="grid grid-rows-6  overflow-auto">
            {/* Dates row */}
            <div className="row-span-1">
              <div className="w-full h-12 my-1 bg-gray-800 flex">
                <DayCell day="MON" date="16" />
                <DayCell day="SUN" date="15" />
                <DayCell day="SAT" date="14" />
                <DayCell day="FRI" date="13" />
                <DayCell day="THU" date="12" />
                <DayCell day="WED" date="11" />
                <DayCell day="TUE" date="10" />
                <DayCell day="MON" date="9" />
                <DayCell day="SUN" date="8" />
                <DayCell day="SAT" date="7" />
              </div>

              <div className="w-full h-12 my-1 bg-gray-700 flex">
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={true} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={true} />
                <WorkDayCell done={false} />
              </div>

              <div className="w-full h-12 my-1 bg-gray-700 flex">
                <WorkDayCell done={true} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={true} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
              </div>

              <div className="w-full h-12 my-1 bg-gray-700 flex">
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={true} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
                <WorkDayCell done={true} />
                <WorkDayCell done={false} />
                <WorkDayCell done={false} />
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
