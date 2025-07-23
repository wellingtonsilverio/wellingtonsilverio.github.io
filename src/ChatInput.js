import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useChatStore } from "./services/chat";

const ChatInput = ({ channelName, channelId, userName, chatRef }) => {
    const { addMessage } = useChatStore();

    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault(); //Prevents refresh

        if (!channelId) {
            return false;
        }

        addMessage(channelId, userName, input);

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput("");
    };

    return (
        <ChatInputContainer>
            <form action="">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
};

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button {
        display: none !important;
    }
`;