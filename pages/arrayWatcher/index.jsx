import { CodeBlock } from "./codeBlock";
import { Displayer } from "./displayer";
import styles from "../../styles/arrayWatcher.module.css";

export default function ArrayWatcher() {
  return (
    <div>
      <h3>JS数组操作可视化工具</h3>
      <div>
        <CodeBlock />
        <Displayer />
      </div>
    </div>
  );
}
