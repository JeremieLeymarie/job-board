import { FC } from "react";

type Props = {
  state: string;
};

const config: Record<string, string> = {
  sent: "black",
  processing: "#57CC99",
  accepted: "#16a34a",
  refused: "#ef4444",
};

const ApplicationState: FC<Props> = ({ state }) => {
  return (
    <div
      className="font-semibold"
      style={{ color: config[state] ?? "#57CC99" }}
    >
      {state.toUpperCase()}
    </div>
  );
};

export default ApplicationState;
