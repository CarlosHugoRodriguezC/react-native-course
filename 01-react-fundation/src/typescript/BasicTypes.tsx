export const BasicTypes = () => {
  const name: string = "Carlos";
  const age: number = 27;
  const isActive: boolean = true;

  const powers: string[] = ["Speed", "Fly", "Strength"];

  return (
    <>
      <h3>Basic Types</h3>
      {name}
      {age}
      {isActive && "Active"}
      <br />
      {powers.join(", ")}
    </>
  );
};
