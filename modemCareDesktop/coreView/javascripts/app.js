angular.module('modemApp', [])


.controller('TheCtrl', function() {
  var todoList = this;

  todoList.showMain = true;


  todoList.docs = [
    {index:0, name:"basic medical docs", data:"aaaaaa"},
    {index:1, name:"medical history", data:"bbbbbbb"},
    {index:2, name:"eye doctor", data:"ccccccc"}];


  todoList.mainDoc = todoList.docs[0];


  todoList.selectDoc = function(index) {
    // todoList.docs[0].name = "jnsdvjnkdvjksdv";



    todoList.showMain = false;

    todoList.mainDoc = todoList.docs[index];
  };


  // todoList.todos = [
  //   {text:'learn angular', done:true},
  //   {text:'build an angular app', done:false}];

  // todoList.addTodo = function() {
  //   todoList.todos.push({text:todoList.todoText, done:false});
  //   todoList.todoText = '';
  // };
});



