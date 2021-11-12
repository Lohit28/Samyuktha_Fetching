import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";
import UserContainer from "./UserContainer";
function Parent() {
  return (
    <Provider store={store}>
      <div>
        <UserContainer />
      </div>
    </Provider>
  );
}
export default Parent;
