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
                        <SidebarImg src="images/2018GerizimCCWhite.png">
                            
                        </SidebarImg>
                    </SidebarLink>
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
                    <SidebarRoute to="/signin">YouTube</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
