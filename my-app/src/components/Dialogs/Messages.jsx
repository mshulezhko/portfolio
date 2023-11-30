import React from "react";

function Messages(props) {
    const {text} = props
    return <div className="messages-text">{text}</div>
}

export default Messages