import Background from "./components/Background";
import WIP from "./components/WIP";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10 w-full min-h-screen">
        <main className="flex min-h-screen items-center justify-center">
          <WIP />
        </main>
      </div>
    </div>
  );
}
