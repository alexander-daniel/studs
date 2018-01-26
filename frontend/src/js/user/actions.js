export const UPDATE_USER = 'UPDATE_USER';
export function updateUser() {
  return {
    type: UPDATE_USER,
    user: {
      name: Math.random()
    }
  };
}
