import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatInput from "../components/ChatInput";
import Message from "../components/Message";
import { useChatStore } from "../services/chat";
import { useAppStore } from "../services/app";
import HRDate from "../components/HRDate";

function Chat() {
    const { channel } = useChatStore();
    const chatRef = useRef(null);
    const { roomId } = useAppStore();
    const roomMessages = channel[roomId];
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
    const searchRefs = useRef({});

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomId]);

    // Função de busca
    const handleSearch = (term) => {
        setSearchTerm(term);
        if (!term.trim() || !roomMessages) {
            setSearchResults([]);
            setCurrentSearchIndex(0);
            return;
        }

        const results = roomMessages
            .map((message, index) => ({
                ...message,
                originalIndex: index,
            }))
            .filter((message) =>
                message.message.toLowerCase().includes(term.toLowerCase()) ||
                message.user.toLowerCase().includes(term.toLowerCase())
            );

        setSearchResults(results);
        setCurrentSearchIndex(0);

        // Scroll para o primeiro resultado
        if (results.length > 0) {
            setTimeout(() => {
                const firstResult = searchRefs.current[results[0].originalIndex];
                if (firstResult) {
                    firstResult.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 100);
        }
    };

    // Navegar entre resultados
    const navigateSearchResults = (direction) => {
        if (searchResults.length === 0) return;

        let newIndex;
        if (direction === 'next') {
            newIndex = (currentSearchIndex + 1) % searchResults.length;
        } else {
            newIndex = currentSearchIndex === 0 ? searchResults.length - 1 : currentSearchIndex - 1;
        }

        setCurrentSearchIndex(newIndex);
        const result = searchResults[newIndex];
        const element = searchRefs.current[result.originalIndex];
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    // Keyboard shortcuts para busca
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'f') {
                    e.preventDefault();
                    document.getElementById('search-input')?.focus();
                }
            }
            if (searchTerm && searchResults.length > 0) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    navigateSearchResults('next');
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [searchTerm, searchResults, currentSearchIndex]);

    return (
        <Body>
            <ChatContainer>
                {roomMessages && (
                    <>
                        <Header>
                            <HeaderLeft>
                                <ChannelInfo>
                                    <ChannelName>
                                        <strong>#wellingtonsilverio</strong>
                                    </ChannelName>
                                    <ChannelMeta>
                                        <StarBorderOutlinedIcon />
                                        <UserCount>25</UserCount>
                                        <AttachFileIcon />
                                        <AttachmentCount>1</AttachmentCount>
                                        <AddTopic>Add a topic</AddTopic>
                                    </ChannelMeta>
                                </ChannelInfo>
                            </HeaderLeft>

                            <HeaderRight>
                                <HeaderIcons>
                                    <IconButton>
                                        <CallIcon />
                                    </IconButton>
                                    <IconButton>
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                    <SearchContainer>
                                        <SearchIcon />
                                        <SearchInput
                                            id="search-input"
                                            placeholder="Search"
                                            value={searchTerm}
                                            onChange={(e) => handleSearch(e.target.value)}
                                        />
                                        {searchTerm && searchResults.length > 0 && (
                                            <SearchResults>
                                                {currentSearchIndex + 1} of {searchResults.length}
                                                <SearchNav>
                                                    <SearchNavButton onClick={() => navigateSearchResults('prev')}>
                                                        ↑
                                                    </SearchNavButton>
                                                    <SearchNavButton onClick={() => navigateSearchResults('next')}>
                                                        ↓
                                                    </SearchNavButton>
                                                </SearchNav>
                                            </SearchResults>
                                        )}
                                    </SearchContainer>
                                    <IconButton>
                                        <span>@</span>
                                    </IconButton>
                                    <IconButton>
                                        <StarBorderOutlinedIcon />
                                    </IconButton>
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                </HeaderIcons>
                            </HeaderRight>
                        </Header>

                        <ChatMessages>
                            {roomMessages?.map((message, index) => {
                                const { user, message: msg, timestamp } = message;
                                const isSearchResult = searchResults.some(
                                    result => result.originalIndex === index
                                );
                                const isCurrentSearchResult = searchResults[currentSearchIndex]?.originalIndex === index;

                                // Verificar se deve mostrar a data
                                const shouldShowDate = () => {
                                    if (index === 0) return true;

                                    const currentDate = new Date(timestamp).toDateString();
                                    const previousDate = new Date(roomMessages[index - 1].timestamp).toDateString();

                                    return currentDate !== previousDate;
                                };

                                return (
                                    <div key={timestamp}>
                                        {shouldShowDate() && <HRDateSteled date={timestamp} />}
                                        <Message
                                            message={msg}
                                            timestamp={timestamp}
                                            user={user}
                                            userImage={''}
                                            ref={(el) => {
                                                searchRefs.current[index] = el;
                                            }}
                                            isSearchResult={isSearchResult}
                                            isCurrentSearchResult={isCurrentSearchResult}
                                        />
                                    </div>
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
        </Body>
    );
}

export default Chat;

const Body = styled.div`
  flex: 1;
  flex-grow: 1;
  flex-direction: column;
  margin-top: 60px;
  padding-top: 8px;

  color: #d1d2d3;

  background-color: #1b1d21;

  overflow: hidden;
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  border-bottom: 1px solid #ffffff22;
  background-color: #1b1d21;
  flex-shrink: 0;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ChannelName = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
`;

const ChannelMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #ffffff88;
  
  > .MuiSvgIcon-root {
    font-size: 14px;
  }
`;

const UserCount = styled.span`
  background-color: #ffffff22;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
`;

const AttachmentCount = styled.span`
  background-color: #ffffff22;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
`;

const AddTopic = styled.span`
  color: #5ca0e1;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #2d3748;
  border: 1px solid #4a5568;
  border-radius: 6px;
  padding: 6px 12px;
  min-width: 200px;
  
  &:focus-within {
    border-color: #5ca0e1;
  }
  
  > .MuiSvgIcon-root {
    color: #ffffff66;
    font-size: 16px;
    margin-right: 8px;
  }
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 14px;
  outline: none;
  flex: 1;
  
  &::placeholder {
    color: #ffffff66;
  }
`;

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #2d3748;
  border: 1px solid #4a5568;
  border-radius: 6px;
  padding: 8px;
  margin-top: 4px;
  font-size: 12px;
  color: #ffffff88;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

const SearchNav = styled.div`
  display: flex;
  gap: 4px;
`;

const SearchNavButton = styled.button`
  background: none;
  border: none;
  color: #ffffff88;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 10px;
  
  &:hover {
    background-color: #ffffff11;
    color: #ffffff;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #ffffff88;
  cursor: pointer;
  padding: 8px;
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

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

const HRDateSteled = styled(HRDate)`
  margin: 16px 0;
`;

const ChatBottom = styled.div`
  margin-bottom: 16px;
`;