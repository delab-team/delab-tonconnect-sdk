import { styled } from 'solid-styled-components';
import { Button } from 'src/app/components';
import { rgba } from 'src/app/utils/css';
import { AccountButtonDropdown } from 'src/app/views/account-button/account-button-dropdown';
import { Notifications } from 'src/app/views/account-button/notifications';
import { THEME } from 'src/models';

export const AccountButtonStyled = styled(Button)`
    background-color: ${props => props.theme!.colors.connectButton.background};
    color: ${props => props.theme!.colors.connectButton.foreground};
    box-shadow: ${props => `0 4px 24px ${rgba(props.theme!.colors.constant.black, 0.16)}`};

    display: flex;
    align-items: center;
    gap: 9px;

    transition: filter 0.1s ease-in-out;

    &:hover:not(:active) {
        transform: scale(1);
    }

    &:hover {
        filter: ${props => `brightness(${props.theme!.theme === THEME.DARK ? 1.07 : 0.95})`};
    }
`;

export const DropdownButtonStyled = styled(AccountButtonStyled)`
    background-color: ${props => props.theme!.colors.background.primary};
`;

export const DropdownContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const DropdownStyled = styled(AccountButtonDropdown)<{ hidden: boolean }>`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`;

export const NotificationsStyled = styled(Notifications)`
    > div:first-child {
        margin-top: 20px;
    }
`;
