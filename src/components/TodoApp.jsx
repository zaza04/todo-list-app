import FormInputTodo from "./FormInputTodo";
import TodoItem from "./TodoItem";

function TodoApp() {
  return (
    <>
      <div className="container h-screen max-h-screen p-10 relative xs:px-5">
        <div className="text-4xl font-extrabold mb-10 text-gray-800 xs:text-3xl">Your To Do List</div>
        <div className="flex flex-col gap-y-10 h-fit">
          <TodoItem />
        </div>
        <div className="absolute left-5 right-5 xs:bottom-35 sm:bottom-25 ">
            <FormInputTodo />
          </div>
      </div>
    </>
  );
}

export default TodoApp;
