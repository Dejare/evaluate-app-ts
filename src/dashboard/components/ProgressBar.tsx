const ProgressBar = () => {
  const progress = 10;
  const strokeWidth = 8;
  const radius = 50;
  const diameter = radius * 2;
  const circumference = diameter * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      className="w-24 h-24"
      viewBox={`0 0 ${diameter} ${diameter}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="stroke-current text-gray-300"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeWidth={strokeWidth}
        strokeDashoffset={strokeDashoffset}
        r={radius - strokeWidth / 2}
        cx={radius}
        cy={radius}
        stroke="#B163E0"
      />
      {progress}
      <circle
        className="stroke-current text-gray-300"
        strokeWidth={strokeWidth}
        r={radius - strokeWidth / 2}
        cx={radius}
        cy={radius}
        fill="none"
        stroke="black"
      />
      {progress}
    </svg>
  );
};

export default ProgressBar;
