import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../store/redux/actions/todoAction";

function TodoItem() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.TodoReducer);

  const handleCompleted = (id) => {
    dispatch(completedTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // tính sô lượng task chưa hoàn thành (uncompleted)
  const remainingTodosCount = Array.isArray(todos)
    ? todos.filter((item) => item.completed === false).length
    : 0;
  // console.log(remainingTodosCount);

  return (
    <>
      {todos.length > 0 ? (
        <div className="">
          <div className="flex items-center gap-x-1 italic mb-5 font-semibold text-gray-700 tracking-wide">
            <p>Your remaining todos:</p>
            <span>{remainingTodosCount}</span>
          </div>
          {todos && (
            <ul className="space-y-5 pr-2 h-110 overflow-y-auto">
              {todos.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-xl font-medium border-2 border-gray-400 gap-x-2"
                >
                  <div className="flex-center">
                    {item.completed ? (
                      <div
                        className="size-6"
                        onClick={() => {
                          handleCompleted(item.id);
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#3c3c3c"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g
                              id="🔍-Product-Icons"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              {" "}
                              <g
                                id="ic_fluent_checkbox_checked_24_filled"
                                fill="#212121"
                                fillRule="nonzero"
                              >
                                {" "}
                                <path
                                  d="M18,3 C19.6568542,3 21,4.34314575 21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L18,3 Z M16.4696699,7.96966991 L10,14.4393398 L7.53033009,11.9696699 C7.23743687,11.6767767 6.76256313,11.6767767 6.46966991,11.9696699 C6.1767767,12.2625631 6.1767767,12.7374369 6.46966991,13.0303301 L9.46966991,16.0303301 C9.76256313,16.3232233 10.2374369,16.3232233 10.5303301,16.0303301 L17.5303301,9.03033009 C17.8232233,8.73743687 17.8232233,8.26256313 17.5303301,7.96966991 C17.2374369,7.6767767 16.7625631,7.6767767 16.4696699,7.96966991 Z"
                                  id="🎨-Color"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                    ) : (
                      <div
                        className="size-6"
                        onClick={() => {
                          handleCompleted(item.id);
                        }}
                      >
                        <svg
                          viewBox="0 0 21 21"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#3c3c3c"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"
                              fill="none"
                              stroke="#3c3c3c"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              transform="translate(3 3)"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div
                    className={
                      "flex-grow transisition-opacity ease duration-300 w-full text-gray-800 font-semibold truncate xs:text-sm sm:text-md " +
                      (item.completed ? "line-through opacity-50" : "")
                    }
                  >
                    {item.title}
                  </div>
                  <div
                    className="flex-center"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#3c3c3c"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="flex-center gap-x-1 mt-10">
          <span className="size-6">
            <svg
              viewBox="0 0 24 24"
              className="font-bold"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0 0 0)"
            >
              <path
                d="M15.9688 4C15.9688 3.58579 15.633 3.25 15.2188 3.25C14.8045 3.25 14.4688 3.58579 14.4688 4V5.75C14.4688 6.16421 14.8045 6.5 15.2188 6.5C15.633 6.5 15.9688 6.16421 15.9688 5.75V4Z"
                fill="#343C54"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 7.25C3.80109 7.25 3.61032 7.32902 3.46967 7.46967C3.32902 7.61032 3.25 7.80109 3.25 8V13.25C3.25 15.7034 4.42801 17.8817 6.24927 19.25H4C3.58579 19.25 3.25 19.5858 3.25 20C3.25 20.4142 3.58579 20.75 4 20.75L17.5 20.75C17.9142 20.75 18.25 20.4142 18.25 20C18.25 19.5858 17.9142 19.25 17.5 19.25H15.2507C15.9006 18.7617 16.4687 18.1703 16.9304 17.5H17C19.4853 17.5 21.5 15.4853 21.5 13V11.75C21.5 10.5074 20.4926 9.5 19.25 9.5H18.25V8C18.25 7.58579 17.9142 7.25 17.5 7.25H4ZM16.75 13.25C16.75 16.5637 14.0637 19.25 10.75 19.25C7.43629 19.25 4.75 16.5637 4.75 13.25V8.75H16.75V13.25ZM18.25 11V13.25C18.25 14.1832 18.0796 15.0766 17.7681 15.9008C19.0528 15.5615 20 14.3913 20 13V11.75C20 11.3358 19.6642 11 19.25 11H18.25Z"
                fill="#343C54"
              />
              <path
                d="M10.75 3.25C11.1642 3.25 11.5 3.58579 11.5 4V5.75C11.5 6.16421 11.1642 6.5 10.75 6.5C10.3358 6.5 10 6.16421 10 5.75V4C10 3.58579 10.3358 3.25 10.75 3.25Z"
                fill="#343C54"
              />
              <path
                d="M7.03125 4C7.03125 3.58579 6.69546 3.25 6.28125 3.25C5.86704 3.25 5.53125 3.58579 5.53125 4V5.75C5.53125 6.16421 5.86704 6.5 6.28125 6.5C6.69546 6.5 7.03125 6.16421 7.03125 5.75V4Z"
                fill="#343C54"
              />
            </svg>
          </span>
          <p className="text-center italic font-semibold text-[#1E2939]">
            You're free !
          </p>
        </div>
      )}
    </>
  );
}

export default TodoItem;
