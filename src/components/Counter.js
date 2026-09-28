import React, { useReducer } from 'react';

// 1. Define counterReducer function
export function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

export const initialCount = 0;

function Counter() {
  // 2. Initialize count state to 0 and provide counterReducer
  const [count, dispatch] = useReducer(counterReducer, initialCount);

  return (
    <div className="card counter-card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Exercise 1: Simple Counter (useReducer)</h4>
      </div>
      <div className="card-body text-center p-4">
        <p className="text-muted">
          Manage count state and state transitions using <code>useReducer</code>.
        </p>

        <div className="display-value my-4">
          <span className={`badge ${count > 0 ? 'bg-success' : count < 0 ? 'bg-danger' : 'bg-secondary'} count-display`}>
            {count}
          </span>
        </div>

        <div className="btn-group gap-2" role="group" aria-label="Counter controls">
          <button
            type="button"
            className="btn btn-outline-danger btn-lg px-4"
            onClick={() => dispatch({ type: 'DECREMENT' })}
            aria-label="Decrement"
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-warning btn-lg px-4 text-dark font-weight-bold"
            onClick={() => dispatch({ type: 'RESET' })}
          >
            Reset
          </button>
          <button
            type="button"
            className="btn btn-outline-success btn-lg px-4"
            onClick={() => dispatch({ type: 'INCREMENT' })}
            aria-label="Increment"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
