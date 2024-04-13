import PropTypes from "prop-types";

export default function WorkoutBubble(props) {
  return (
    <div
      className={`text-white text-[12px] ${
        props.isRelative
          ? "relative top-[-18px] left-[62%]"
          : "absolute  left-[25%] "
      }  w-max rounded-full ${
        props.isActive
          ? "bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0]"
          : "text-[#000] bg-[#F1F1F1]"
      }  py-[7px] px-[10px]`}
    >
      {`${props.lable}, ${props.time}`}
    </div>
  );
}

WorkoutBubble.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isRelative: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  lable: PropTypes.string.isRequired,
};
