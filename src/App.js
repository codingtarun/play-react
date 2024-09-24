import "./App.css";
import { Navbar } from "./components/common/Navbar";
import { Counter } from "./components/counter/Counter";
import { Task } from "./components/task/Task";
export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container-fluid mb-4">
        <div className="row d-flex justify-content-center align-items-between">
          <div className="col-sm-7 col-12 mb-4">
            <Counter></Counter>
          </div>
          <div className="col-sm-7 col-12 mb-4">
            <Task></Task>
          </div>
        </div>
      </div>
    </div>
  );
}
