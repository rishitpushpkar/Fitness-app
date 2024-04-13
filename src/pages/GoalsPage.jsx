import { useState } from "react";
import checkIcon from "../assets/white-check.svg";
import { useNavigate } from "react-router-dom";

export default function GoalsPage() {
  const navigate = useNavigate();
  const goals = [
    { id: 1, goal: "Weight Loss", isChecked: false },
    { id: 2, goal: "Muscle Gain", isChecked: false },
    { id: 3, goal: "Flexibility and Mobility", isChecked: false },
    { id: 4, goal: "General Fitness", isChecked: false },
    { id: 5, goal: "Event-specific Training", isChecked: false },
    { id: 6, goal: "Mindfullness and Mental Health", isChecked: false },
  ];

  const [goalsList, setGoalsList] = useState(goals);

  const confirmGoalsHandler = () => {
    navigate("/workout");
  };

  const handleCheckboxChange = (index) => {
    const updatedGoalsList = [...goalsList];
    updatedGoalsList[index].isChecked = !updatedGoalsList[index].isChecked;
    setGoalsList(updatedGoalsList);
    console.log(goalsList);
  };

  return (
    <div>
      <div className="h-screen flex flex-col justify-between w-[90%] sm:max-w-md mx-auto ">
        <h1 className=" text-center text-xl font-semibold font-[Montserrat] mt-[10%] mb-[3%]">
          What are your goals?
        </h1>
        <div className=" overflow-y-scroll">
          {goalsList.map((item, index) => {
            return (
              <div
                className="flex justify-between items-center p-4 bg-[#F1F1F1] rounded-xl my-2"
                key={index}
              >
                <p>{item.goal}</p>
                <div className="h-5 w-5 rounded-sm flex justify-center items-center relative">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={item.isChecked}
                    id={`customCheckbox-${item.id}`}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <label
                    htmlFor={`customCheckbox-${item.id}`}
                    className="cursor-pointer"
                  >
                    <div
                      className={`absolute top-0 left-0 w-5 h-5 rounded-[4px] e border border-[#809AFF] ${
                        item.isChecked
                          ? "bg-[#809AFF]"
                          : "border-[#809AFF] bg-white"
                      } `}
                    >
                      {item.isChecked && <img src={checkIcon} />}
                    </div>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb-[10%] mt-[0.6rem]">
          <button
            type="submit"
            onClick={confirmGoalsHandler}
            className="group relative w-full flex justify-center py-2 px-4 border border-none text-sm font-medium rounded-md text-white bg-gradient-to-b from-blue-400 to-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
