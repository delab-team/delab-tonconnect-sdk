import { styled } from 'solid-styled-components';
import { Button, IconButton, Text } from 'src/app/components';

export const QrCodeModalStyled = styled.div`
    padding: 0 24px;
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute;
    top: 16px;
    left: 16px;
`;

export const QRBackgroundStyled = styled.div`
    margin-bottom: 16px;
    background-color: ${props => props.theme!.colors.background.secondary};
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
`;

export const ButtonsContainerStyled = styled.div`
    display: flex;
    gap: 16px;
    height: 56px;
    margin-bottom: 24px;
`;

export const ActionButtonStyled = styled(Button)`
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.32px;
    width: 100%;
`;

export const GetWalletStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TextStyled = styled(Text)`
    color: ${props => props.theme!.colors.text.secondary};
    font-size: 16px;
`;
