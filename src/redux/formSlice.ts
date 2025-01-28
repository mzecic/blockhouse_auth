import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LoginFormState {
  email: string;
  password: string;
}

interface SignupFormState {
  name: string;
  email: string;
  password: string;
}

interface FormState {
  login: LoginFormState;
  signup: SignupFormState;
}

const initialState: FormState = {
  login: {
    email: '',
    password: '',
  },
  signup: {
    name: '',
    email: '',
    password: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateLoginForm(state, action: PayloadAction<Partial<LoginFormState>>) {
      state.login = {...state.login, ...action.payload};
    },
    updateSignupForm(state, action: PayloadAction<Partial<SignupFormState>>) {
      state.signup = {...state.signup, ...action.payload};
    },
    resetForms(state) {
      state.login = initialState.login;
      state.signup = initialState.signup;
    },
  },
});

export const {updateLoginForm, updateSignupForm, resetForms} =
  formSlice.actions;
export default formSlice.reducer;
