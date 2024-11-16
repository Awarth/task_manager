import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function Card({ onClose, onSave, task, isEditing }) {
  const level = ["High", "Medium", "Low"];
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [priority, setPriority] = useState(task ? task.priority : "");
  const [id, setId] = useState(task ? task.id : nanoid());

  console.log({ task });
  console.log({ isEditing });
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
      setId(task.id);
    }
  }, [task]);

  const handleSave = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleString();

    if (title && priority) {
      const newTask = {
        ...task,
        id,
        title,
        description,
        priority,
        date,
      };

      onSave(newTask);
      onClose();
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleCardClose = () => {
    onClose();
  };

  return (
    <div className="absolute inset-0 bg-[#00000031] bg-opacity-60 backdrop-blur-md flex justify-center items-center px-2">
      <form
        onSubmit={handleSave}
        className="max-w-lg w-full p-4 sm:p-6 bg-white rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          {isEditing ? "Edit Task" : "Add New Task"}
        </h2>

        <div>
          <label htmlFor="title" className="block font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter task title"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-36 resize-none"
            placeholder="Enter task description"
          />
        </div>

        <div>
          <label htmlFor="priority" className="block font-medium text-gray-700">
            Priority
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="" disabled>
              Select priority
            </option>
            {level.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            onClick={handleCardClose}
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium py-2 px-4 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            {isEditing ? "Update Task" : "Save Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

Card.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  task: PropTypes.object,
  isEditing: PropTypes.bool,
};

export default Card;
