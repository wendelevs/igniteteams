import { DefaultTheme } from "styled-components";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`;