import styled from "styled-components/native";
import { DefaultTheme } from "styled-components"
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ButtonTypeStyleProps;
    theme: DefaultTheme;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${({ theme, type }: { theme: DefaultTheme; type: ButtonTypeStyleProps }) => type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD};
`;