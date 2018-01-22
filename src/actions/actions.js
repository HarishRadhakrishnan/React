export function addUserData(user) {
  return { 
  type: 'ADD_USER', 
  user 
  }
}

export function editUserData(user) {
  return { 
  type: 'EDIT_USER', 
  user
  }
}

export function updateUserData(user) {
  return { 
  type: 'UPDATE_USER', 
  user 
  }
}

export function deleteUserData(id) {
  return { 
  type: 'DELETE_USER', 
  id 
  }
}