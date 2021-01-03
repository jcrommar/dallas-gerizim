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
                        HOME
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        ORACION
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        CONTACTO
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        INFORMACION
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
