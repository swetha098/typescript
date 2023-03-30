var TodoItem = /** @class */ (function () {
    function TodoItem(description, dueDate) {
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = false;
    }
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addItem = function (description, dueDate) {
        var newItem = new TodoItem(description, dueDate);
        this.items.push(newItem);
    };
    TodoList.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
    };
    TodoList.prototype.completeItem = function (index) {
        this.items[index].isComplete = true;
    };
    TodoList.prototype.displayItems = function () {
        console.log("Todo List:");
        this.items.forEach(function (item, index) {
            var status = item.isComplete ? " [x]" : " [ ]";
            console.log("".concat(index + 1, ". ").concat(item.description).concat(status));
        });
    };
    return TodoList;
}());
// Example usage
var todoList = new TodoList();
todoList.addItem("Buy groceries", new Date("2023-04-01"));
todoList.addItem("Do laundry", new Date("2023-04-03"));
todoList.addItem("Finish project", new Date("2023-04-05"));
todoList.displayItems(); // Output: Todo List: 1. Buy groceries [ ] 2. Do laundry [ ] 3. Finish project [ ]
todoList.completeItem(0);
todoList.displayItems(); // Output: Todo List: 1. Buy groceries [x] 2. Do laundry [ ] 3. Finish project [ ]
todoList.removeItem(1);
todoList.displayItems(); // Output: Todo List: 1. Buy groceries [x] 2. Finish project [ ]
