

const dotPositions = [
  { x: 50, y: 50 },
  { x: 50, y: 250 },
  { x: 50, y: 450 },

];

const ConnectedDotsDisplay = () => {
  return (
    <svg className="h-[100rem]  ">
      {dotPositions.map((position, index) => (
        <circle
          key={index}
          cx={position.x}
          cy={position.y}
          r={5}
          className="dot"
        />
      ))}
      {dotPositions.map((position, index) => (
        dotPositions[index + 1] && (
          <line
            key={index}
            x1={position.x}
            y1={position.y}
            x2={dotPositions[index + 1].x}
            y2={dotPositions[index + 1].y}
            className="line stroke-current text-gray-600 stroke-2 z-1"
          />
        )
      ))}
    </svg>
  );
};

export default ConnectedDotsDisplay;
