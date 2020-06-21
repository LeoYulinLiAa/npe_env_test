import React, { FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../actions/user_actions";
import { FormUser } from "../types/user";
import { RootState } from "../reducers/root_reducer";

const SessionForm: FC<{ type: "signup" | "login" }> = props => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const errorSelector = (state: RootState) => state.errors;

  const errors = useSelector(errorSelector);

  const dispatch = useDispatch();

  const action = {
    "signup": (user: FormUser) => signup(user),
    "login": (user: FormUser) => login(user)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(action[props.type]({username, password}));
  }

  return <div className="session-form">
    <h2>{ props.type }</h2>
    { errors.session.length > 0 && <div className="alert danger">
      <ul>
        { errors.session.map((msg, i) => <li key={i}>{msg}</li>)}
      </ul>
    </div> }
    <form onSubmit={handleSubmit}>
      <label>Username
        <input type="text" value={ username } onChange={ event => setUsername(event.target.value) } />
      </label>
      <label>Password
        <input type="password" value={ password } onChange={ event => setPassword(event.target.value) } />
      </label>
      <button>Submit</button>
    </form>
  </div>

};

export default SessionForm;
