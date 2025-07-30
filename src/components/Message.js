import { forwardRef } from "react";
import styled from "styled-components";
import moment from "moment";

const Message = forwardRef(({ message, timestamp, user, userImage, isSearchResult, isCurrentSearchResult }, ref) => {
    return (
        <MessageContainer
            ref={ref}
            isSearchResult={isSearchResult}
            isCurrentSearchResult={isCurrentSearchResult}
        >
            <Avatar>
                {userImage ? (
                    <img src={userImage} alt={user} />
                ) : (
                    <AvatarPlaceholder>
                        {user.charAt(0).toUpperCase()}
                    </AvatarPlaceholder>
                )}
            </Avatar>
            <MessageInfo>
                <MessageHeader>
                    <UserName>{user}</UserName>
                    <Timestamp>
                        {moment(timestamp).format('h:mm A')}
                    </Timestamp>
                </MessageHeader>
                <MessageContent>{message}</MessageContent>
            </MessageInfo>
        </MessageContainer>
    );
});

Message.displayName = 'Message';

export default Message;

const MessageContainer = styled.div`
    display: flex;
    padding: 8px 16px;
    margin: 4px 16px;
    border-radius: 4px;
    transition: all 0.2s ease;
    
    ${props => props.isSearchResult && `
        background-color: #5ca0e122;
        border-left: 3px solid #5ca0e1;
    `}
    
    ${props => props.isCurrentSearchResult && `
        background-color: #5ca0e144 !important;
        border-left: 3px solid #ffffff;
        animation: pulse 1s ease-in-out;
    `}
    
    &:hover {
        background-color: #ffffff08;
    }
    
    @keyframes pulse {
        0% { background-color: #5ca0e166; }
        50% { background-color: #5ca0e144; }
        100% { background-color: #5ca0e144; }
    }
`;

const Avatar = styled.div`
    margin-right: 12px;
    flex-shrink: 0;
    
    > img {
        width: 36px;
        height: 36px;
        border-radius: 4px;
        object-fit: cover;
    }
`;

const AvatarPlaceholder = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 4px;
    background: linear-gradient(135deg, #5ca0e1, #4a90e2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 14px;
`;

const MessageInfo = styled.div`
    flex: 1;
    min-width: 0;
`;

const MessageHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
`;

const UserName = styled.span`
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
`;

const Timestamp = styled.span`
    font-size: 12px;
    color: #ffffff66;
    font-weight: 400;
`;

const MessageContent = styled.p`
    margin: 0;
    font-size: 15px;
    line-height: 1.4;
    color: #d1d2d3;
    word-wrap: break-word;
`;