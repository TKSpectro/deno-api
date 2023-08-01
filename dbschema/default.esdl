module default {
  type Account {
    required name: str;
    multi todos: Todo;
  }

  type Todo {
    required title: str;
    completed: bool;
  }
};