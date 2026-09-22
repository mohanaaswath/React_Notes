import React, { useState } from "react";

const TodoApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    date: "",
    domain: "",
  });
  
  const [todos, setTodos] = useState([]);
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAddTodo = () => {
    const { name, age, date, domain } = formData;

    if (name && age && date && domain) {
      const newTodo = {
        id: Date.now(),
        name,
        age,
        date,
        domain,
      };

      setTodos((prev) => [...prev, newTodo]);
      setFormData({
        name: "",
        age: "",
        date: "",
        domain: "",
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleDeleteTodo = (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Inline CSS Styles
  const styles = {
    app: {
      padding: "20px",
    },
    appTitle: {
      padding: "20px",
      textAlign: "center",
      color: "rgb(26, 178, 238)",
    },
    inputContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "400px",
      height: "250px",
      padding: "20px",
      margin: "20px auto",
      backgroundColor: "whitesmoke",
      border: "2px solid rgb(6, 173, 240)",
      borderRadius: "10px",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1), -2px -2px 10px rgba(0,0,0,0.1)",
    },
    inputForm: {
      padding: "20px",
      margin: "10px",
      height: "200px",
      width: "340px",
      backgroundColor: "#e0f7fa",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    formInput: {
      padding: "8px",
      width: "100%",
      margin: "5px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    addButton: {
      padding: "8px 15px",
      backgroundColor: "#2196F3",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
    },
    todosContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
      margin: "0 auto",
      maxWidth: "1200px",
    },
    todoItem: {
      padding: "15px",
      width: "250px",
      backgroundColor: "#2c3e50",
      borderRadius: "10px",
      color: "white",
      boxShadow:
        "2px 2px 5px rgba(0,0,255,0.3), -2px -2px 5px rgba(0,0,255,0.3)",
    },
    todoName: {
      color: "skyblue",
      marginBottom: "10px",
    },
    todoDetail: {
      color: "#ecf0f1",
      margin: "5px 0",
      fontWeight: "normal",
    },
    deleteButton: {
      backgroundColor: "#e74c3c",
      color: "white",
      border: "none",
      padding: "5px 10px",
      marginTop: "10px",
      width: "100%",
      cursor: "pointer",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.appTitle}>TODO LIST</h1>

      {/* Input Container */}
      <div style={styles.inputContainer}>
        <div style={styles.inputForm}>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.formInput}
          />
          <input
            id="age"
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={handleInputChange}
            style={styles.formInput}
          />
          <input
            id="date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
            style={styles.formInput}
          />
          <input
            id="domain"
            type="text"
            placeholder="Domain"
            value={formData.domain}
            onChange={handleInputChange}
            style={styles.formInput}
          />
          <button style={styles.addButton} onClick={handleAddTodo}>
            ADD
          </button>
        </div>
      </div>

      {/* Todos Container */}
      <div style={styles.todosContainer}>
        {todos.map((todo) => (
          <div key={todo.id} style={styles.todoItem}>
            <h2 style={styles.todoName}>Name: {todo.name}</h2>
            <h3 style={styles.todoDetail}>Age: {todo.age}</h3>
            <h3 style={styles.todoDetail}>Date: {formatDate(todo.date)}</h3>
            <h3 style={styles.todoDetail}>Domain: {todo.domain}</h3>
            <button
              style={styles.deleteButton}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
