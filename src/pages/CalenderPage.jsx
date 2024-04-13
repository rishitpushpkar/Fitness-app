import rightArrow from "../assets/rightArrow.svg";
import leftArrow from "../assets/leftArrow.svg";
import WorkoutBubble from "../components/WorkoutBubble";

const generateTimeSlots = () => {
  const timeSlots = [];
  let id = 1;
  for (let hour = 6; hour <= 18; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour % 12 || 12;
      const formattedMinute = minute === 0 ? "00" : minute;
      const period = hour < 12 ? "AM" : "PM";
      const time = `${formattedHour}:${formattedMinute} ${period}`;
      timeSlots.push({ id, time });
      id++;
    }
  }
  return timeSlots;
};

export default function CalenderPage() {
  const timeList = generateTimeSlots();

  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  console.log(days);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const todayDate = new Date().getDate();
  const getDayOfWeek = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[date.getDay()];
  };

  return (
    <div className="px-4 py-4">
      <h1 className="text-center text-[20px] font-[Montserrat] font-semibold">
        Work Schedule
      </h1>
      <div className="flex justify-center gap-5">
        <img src={leftArrow} alt="left arrow" />
        {todayDate}
        <img src={rightArrow} alt="right arrow" />
      </div>
      <div className="flex overflow-x-auto gap-2 ">
        {days.map((item, index) => {
          return (
            <div
              className={`flex flex-col justify-center items-center p-2 ${
                todayDate == item ? "themeGradient" : ""
              } min-w-[50px] rounded-lg`}
              key={index}
            >
              <p className="font-[Quicksand] text-[12px] font-semibold">
                {getDayOfWeek(item)}
              </p>
              <p className="font-[Quicksand] text-[12px] font-semibold">
                {item}
              </p>
            </div>
          );
        })}
      </div>
      <div className="py-4">
        {timeList.map((item) => {
          if (item.id % 2 !== 0) {
            return (
              <div key={item.id} className="p-2">
                <WorkoutBubble
                  isRelative={false}
                  isActive={true}
                  time={item.time}
                  lable={"abs workout"}
                />
                <div>{item.time}</div>
              </div>
            );
          } else {
            return (
              <div key={item.id}>
                <hr />
                <WorkoutBubble
                  isRelative={true}
                  isActive={false}
                  time={item.time}
                  lable={"abs workout"}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
