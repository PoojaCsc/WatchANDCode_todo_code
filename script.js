// Code goes here
var todoList = { 
  todos : [],
  
  
  addTodo : function(todoText) {
    this.todos.push({
      todoText : todoText,
      completed : false
    });
  },
  
  changeTodo : function(position, todoText){
    this.todos[position].todoText = todoText;
  },
  
  deleteTodo : function(position) {
    this.todos.splice(position, 1);
   },
  
  toggleCompleted : function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    },
  
  toggleAll : function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    for(var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === true)
      completedTodos ++;
    }
    //case 1 : if everything is true , make evrything false
    if(completedTodos === totalTodos){
      for( i=0 ; i< totalTodos; i++){
        this.todos[i].completed = false;
      }
    }
   // case 2 : otherwise make everything true
    else{
      for( i=0 ; i< totalTodos; i++){
        this.todos[i].completed = true;
    }
  }
}
}


var handlers = {                          // we can attach these to onclick in the button
  
  addTodo : function() {
   var addTodoTextInput = document.getElementById('addTodoTextInput');
   todoList.addTodo(addTodoTextInput.value);
   addTodoTextInput.value = '';
   view.displayTodos();
 },
 
 changeTodo : function(){
   var changeTodoPostionInput = document.getElementById('changeTodoPostionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPostionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPostionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  
  deleteTodo : function() {
    var deleteTodoPostionInput = document.getElementById('deleteTodoPostionInput');
    todoList.deleteTodo(deleteTodoPostionInput.valueAsNumber);
    deleteTodoPostionInput.value = '';
    view.displayTodos();
 },
  
  toggleCompleted : function(){
    var toggleCompletedPostionInput =document.getElementById('toggleCompletedPostionInput');
    todoList.toggleCompleted(toggleCompletedPostionInput.valueAsNumber);
    toggleCompletedPostionInput.value = '';
    view.displayTodos();
  },
  
  toggleAll : function(){
  todoList.toggleAll();
  view.displayTodos();
},
};


  var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i =0 ; i < todoList.todos.length;i++) {
       var todoLi = document.createElement('li');
       var todo = todoList.todos[i];
       var todoTestWithCompletion = '';
       
       if(todo.completed === true){
         todoTestWithCompletion = '(x) ' + todo.todoText;
         }
        else {
           todoTestWithCompletion = '( ) ' + todo.todoText;
        }
        
       todoLi.textContent = todoTestWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
}