
/**
 * paper theme decalaration.
 */
declare type Mode = 'adaptive' | 'exact';
declare type Font = {
    fontFamily: string;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
};
declare type Fonts = {
    regular: Font;
    medium: Font;
    light: Font;
    thin: Font;
};
export type PaperTheme = {
    dark: boolean;
    mode?: Mode;
    roundness: number;
    colors: {
        primary: string;
        background: string;
        surface: string;
        accent: string;
        error: string;
        text: string;
        onSurface: string;
        onBackground: string;
        disabled: string;
        placeholder: string;
        backdrop: string;
        notification: string;
    };
    fonts: Fonts;
    animation: {
        scale: number;
    };
};