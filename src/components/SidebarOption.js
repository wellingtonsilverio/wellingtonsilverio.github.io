import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { useChatStore } from "../services/chat";

function SidebarOption({ Icon, title, addChannelOption, id, goTo }) {
    const navigate = useNavigate();
    const { addChannel: addChannelStore } = useChatStore();
    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name !");

        if (channelName) {
            addChannelStore(channelName);
        }
    };

    const selectChannel = () => {
        if (id) {
            dispatch(
                enterRoom({
                    roomId: id,
                })
            );
        }
    };

    const handleClickSidebarOptionContainer = () => {
        if (goTo) {
            navigate(goTo);
        }
        if (addChannelOption) {
            addChannel();
        }

        selectChannel();
    }

    return (
        <SidebarOptionContainer
            onClick={handleClickSidebarOptionContainer}
        >
            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;
    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }
    > h3 {
        font-weight: 500;
    }
    > h3 > span {
        padding: 15px;
    }
    `;

const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
    
    `;