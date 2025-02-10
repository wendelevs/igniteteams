import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    text-align: center;
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_300};
`;