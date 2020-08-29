import React from "react";

const Context = React.createContext();

export function Parent(props: any) {
    const text = "random text";

    return <Context.Provider value={text}>{props.children}</Context.Provider>;
}

export function Child() {
    return <Context.Consumer>{(text) => <div>{text}</div>}</Context.Consumer>;
}
