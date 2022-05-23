import React from "react";
import AuthButton from "components/AuthButton";
import User from "components/User";

const App = () => {
  return (
    <div>
      <section>
        <User />
      </section>
      <section>
        <AuthButton>登录</AuthButton>
      </section>
    </div>
  );
};

export default App;
