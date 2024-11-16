
# Task Manager

A simple and intuitive Task Manager built using **React**. The application allows users to manage their tasks efficiently by adding, deleting, searching, marking completion, and setting priorities for tasks. Tasks are persisted using local storage, ensuring that they remain available even after a page refresh.

---

## Features

### **Basic Features**
1. **Task Input**: Add tasks with a title.
2. **Task Deletion**: Remove tasks from the list.
3. **Task Persistence**: Store tasks in local storage for data retention.

### **Stretch Goals**
1. **Task Search**: Search for tasks using a search bar.
2. **Task Completion**: Mark tasks as completed and visually distinguish them.
3. **Priority Setting**: Assign priority levels to tasks (e.g., High, Medium, Low).
4. **Task Sorting**: Sort tasks by title, priority, or completion status.
5. **UI Animation**: Enhance the interface with smooth animations for task transitions.

---

## Tech Stack

- **Framework**: React
- **Language**: JavaScript/TypeScript
- **Local Storage**: For task persistence.

---

## Getting Started

### Prerequisites
- **Node.js** (v18 or above recommended)
- **npm** or **yarn**

### Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Assumptions Made During Development

1. Tasks are identified uniquely by an auto-generated ID.
2. Task priorities are predefined as **High**, **Medium**, and **Low**.
3. Local storage is used to persist tasks, and no external database or backend is integrated.
4. Sorting options include sorting by title, priority, and completion status.

---

## Animations
- Smooth transitions for adding, editing, and deleting tasks.
- Visual distinction for completed and ongoing tasks.

---

## Future Improvements
- Add drag-and-drop functionality to reorder tasks.
- Implement dark mode.
- Integrate a backend for remote task storage.

---

## Project Structure

```
src/
│
├── components/      # Reusable React components (e.g., TaskCard, Header)
├── redux/           # Redux slices and store
├── pages            # All the pages (e.g., Home)
├── App.jsx          # Main application entry point
├── index.jsx        # Entry file rendering the React app
└── index.css        # Main CSS file with all the styling  
```

---

## Contributing

Contributions are welcome! Feel free to:
- Open an issue for bug reports or feature requests.
- Create a pull request for suggested improvements.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## GitHub Repository

Check out the project on GitHub: [Task Manager Repository](https://github.com/Awarth/task_manager)
