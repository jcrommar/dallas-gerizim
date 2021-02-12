import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarImg
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink>
                        <SidebarImg src="images/Gerizim2021LOGO_WHITE.png">
                            
                        </SidebarImg>
                    </SidebarLink>
                    {/*<SidebarLink to="evento" onClick={toggle}>
                        Congreso
                    </SidebarLink>*/}
                    <SidebarLink to="about" onClick={toggle}>
                        Pastores
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Eventos
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Servicios
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Ubicacion
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/youtube" aria-label="YouTube-Live">YouTube</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
