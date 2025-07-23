import { createSlice } from "@reduxjs/toolkit"

let savedauth;
try {
  const raw = localStorage.getItem('auth')
  savedauth = raw ? JSON.parse(raw) : {
    isauthenticated: false,
    user: null
  };
} catch  {
  savedauth = {
    isauthenticated: false,
    user: null
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: savedauth,

  reducers: {
    login: (state, action) => {
      const { username, role } = action.payload
      state.user = { username, role }
      state.isauthenticated = true
      localStorage.setItem('auth', JSON.stringify(state))
    },
    logout: (state) => {
      state.isauthenticated = false
      state.user = null
      localStorage.removeItem('auth')
    }
  }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer
