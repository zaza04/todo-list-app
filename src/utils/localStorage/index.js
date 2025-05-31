const TODO_STORAGE_KEY = 'cQVqo8PDc05oTl4gpQfJWscHtQJWs4'; // Bạn có thể chọn một key khác

/**
 * Tải trạng thái todos từ localStorage.
 * Sẽ trả về undefined nếu không có gì trong localStorage hoặc key không tồn tại,
 * để Redux reducer có thể sử dụng initial state của nó.
 */
export const loadTodosFromStorage = () => {
  const serializedState = localStorage.getItem(TODO_STORAGE_KEY);
  if (serializedState === null) {
    return undefined; // Để reducer dùng initial state (mảng rỗng của bạn)
  }
  // CẢNH BÁO QUAN TRỌNG:
  return JSON.parse(serializedState);
};

/**
 * Lưu trạng thái todos hiện tại vào localStorage.
 * @param {Array} state Mảng todos cần lưu.
 */
export const saveTodosToStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(TODO_STORAGE_KEY, serializedState);
};