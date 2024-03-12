"use client";
import { useGlobalState } from "./context/globalProvider";
import Tasks from "./Components/Tasks/Tasks";

export default function Home() {
  const { tasks } = useGlobalState();

  return <Tasks title="All Tasks" tasks={tasks} />;
}
