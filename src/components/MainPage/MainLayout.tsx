import { DayCell, HabitTitle, WorkDayCell } from "../utils & smaller components ";

const MainLayout:React.FC = () => {
  return (
    <div className="h-5/6 flex justify-center text-gray-300 font-semibold">
      <div className="w-full max-w-xl max-h-screen bg-gray-800 grid grid-cols-12">
        {/* Habits Col / Left Section */}
        <div className="col-span-4">
          <div className="h-12 my-1 bg-gray-800 flex justify-center items-center">
            &nbsp;
          </div>
          <HabitTitle title="ورد استغفار" />
          <HabitTitle title="ورد الصلاة على النبي" />
          <HabitTitle title="ورد التوحيد" />
        </div>

        {/* Right Section */}
        <div className="col-span-8">
          <div className="grid grid-rows-6 overflow-auto">
            {/* Dates row */}
            <div className="row-span-1">
              <div className="w-full h-12 my-1 bg-gray-800 flex">
                <DayCell date="Wed Aug 18 2021" />
                <DayCell date="Tue Aug 17 2021" />
                <DayCell date="Mon Aug 16 2021" />
                <DayCell date="Sun Aug 15 2021" />
                <DayCell date="Sat Aug 14 2021" />
              </div>

              <div className="w-full h-12 my-1 bg-gray-700 flex">
                <WorkDayCell done={false} date="Wed Aug 18 2021" />
                <WorkDayCell done={false} date="Tue Aug 17 2021" />
                <WorkDayCell done={false} date="Mon Aug 16 2021" />
                <WorkDayCell done={true} date="Sun Aug 15 2021" />
                <WorkDayCell done={false} date="Sat Aug 14 2021" />
              </div>

              <div className="w-full h-12 my-1 bg-gray-700 flex">
                <WorkDayCell done={true} date="Wed Aug 18 2021" />
                <WorkDayCell done={false} date="Tue Aug 17 2021" />
                <WorkDayCell done={false} date="Mon Aug 16 2021" />
                <WorkDayCell done={true} date="Sun Aug 15 2021" />
                <WorkDayCell done={false} date="Sat Aug 14 2021" />
              </div>

              <div className="w-full h-12 my-1 bg-gray-700 flex">
                <WorkDayCell done={false} date="Wed Aug 18 2021" />
                <WorkDayCell done={false} date="Tue Aug 17 2021" />
                <WorkDayCell done={false} date="Mon Aug 16 2021" />
                <WorkDayCell done={false} date="Sun Aug 15 2021" />
                <WorkDayCell done={true} date="Sat Aug 14 2021" />
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

export default MainLayout;
