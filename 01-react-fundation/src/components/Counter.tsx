import { useCounter } from "../hooks";

export const Counter = () => {
  const { counter, setCounter, increaseBy } = useCounter({
    initialCounter: 100,
  });

  return (
    <>
      <h3>Counter</h3>
      <span>Valor: {counter}</span>

      <div>
        <button onClick={() => increaseBy(+1)}>+1</button>&nbsp;
        <button onClick={() => setCounter(0)}>Reset</button>&nbsp;
        <button onClick={() => increaseBy(-1)}>-1</button>&nbsp;
      </div>
    </>
  );
};
