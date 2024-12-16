
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const solveWaterJug = (X, Y, Z) => {
  if (Z > Math.max(X, Y) || Z % gcd(X, Y) !== 0) {
    return { steps: [], solvable: false };
  }

  const result = [];
  const visited = new Set();

  const addState = (x, y) => {
    const stateKey = `${x},${y}`;
    if (!visited.has(stateKey)) {
      visited.add(stateKey);
      return true;
    }
    return false;
  };

  const queue = [[0, 0]];
  visited.add("0,0");

  while (queue.length > 0) {
    const [currX, currY] = queue.shift();
    result.push(`Jug X: ${currX}, Jug Y: ${currY}`);

    if (currX === Z || currY === Z) {
      return { steps: result, solvable: true };
    }

    const nextStates = [
      [X, currY], 
      [currX, Y], 
      [0, currY], 
      [currX, 0], 
      ...[ 
        (() => {
          const amount = Math.min(currX, Y - currY);
          return [currX - amount, currY + amount];
        })(),
        (() => {
          const amount = Math.min(currY, X - currX);
          return [currX + amount, currY - amount];
        })()
      ]
    ];

    for (const [nextX, nextY] of nextStates) {
      if (addState(nextX, nextY)) {
        queue.push([nextX, nextY]);
      }
    }
  }

  return { steps: [], solvable: false };
};

export default solveWaterJug;