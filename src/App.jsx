import { Deck } from "./dependencies/ReactSpring.tsx";
import styles from "./styles.module.css";

export default function App() {
  return (
    <main className="h-screen w-screen">
      <div className={styles.container}>
        <Deck />
      </div>
    </main>
  );
}
