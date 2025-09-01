import { LogProps } from "../../types/interfaces";

function Log({ turns }: LogProps) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li
          key={`${turn.square.row}${turn.square.col}`}
        >{`${turn.player} select ${turn.square.row}, ${turn.square.col}`}</li>
      ))}
    </ol>
  );
}

export default Log;
