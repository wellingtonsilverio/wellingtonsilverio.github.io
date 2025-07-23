import { useRef, useEffect } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { useChatStore } from "../services/chat";

function Chat() {
    const { channel } = useChatStore();
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const roomMessages = channel[roomId];

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomId]);

    return (
        <ChatContainer>
            {roomMessages && (
                <>
                    <Header>
                        <HeaderLeft>
                            <h4>
                                <strong>#wellingtonsilverio</strong>
                            </h4>
                            <StarBorderOutlinedIcon />
                        </HeaderLeft>

                        <HeaderRight>
                            <p>
                                <InfoOutlinedIcon /> Details
                            </p>
                        </HeaderRight>
                    </Header>
                    <ChatMessages>
                        {roomMessages?.map((message) => {
                            const { user, message: msg, timestamp } = message;
                            return (
                                <Message
                                    key={timestamp}
                                    message={msg}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={''}
                                />
                            );
                        })}

                        <ChatBottom ref={chatRef} />
                    </ChatMessages>

                    <ChatInput
                        chatRef={chatRef}
                        channelName={'wellingtonsilverio'}
                        channelId={roomId}
                        userName="Visitante"
                    />
                </>
            )}
        </ChatContainer>
    );
};

export default Chat;

const ChatBottom = styled.div`
    padding-bottom: 200px;
    `;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    `;

const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }
    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
    `;

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
    `;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
    `;