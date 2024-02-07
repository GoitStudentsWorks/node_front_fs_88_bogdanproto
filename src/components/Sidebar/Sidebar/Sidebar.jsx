import { routes } from 'const/routes/routes.js';
import { Backdrop, SidebarStyled, LogoLink, LogoText, LogOut } from './Sidebar.styled';
//import { LogoSvg } from 'components/common/LogoSvg/LogoSvg'
import { Btn } from 'components/common/Btn/Btn';
import { BoardsList } from '../BoardsList/BoardsList';
import { Support } from '../Support/Support'
import { Icon } from 'components/common/Icon/Icon'

export const Sidebar = () => {
    return (
        <Backdrop>
            <SidebarStyled>
                <LogoLink to={routes.HOME}> 
                    <div>
                        <Icon width={12} height={16} id={'icon-logo-small'}></Icon>
                    </div>
                    {/*<LogoSvg></LogoSvg>*/}
                    <LogoText>Task Pro</LogoText>
                </LogoLink>
                <BoardsList></BoardsList>
                <Support></Support>
                <LogOut>
                    <Btn text="Log Out" variant="logout"></Btn>
                </LogOut>
            </SidebarStyled>
        </Backdrop>
    );
};