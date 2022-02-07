import { useState } from "react";
import { useCode } from "../../hooks/useCode";

export function Displayer() {
  const [code, setCode] = useState();
  useCode(setCode);
  return (
    <div>
      <div>displayer</div>
      <div>code: {code}</div>
    </div>
  );
}
