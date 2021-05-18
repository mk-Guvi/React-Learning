import React from "react";
//step-1:

//React.createContext() -It comes with a provider and consumer components which are the net two steps of creating context
//createContext("mk")-its the default value of context that if you dont wrap the components with provider component then the consumer components will take this as default value
const UserContext = React.createContext("mk");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

//sharing  data using Context Type which works inly in class comoponents
//step-1
export default UserContext;
