import PropTypes from "prop-types";
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

function TaskCard({ task, onEdit, onDelete, onComplete }) {
  return (
    <div className="relative w-full rounded-lg p-4 shadow-md border border-gray-200 bg-white">
      <div className="flex items-center justify-between mb-2 text-sm">
        <span className="text-gray-500">{task.date}</span>
        <span
          className={`px-2 py-1 rounded-md text-xs font-semibold ${
            task.priority === "High"
              ? "bg-red-100 text-red-700"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {task.priority}
        </span>
      </div>
      <h2 className="text-lg font-semibold text-gray-800 leading-tight mb-1">
        {task.title}
      </h2>
      <p className="text-gray-600 text-sm mb-4">{task.description}</p>
      <div className="flex gap-4 mt-3">
        {!task.completed && (
          <button
            onClick={() => onEdit(task)}
            className="flex items-center justify-center w-8 h-8 text-blue-500 rounded-full hover:bg-blue-100 transition duration-150"
            aria-label="Edit Task"
          >
            <MdOutlineEdit size={20} />
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="flex items-center justify-center w-8 h-8 text-red-500 rounded-full hover:bg-red-100 transition duration-150"
          aria-label="Delete Task"
        >
          <MdDeleteOutline size={20} />
        </button>
        {!task.completed && (
          <button
            onClick={() => onComplete(task.id)}
            className="flex items-center justify-center w-8 h-8 text-green-500 rounded-full hover:bg-green-100 transition duration-150"
            aria-label="Complete Task"
          >
            <IoMdCheckmark />
          </button>
        )}
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default TaskCard;
