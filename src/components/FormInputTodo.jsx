import { useDispatch } from "react-redux";
import { addTodo } from "../store/redux/actions/todoAction";
import { useEffect, useRef } from "react";

function FormInputTodo() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    if (value !== "") {
      dispatch(addTodo(value));
      inputRef.current.focus();
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex-center gap-x-2 text-[16px]">
        <input
          type="text"
          name="content"
          autoComplete="off"
          placeholder="Type something..."
          className="rounded-lg outline-none border-2 p-3 border-gray-400 xs:text-sm sm:text-md w-full placeholder:opacity-50"
          ref={inputRef}
        />
        <button
          type="submit"
          className="cursor-pointer bg-[#1E2939] p-3 rounded-xl text-gray-50 font-medium border-1 border-[#1E2939] xs:text-sm sm:text-md"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default FormInputTodo;
