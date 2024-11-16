import { useState } from "react";
import Card from "../components/Card";
import TaskCard from "../components/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import {
  openCard,
  closeCard,
  editTask,
  addTask,
  deleteTask,
  completeTask,
} from "../redux/slice/taskSlice";
import Header from "../components/Header";

function Home() {
  const dispatch = useDispatch();
  const showCard = useSelector((state) => state.tasks.showCard);
  const searchQuery = useSelector((state) => state.search.query);
  const tasks = useSelector((state) => state.tasks.tasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const handleAddClick = () => {
    setSelectedTask(null);
    setIsEditing(false);
    dispatch(openCard());
  };

  const handleEditClick = (task) => {
    setSelectedTask(task);
    dispatch(openCard());
    setIsEditing(true);
  };

  const handleClose = () => {
    dispatch(closeCard());
    setSelectedTask(null);
    setIsEditing(false);
  };

  const handleSave = (task) => {
    if (isEditing) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask(task));
    }
    handleClose();
  };

  const handleTaskDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleTaskComplete = (id) => {
    dispatch(completeTask(id));
  };

  const filteredTasks = tasks.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ongoingTasks = filteredTasks.filter((task) => !task.completed);
  const completedTasks = filteredTasks.filter((task) => task.completed);

  return (
    <div>
      <Header onAddClick={handleAddClick} />
      <div className="w-full flex justify-center items-center px-2 min-[450px]:px-4 md:px-6 py-2">
        <div className="max-w-[1440px] w-full flex flex-col">
          <div className="flex gap-2 justify-center items-center w-full mt-2 mb-4">
            <button
              onClick={() => setOpen(false)}
              className={`rounded px-2 py-1 transition-all duration-200 ease-in ${
                !open ? "bg-blue-500 text-white" : "bg-white text-black border"
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setOpen(true)}
              className={`rounded px-2 py-1 transition-all duration-200 ease-in ${
                open ? "bg-blue-500 text-white" : "bg-white text-black border"
              }`}
            >
              Completed
            </button>
          </div>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: open ? "translateX(-100%)" : "translateX(0)",
              }}
            >
              <div className="w-full shrink-0 px-4">
                {ongoingTasks.length > 0 ? (
                  <div className="task-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                    {ongoingTasks.map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onEdit={handleEditClick}
                        onDelete={handleTaskDelete}
                        onComplete={handleTaskComplete}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 mb-8">No ongoing tasks found.</p>
                )}
              </div>
              <div className="w-full shrink-0 px-4">
                {completedTasks.length > 0 ? (
                  <div className="task-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {completedTasks.map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onEdit={handleEditClick}
                        onDelete={handleTaskDelete}
                        onComplete={handleTaskComplete}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No completed tasks found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Task Modal */}
      {showCard && (
        <Card
          onClose={handleClose}
          onSave={handleSave}
          task={selectedTask}
          isEditing={isEditing}
        />
      )}
    </div>
  );
}

export default Home;
