import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useChatStore } from "../services/chat";

// Lista dos 100 emoticons mais populares
const POPULAR_EMOJIS = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
    "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
    "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩",
    "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣",
    "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬",
    "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗",
    "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😯", "😦", "😧",
    "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢",
    "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "💩", "👻", "💀",
    "☠️", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽",
    "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💌", "💘", "💝", "💖",
    "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️", "🧡", "💛",
    "💚", "💙", "💜", "🖤", "💯", "💢", "💥", "💫", "💦", "💨",
    "🕳️", "💬", "🗨️", "🗯️", "💭", "💤", "💋", "👄", "💧", "👅"
];

function ChatInput({ channelName, channelId, userName, chatRef }) {
    const { addMessage } = useChatStore();
    const [input, setInput] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);
    const emojiRef = useRef(null);

    // Fechar emoji picker quando clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (emojiRef.current && !emojiRef.current.contains(event.target)) {
                setShowEmojis(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();

        if (!channelId || !input.trim()) {
            return false;
        }

        addMessage(channelId, userName, input);

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput("");
    };

    const handleEmojiClick = (emoji) => {
        setInput(prev => prev + emoji);
        setShowEmojis(false);
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
                        <EmojiButton
                            type="button"
                            onClick={() => setShowEmojis(!showEmojis)}
                        >
                            <EmojiEmotionsIcon />
                        </EmojiButton>
                    </InputIcons>
                </InputWrapper>

                {showEmojis && (
                    <EmojiPicker ref={emojiRef}>
                        <EmojiGrid>
                            {POPULAR_EMOJIS.map((emoji, index) => (
                                <EmojiItem
                                    key={index}
                                    onClick={() => handleEmojiClick(emoji)}
                                >
                                    {emoji}
                                </EmojiItem>
                            ))}
                        </EmojiGrid>
                    </EmojiPicker>
                )}

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
    flex-shrink: 0;
    position: relative;
    
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

const EmojiButton = styled(IconButton)`
    position: relative;
`;

const EmojiPicker = styled.div`
    position: absolute;
    bottom: 100%;
    right: 16px;
    background-color: #2d3748;
    border: 1px solid #4a5568;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 8px;
    max-width: 320px;
    max-height: 300px;
    overflow-y: auto;
    z-index: 1000;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
`;

const EmojiGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 4px;
`;

const EmojiItem = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: #ffffff11;
        transform: scale(1.1);
    }
`;