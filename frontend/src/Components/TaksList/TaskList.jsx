import React from "react";
import AcceptedTask from "./AcceptedTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

function TaskList({ userData }) {
  const Tasks = userData.tasks;

  return (
    <div className="md:h-[55%] flex justify-start items-center gap-5 flex-nowrap overflow-y-auto h-[45%] w-full py-5  mt-10">
      {Tasks.map((task, key) => {
       
        if (task.active) {
          return <AcceptedTask idx={key} task={task} />;
        } else if (task.completed) {
          return <CompletedTask  idx={key} task={task} />;
        } else if (task.failed) {
          return <FailedTask idx={key} task={task} />;
        } else if (task.newTask) {
          return <NewTask idx={key} task={task} />;
        }
      })}
    </div>
  );
}

export default TaskList;
