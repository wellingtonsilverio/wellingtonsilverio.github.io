import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useChatStore } from "../services/chat";

function ChatInput({ channelName, channelId, userName, chatRef }) {
    const { addMessage } = useChatStore();

    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault(); //Prevents refresh

        if (!channelId || !input.trim()) {
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
            <form onSubmit={sendMessage}>
                <InputWrapper>
                    <InputIcon>
                        <AttachFileIcon />
                    </InputIcon>
                    <InputField
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`Enviar mensagem para #${channelName}`}
                    />
                    <InputIcons>
                        <IconButton type="button">
                            <span>@</span>
                        </IconButton>
                        <IconButton type="button">
                            <EmojiEmotionsIcon />
                        </IconButton>
                    </InputIcons>
                </InputWrapper>
                <Button hidden type="submit">
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    padding: 16px;
    border-top: 1px solid #ffffff22;
    background-color: #1b1d21;
    
    > form {
        width: 100%;
    }
    
    > form > button {
        display: none !important;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #2d3748;
    border: 1px solid #4a5568;
    border-radius: 8px;
    padding: 12px 16px;
    
    &:focus-within {
        border-color: #5ca0e1;
    }
`;

const InputIcon = styled.div`
    color: #ffffff66;
    margin-right: 12px;
    cursor: pointer;
    
    &:hover {
        color: #ffffff;
    }
    
    > .MuiSvgIcon-root {
        font-size: 20px;
    }
`;

const InputField = styled.input`
    flex: 1;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 15px;
    outline: none;
    min-width: 0;
    
    &::placeholder {
        color: #ffffff66;
    }
`;

const InputIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 12px;
`;

const IconButton = styled.button`
    background: none;
    border: none;
    color: #ffffff66;
    cursor: pointer;
    padding: 6px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background-color: #ffffff11;
        color: #ffffff;
    }
    
    > .MuiSvgIcon-root {
        font-size: 18px;
    }
    
    > span {
        font-size: 16px;
        font-weight: 500;
    }
`;