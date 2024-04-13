import { Bar } from "react-chartjs-2";
import { Chart, LinearScale } from "chart.js/auto";
import alertImg from "../assets/alert-triangle.svg";
import upcomingWorkoutImg1 from "../assets/Ellipse 53.svg";
import upcomingWorkoutImg2 from "../assets/Ellipse 54.svg";
import upcomingWorkoutImg3 from "../assets/Ellipse 55.svg";
import { useNavigate } from "react-router-dom";

export default function TrackingPage() {
  Chart.register(LinearScale);
  const navigate = useNavigate();

  const caloriesBurnedData = {
    labels: [
      "12:00 AM",
      "3:00 AM",
      "6:00 AM",
      "9:00 AM",
      "12:00 PM",
      "3:00 PM",
      "6:00 PM",
      "9:00 PM",
      "11:59 PM",
    ],
    datasets: [
      {
        label: "Calories Burned",
        fill: true,

        borderColor: "#8099FF",
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        barPercentage: 0.3,
        data: [200, 250, 300, 400, 350, 450, 500, 480, 460], // Sample data for calories burned
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Calories Burned",
        },
        beginAtZero: true,
      },
    },
  };

  const workoutScheduleHandler = () => {
    navigate("/calendar");
  };

  return (
    <div className="px-4 ">
      <div>
        <img src="leftArrow" alt="" />
        <h1 className=" text-xl font-[Montserrat] font-semibold text-center py-8">
          Workout Tracker
        </h1>
      </div>
      <div className="px-2">
        <Bar
          data={caloriesBurnedData}
          options={options}
          onClick={workoutScheduleHandler}
        />
      </div>
      <div className="flex justify-between  bg-gradient-to-r from-[#819DFF47] to-[#10101000] p-3 rounded-lg my-2">
        <img src={alertImg} alt="Alert Image" />
        <p className=" text-[12px] font-medium ms-2">
          You&apos;ve burned fewer calories than yesterday. Time to get moving!
        </p>
      </div>
      <div className="flex justify-between items-center  py-2">
        <h2 className="text-[16px] font-semibold">Upcoming Workout</h2>
        <a href="#" className=" text-[12px] font-medium">
          See more
        </a>
      </div>

      <div className="flex justify-between items-center  shadow-lg rounded-lg p-4">
        <img src={upcomingWorkoutImg1} alt="" />
        <div>
          <h3>Full Body Workout</h3>
          <p>Today 3pm</p>
        </div>
        <div>
          <input
            type="checkbox"
            className="peer sr-only opacity-0"
            id="toggle"
          />
          <label
            htmlFor="toggle"
            className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-[#8099FF] peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-[#8099FF]"
          >
            <span className="sr-only">Enable</span>
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center  shadow-lg rounded-lg p-4">
        <img src={upcomingWorkoutImg2} alt="" />
        <div>
          <h3>Upper Body Workout</h3>
          <p>4 Feb, 3:30 pm</p>
        </div>
        <div>
          <input
            type="checkbox"
            className="peer sr-only opacity-0"
            id="toggle2"
          />
          <label
            htmlFor="toggle2"
            className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-[#8099FF] peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-[#8099FF]"
          >
            <span className="sr-only">Enable</span>
          </label>
        </div>
      </div>
      <div className="mt-[16px] mb-[70px]">
        <h2 className="text-[16px] font-semibold my-1">
          What Do You Want to Train
        </h2>
        <div className="flex justify-between p-3 bg-[#8CB1FF99] rounded-lg">
          <div>
            <h4 className=" text-[12px] font-medium">Full Body Workout</h4>
            <ul className="text-[10px]">
              <li>Arms</li>
              <li>Chest</li>
            </ul>
          </div>
          <div>
            <img src={upcomingWorkoutImg3} />
          </div>
        </div>
      </div>
    </div>
  );
}
