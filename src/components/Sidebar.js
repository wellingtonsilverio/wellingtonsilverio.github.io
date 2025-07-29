import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import CreateIcon from '@mui/icons-material/Create';
// import ReceiptIcon from '@mui/icons-material/Receipt';
// import CallIcon from '@mui/icons-material/Call';
// import QuizIcon from '@mui/icons-material/Quiz';
// import AppsIcon from "@mui/icons-material/Apps";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
// import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
// import TagIcon from "@mui/icons-material/Tag";
// import { useChatStore } from '../services/chat';

function Sidebar() {
    // const { channel } = useChatStore();

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Seja bem-vindo!</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {'Visitante'}
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            <SidebarOption Icon={ExpandMoreIcon} title="Canais" />
            <SidebarOption Icon={PersonIcon} title="Sobre" goTo="/about" />
            {/* <SidebarOption Icon={AppsIcon} title="Projetos Recentes" goTo="/projects" /> */}
            <SidebarOption Icon={BusinessCenterIcon} title="Experiências Profissionais" goTo="/experiences" />
            <SidebarOption Icon={SchoolIcon} title="Formação Acadêmica" goTo="/academics" />
            {/* <SidebarOption Icon={FitnessCenterIcon} title="Hobbies" goTo="/hobbies" /> */}
            {/* <SidebarOption Icon={ReceiptIcon} title="Orçamento" goTo="/budget" /> */}
            {/* <SidebarOption Icon={QuizIcon} title="FAQ" goTo="/faq" /> */}
            {/* <SidebarOption Icon={CallIcon} title="Contato" goTo="/contact" /> */}
            <SidebarOption Icon={AddIcon} title="Adicionar canais" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Mensagens diretas" />
            {/* <SidebarOption Icon={TagIcon} key="wellingtonsilverio" id="wellingtonsilverio" title="wellingtonsilverio" />
            {Object.keys(channel).map((channelName) => (
                <SidebarOption key={channelName} id={channelName} title={channelName} />
            ))} */}
        </SidebarContainer>
    );
};

export default Sidebar;

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    
    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
    `;

const SidebarHeader = styled.div`
    display: flex;
    border-top: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
    `;

const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
    `;