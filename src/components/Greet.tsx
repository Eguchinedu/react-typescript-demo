import React from "react";
type GreetProps = {
  name: string;
  messagerCount?: number;
  isLoggedIn: boolean;
}; //use type when building applications and interfaces when building libraries, also including (?) will make the prop optional

const Greet = (props: GreetProps) => {

  const {messagerCount = 0} = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? ` Welcome ${props.name}! you have ${messagerCount} unread messages`
          : "welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
