class TodoItem {
    description: string;
    dueDate: Date;
    isComplete: boolean;
  
    constructor(description: string, dueDate: Date) {
      this.description = description;
      this.dueDate = dueDate;
      this.isComplete = false;
    }
  }
  
  class TodoList {
    items: TodoItem[];
  
    constructor() {
      this.items = [];
    }
  
    addItem(description: string, dueDate: Date) {
      const newItem = new TodoItem(description, dueDate);
      this.items.push(newItem);
    }
  
    removeItem(index: number) {
      this.items.splice(index, 1);
    }
  
    completeItem(index: number) {
      this.items[index].isComplete = true;
    }
  
    displayItems() {
      console.log("Todo List:");
      this.items.forEach((item, index) => {
        const status = item.isComplete ? " [x]" : " [ ]";
        console.log(`${index + 1}. ${item.description}${status}`);
      });
    }
  }
  
  // Example usage
  const todoList = new TodoList();
  todoList.addItem("Buy groceries", new Date("2023-04-01"));
  todoList.addItem("Do laundry", new Date("2023-04-03"));
  todoList.addItem("Finish project", new Date("2023-04-05"));
  
  todoList.displayItems(); // Output: Todo List: 1. Buy groceries [ ] 2. Do laundry [ ] 3. Finish project [ ]
  todoList.completeItem(0);
  todoList.displayItems(); // Output: Todo List: 1. Buy groceries [x] 2. Do laundry [ ] 3. Finish project [ ]
  todoList.removeItem(1);
  todoList.displayItems(); // Output: Todo List: 1. Buy groceries [x] 2. Finish project [ ]
  