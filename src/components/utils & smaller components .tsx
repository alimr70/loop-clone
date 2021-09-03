import { useRef, useState } from "react";
import { MenuItemProps, MenuProps } from "../interfaces";

// export const sortDates = (dates: string[]) => {
//   let datesTimes = dates.map((el) => {
//     return new Date(el).getTime();
//   });

//   let sortedTimes = datesTimes.sort((date1, date2) => {
//     return date1 > date2 ? -1 : date2 > date1 ? 1 : 0;
//   });

//   let sortedDates = sortedTimes.map((el) => {
//     return new Date(el).toDateString();
//   });

//   return sortedDates;
// };

export const generate30Days = (startDate: number) => {
  let daysArr: number[] = [];

  let todayDate = new Date().setHours(0, 0, 0, 0);
  if (startDate === todayDate) {
    daysArr.push(startDate);
  }
  // startDate === todayDate ? daysArr.push(startDate) : "";

  for (let i = 0; i <= 60; i++) {
    if (daysArr.length) {
      daysArr.push(daysArr[daysArr.length - 1] - 86400000);
    } else {
      daysArr.push(startDate - 86400000);
    }
  }

  let dates = daysArr.map((el) => new Date(el).toDateString());

  return dates;
};

export const Icon: React.FC<{ iconName: string }> = ({ iconName }) => {
  const icons: any = {
    plus: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    ),

    filter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
          clipRule="evenodd"
        />
      </svg>
    ),

    menu: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    ),

    back: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    ),

    edit: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
    ),

    color: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return <>{icons[iconName]}</>;
};

export const Menu: React.FC<MenuProps> = ({parent, children}) => {
  let parentPosition = parent.current?.getBoundingClientRect();
  return (
    <div style={{top: parentPosition?.bottom, right: document.documentElement.offsetWidth - parentPosition?.right!}} className="absolute bg-gray-500 text-gray-300 rounded-md flex items-start justify-center flex-col">
      {children}
    </div>
  );
}

export const MenuItem: React.FC<MenuItemProps> = ({title, onClickFn, children}) => {
  return (
    <div
      className="w-full flex p-2 rounded-md cursor-pointer hover:bg-gray-400"
      onClick={onClickFn}>
        {children}
        <p>&nbsp;{title}</p>
    </div>
  );
}

export const MenuBtn: React.FC<{iconName: string}> = ({children, iconName}) => {
  const MenuParent = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div
        ref={MenuParent}
        className="p-2 cursor-pointer"
        onClick={() => setOpenMenu(!openMenu)}>
        <Icon iconName={iconName} />
      </div>
      {openMenu ? <Menu parent={MenuParent}>
        {children}
      </Menu> : ""}
    </>
  );
};