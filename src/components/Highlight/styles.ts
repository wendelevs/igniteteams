import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components";

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;
`;

export const Title = styled.Text`
    ${({ theme }: { theme: DefaultTheme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
    `};

    text-align: center;
`;

export const Subtitle = styled.Text`
    ${({ theme }: { theme: DefaultTheme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_300};
    `};

    text-align: center;
`;