var main = document.querySelector("main") || document.body;
var head = document.head || document.querySelector("head");

// Correction CSS
addStyle(head, `
:root, .fui-FluentProviderr0 {
  /* Neutral foregrounds */
  --colorNeutralForeground1: var(--foreground-color) !important;
  --colorNeutralForeground1Hover: var(--foreground-color) !important;
  --colorNeutralForeground1Pressed: var(--foreground-color) !important;
  --colorNeutralForeground1Selected: var(--foreground-color) !important;

  --colorNeutralForeground2: var(--foreground-color) !important;
  --colorNeutralForeground2Hover: var(--foreground-color) !important;
  --colorNeutralForeground2Pressed: var(--foreground-color) !important;
  --colorNeutralForeground2Selected: var(--foreground-color) !important;

  --colorNeutralForeground3: var(--foreground-color) !important;
  --colorNeutralForeground3Hover: var(--foreground-color) !important;
  --colorNeutralForeground3Pressed: var(--foreground-color) !important;
  --colorNeutralForeground3Selected: var(--foreground-color) !important;

  --colorNeutralForeground4: var(--foreground-color) !important;
  --colorNeutralForeground5: var(--foreground-color) !important;
  --colorNeutralForeground5Hover: var(--foreground-color) !important;
  --colorNeutralForeground5Pressed: var(--foreground-color) !important;
  --colorNeutralForeground5Selected: var(--foreground-color) !important;

  --colorNeutralForegroundDisabled: var(--off-canvas-hover) !important;
  --colorNeutralForegroundInvertedDisabled: var(--off-canvas-background) !important;

  /* Brand / link foregrounds */
  --colorBrandForegroundLink: var(--content-ui-foreground) !important;
  --colorBrandForegroundLinkHover: var(--content-ui-hover) !important;
  --colorBrandForegroundLinkPressed: var(--content-ui-foreground) !important;
  --colorBrandForegroundLinkSelected: var(--content-ui-foreground) !important;

  --colorNeutralForeground2Link: var(--foreground-color) !important;
  --colorNeutralForeground2LinkHover: var(--foreground-color) !important;
  --colorNeutralForeground2LinkPressed: var(--foreground-color) !important;
  --colorNeutralForeground2LinkSelected: var(--foreground-color) !important;

  --colorCompoundBrandForeground1: var(--content-ui-foreground) !important;
  --colorCompoundBrandForeground1Hover: var(--content-ui-hover) !important;
  --colorCompoundBrandForeground1Pressed: var(--content-ui-foreground) !important;

  --colorBrandForeground1: var(--content-ui-foreground) !important;
  --colorBrandForeground2: var(--content-ui-background) !important;
  --colorBrandForeground2Hover: var(--content-ui-hover) !important;
  --colorBrandForeground2Pressed: var(--content-ui-background) !important;

  --colorNeutralForeground1Static: var(--foreground-color) !important;
  --colorNeutralForegroundStaticInverted: var(--sbx-color-foreground-primary) !important;

  --colorNeutralForegroundInverted: var(--sbx-color-foreground-primary) !important;
  --colorNeutralForegroundInvertedHover: var(--sbx-color-foreground-primary) !important;
  --colorNeutralForegroundInvertedPressed: var(--sbx-color-foreground-primary) !important;
  --colorNeutralForegroundInvertedSelected: var(--sbx-color-foreground-primary) !important;

  --colorNeutralForegroundInverted2: var(--sbx-color-foreground-primary) !important;
  --colorNeutralForegroundOnBrand: var(--sbx-color-foreground-primary) !important;

  --colorNeutralForegroundInvertedLink: var(--sbx-color-foreground-primary) !important;
  --colorNeutralForegroundInvertedLinkHover: var(--sbx-color-foreground-primary) !important;
  --colorNeutralForegroundInvertedLinkPressed: var(--sbx-color-foreground-primary) !important;
  --colorNeutralForegroundInvertedLinkSelected: var(--sbx-color-foreground-primary) !important;

  /* Brand foreground on light */
  --colorBrandForegroundInverted: var(--content-ui-foreground) !important;
  --colorBrandForegroundInvertedHover: var(--content-ui-hover) !important;
  --colorBrandForegroundInvertedPressed: var(--content-ui-foreground) !important;

  --colorBrandForegroundOnLight: var(--content-ui-foreground) !important;
  --colorBrandForegroundOnLightHover: var(--content-ui-hover) !important;
  --colorBrandForegroundOnLightPressed: var(--content-ui-foreground) !important;
  --colorBrandForegroundOnLightSelected: var(--content-ui-foreground) !important;

  /* Neutral backgrounds */
  --colorNeutralBackground1: var(--background-color) !important;
  --colorNeutralBackground1Hover: var(--off-canvas-background) !important;
  --colorNeutralBackground1Pressed: var(--off-canvas-hover) !important;
  --colorNeutralBackground1Selected: var(--off-canvas-background) !important;

  --colorNeutralBackground2: var(--off-canvas-background) !important;
  --colorNeutralBackground2Hover: var(--off-canvas-hover) !important;
  --colorNeutralBackground2Pressed: var(--off-canvas-hover) !important;
  --colorNeutralBackground2Selected: var(--off-canvas-background) !important;

  --colorNeutralBackground3: var(--widget-background-color) !important;
  --colorNeutralBackground3Hover: var(--off-canvas-background) !important;
  --colorNeutralBackground3Pressed: var(--off-canvas-hover) !important;
  --colorNeutralBackground3Selected: var(--off-canvas-background) !important;

  --colorNeutralBackground4: var(--off-canvas-background) !important;
  --colorNeutralBackground4Hover: var(--off-canvas-hover) !important;
  --colorNeutralBackground4Pressed: var(--off-canvas-hover) !important;
  --colorNeutralBackground4Selected: var(--off-canvas-background) !important;

  --colorNeutralBackground5: var(--off-canvas-background) !important;
  --colorNeutralBackground5Hover: var(--off-canvas-hover) !important;
  --colorNeutralBackground5Pressed: var(--off-canvas-hover) !important;
  --colorNeutralBackground5Selected: var(--off-canvas-background) !important;

  --colorNeutralBackground6: var(--background-color) !important;
  --colorNeutralBackground7: transparent !important;
  --colorNeutralBackground7Hover: var(--off-canvas-background) !important;
  --colorNeutralBackground7Pressed: var(--off-canvas-hover) !important;
  --colorNeutralBackground7Selected: transparent !important;

  --colorNeutralBackground8: var(--background-color) !important;

  --colorNeutralBackgroundInverted: var(--sbx-color-foreground-primary) !important;
  --colorNeutralBackgroundInvertedHover: var(--sbx-config-color-active) !important;
  --colorNeutralBackgroundInvertedPressed: var(--content-ui-background) !important;
  --colorNeutralBackgroundInvertedSelected: var(--content-ui-hover) !important;

  --colorNeutralBackgroundStatic: var(--off-canvas-background) !important;

  --colorNeutralBackgroundAlpha: var(--content-ui-background) !important;
  --colorNeutralBackgroundAlpha2: var(--content-ui-hover) !important;

  /* Subtle backgrounds */
  --colorSubtleBackground: transparent !important;
  --colorSubtleBackgroundHover: var(--off-canvas-background) !important;
  --colorSubtleBackgroundPressed: var(--off-canvas-hover) !important;
  --colorSubtleBackgroundSelected: var(--off-canvas-background) !important;

  --colorSubtleBackgroundLightAlphaHover: var(--content-ui-background) !important;
  --colorSubtleBackgroundLightAlphaPressed: var(--content-ui-hover) !important;
  --colorSubtleBackgroundLightAlphaSelected: transparent !important;

  --colorSubtleBackgroundInverted: transparent !important;
  --colorSubtleBackgroundInvertedHover: var(--content-ui-background) !important;
  --colorSubtleBackgroundInvertedPressed: var(--content-ui-hover) !important;
  --colorSubtleBackgroundInvertedSelected: var(--content-ui-background) !important;

  /* Transparent backgrounds */
  --colorTransparentBackground: transparent !important;
  --colorTransparentBackgroundHover: transparent !important;
  --colorTransparentBackgroundPressed: transparent !important;
  --colorTransparentBackgroundSelected: transparent !important;

  /* Disabled backgrounds */
  --colorNeutralBackgroundDisabled: var(--off-canvas-background) !important;
  --colorNeutralBackgroundDisabled2: var(--off-canvas-hover) !important;
  --colorNeutralBackgroundInvertedDisabled: var(--content-ui-background) !important;

  /* Cards */
  --colorNeutralCardBackground: var(--widget-background-color) !important;
  --colorNeutralCardBackgroundHover: var(--off-canvas-background) !important;
  --colorNeutralCardBackgroundPressed: var(--off-canvas-hover) !important;
  --colorNeutralCardBackgroundSelected: var(--off-canvas-background) !important;
  --colorNeutralCardBackgroundDisabled: var(--off-canvas-background) !important;

  /* Brand backgrounds */
  --colorBrandBackground: var(--content-ui-foreground) !important;
  --colorBrandBackgroundHover: var(--content-ui-hover) !important;
  --colorBrandBackgroundPressed: var(--content-ui-foreground) !important;
  --colorBrandBackgroundSelected: var(--content-ui-foreground) !important;

  --colorCompoundBrandBackground: var(--content-ui-foreground) !important;
  --colorCompoundBrandBackgroundHover: var(--content-ui-hover) !important;
  --colorCompoundBrandBackgroundPressed: var(--content-ui-foreground) !important;

  --colorBrandBackgroundStatic: var(--content-ui-foreground) !important;

  --colorBrandBackground2: var(--content-ui-background) !important;
  --colorBrandBackground2Hover: var(--content-ui-hover) !important;
  --colorBrandBackground2Pressed: var(--content-ui-background) !important;

  --colorBrandBackground3Static: var(--content-ui-foreground) !important;
  --colorBrandBackground4Static: var(--content-ui-background) !important;

  --colorBrandBackgroundInverted: var(--sbx-color-foreground-primary) !important;
  --colorBrandBackgroundInvertedHover: var(--sbx-config-color-active) !important;
  --colorBrandBackgroundInvertedPressed: var(--content-ui-background) !important;
  --colorBrandBackgroundInvertedSelected: var(--content-ui-hover) !important;

  /* Strokes */
  --colorNeutralStrokeAccessible: var(--off-canvas-hover) !important;
  --colorNeutralStrokeAccessibleHover: var(--foreground-color) !important;
  --colorNeutralStrokeAccessiblePressed: var(--foreground-color) !important;
  --colorNeutralStrokeAccessibleSelected: var(--content-ui-foreground) !important;

  --colorNeutralStroke1: var(--off-canvas-background) !important;
  --colorNeutralStroke1Hover: var(--off-canvas-hover) !important;
  --colorNeutralStroke1Pressed: var(--off-canvas-hover) !important;
  --colorNeutralStroke1Selected: var(--off-canvas-background) !important;

  --colorNeutralStroke2: var(--off-canvas-hover) !important;
  --colorNeutralStroke3: var(--off-canvas-background) !important;
  --colorNeutralStroke4: var(--off-canvas-background) !important;
  --colorNeutralStroke4Hover: var(--off-canvas-hover) !important;
  --colorNeutralStroke4Pressed: var(--off-canvas-hover) !important;
  --colorNeutralStroke4Selected: var(--off-canvas-background) !important;

  --colorNeutralStrokeSubtle: var(--off-canvas-background) !important;
  --colorNeutralStrokeOnBrand: var(--background-color) !important;

  --colorNeutralStrokeOnBrand2: var(--sbx-color-foreground-primary) !important;
  --colorNeutralStrokeOnBrand2Hover: var(--sbx-color-foreground-primary) !important;
  --colorNeutralStrokeOnBrand2Pressed: var(--sbx-color-foreground-primary) !important;
  --colorNeutralStrokeOnBrand2Selected: var(--sbx-color-foreground-primary) !important;

  --colorBrandStroke1: var(--content-ui-foreground) !important;
  --colorBrandStroke2: var(--content-ui-foreground) !important;
  --colorBrandStroke2Hover: var(--content-ui-hover) !important;
  --colorBrandStroke2Pressed: var(--content-ui-foreground) !important;
  --colorBrandStroke2Contrast: var(--content-ui-foreground) !important;

  --colorCompoundBrandStroke: var(--content-ui-foreground) !important;
  --colorCompoundBrandStrokeHover: var(--content-ui-hover) !important;
  --colorCompoundBrandStrokePressed: var(--content-ui-foreground) !important;

  --colorNeutralStrokeDisabled: var(--off-canvas-background) !important;
  --colorNeutralStrokeDisabled2: var(--off-canvas-hover) !important;
  --colorNeutralStrokeInvertedDisabled: var(--content-ui-background) !important;

  --colorTransparentStroke: transparent !important;
  --colorTransparentStrokeInteractive: transparent !important;
  --colorTransparentStrokeDisabled: transparent !important;

  --colorNeutralStrokeAlpha: var(--content-ui-background) !important;
  --colorNeutralStrokeAlpha2: var(--content-ui-hover) !important;

  --colorStrokeFocus1: var(--foreground-color) !important;
  --colorStrokeFocus2: var(--sbx-color-foreground-primary) !important;

  /* Canvas / avatar */
  --backgroundCanvas: var(--fc-page-bg-color) !important;
  --colorAvatar: var(--content-ui-foreground) !important;
  --colorAvatarBackground: var(--content-ui-background) !important;

  --colorDefaultBackground7: var(--background-color) !important;

  /* Teams brand */
  --colorTeamsBrand1Hover: var(--content-ui-hover) !important;
  --colorTeamsBrand1Pressed: var(--content-ui-foreground) !important;
  --colorTeamsBrand1Selected: var(--content-ui-hover) !important;
}

:root, .fui-FluentProviderr0 {
  /* Blacks & whites */
  --black: var(--foreground-color) !important;
  --blackTranslucent50: var(--off-canvas-hover) !important;
  --blackTranslucent40: var(--off-canvas-hover) !important;
  --blackTranslucent20: var(--off-canvas-background) !important;
  --blackTranslucent10: var(--off-canvas-background) !important;

  --white: var(--sbx-color-foreground-primary) !important;
  --whiteTranslucent40: var(--sbx-config-color-active) !important;
  --whiteTranslucent50: var(--sbx-config-color-active) !important;
  --whiteTranslucent65: var(--sbx-config-color-active) !important;
  --whiteTranslucent70: var(--sbx-config-color-active) !important;
  --whiteTranslucent90: var(--fc-page-bg-color) !important;

  /* Neutral grayscale */
  --neutralDark: var(--foreground-color) !important;
  --neutralPrimary: var(--foreground-color) !important;
  --neutralPrimaryAlt: var(--foreground-color) !important;
  --neutralPrimarySurface: var(--widget-background-color) !important;

  --neutralSecondary: var(--off-canvas-foreground) !important;
  --neutralSecondaryAlt: var(--off-canvas-hover) !important;
  --neutralSecondarySurface: var(--off-canvas-background) !important;

  --neutralTertiary: var(--content-ui-background) !important;
  --neutralTertiaryAlt: var(--content-ui-hover) !important;

  --neutralQuaternary: var(--off-canvas-background) !important;
  --neutralQuaternaryAlt: var(--off-canvas-hover) !important;

  --neutralLight: var(--off-canvas-background) !important;
  --neutralLighter: var(--off-canvas-background) !important;
  --neutralLighterAlt: var(--background-color) !important;

  /* Neutral backgrounds */
  --richUserContentBackground: var(--widget-background-color) !important;
  --composeNeutralBackground: var(--widget-background-color) !important;
  --composeNeutralLighterBackground: var(--off-canvas-background) !important;

  --readingPaneCardBorder: var(--off-canvas-hover) !important;
  --readingPaneCardFocusBorder: var(--content-ui-hover) !important;

  --suiteuxNeutralLight: var(--off-canvas-background) !important;
  --suiteuxNeutralSecondary: var(--foreground-color) !important;

  --flaggedMessage: var(--background-color) !important;

  /* Neutral warnings (non‑colorful ones only) */
  --messageWebWarning: var(--neutralLighter) !important;
  --messageMobileWarningTint40: var(--neutralLighterAlt) !important;

  /* Neutral presence */
  --presenceInvisible: var(--neutralSecondary) !important;

  /* Neutral surfaces */
  --neutralBackground6: var(--off-canvas-background) !important;
  --neutralForeground4: var(--foreground-color) !important;
  --neutralBackground2Pressed: var(--off-canvas-hover) !important;

  /* Shared neutral tints */
  --sharedCornflowerTint60: var(--neutralLighterAlt) !important;

  /* Neutral map backgrounds */
  --mapBackgroundFloor: var(--neutralLighterAlt) !important;
  --mapBackgroundFacilities: var(--widget-background-color) !important;
  --mapBackgroundWall: var(--widget-background-color) !important;
  --mapBackgroundArea: var(--neutralSecondarySurface) !important;
  --mapBackgroundUnavailable: var(--neutralSecondaryAlt) !important;
  --mapBackgroundFree: var(--neutralTertiary) !important;

  --mapStrokeFloorAndWall: var(--neutralSecondary) !important;

  /* Neutral text fills */
  --pinAvailableTextFill: var(--foreground-color) !important;
  --pinUnavailableTextFill: var(--foreground-color) !important;

  /* Neutral gradients */
  --placesLightBackground3: var(--neutralLighter) !important;
  --placesNeutralGrey92: var(--neutralQuaternaryAlt) !important;

  /* Neutral strokes */
  --placesRemoteUnspecifiedBackground1: var(--neutralQuaternaryAlt) !important;
  --placesRemoteUnspecifiedForeground1: var(--neutralPrimary) !important;

  /* Neutral OOF */
  --placesOOFBackground1: var(--neutralLighter) !important;
  --placesOOFForeground1: var(--neutralPrimary) !important;

  /* Neutral remote */
  --placesRemote1: var(--neutralSecondarySurface) !important;
  --placesRemoteBorder1: var(--neutralPrimary) !important;

  /* Neutral lilac (light only) */
  --lilacBackground2: var(--neutralLighter) !important;

  /* Neutral eventify */
  --eventifySurveyListItemBorder: var(--neutralTertiary) !important;
  --eventifyEventPreviewColor: var(--neutralPrimary) !important;

  /* Neutral app background */
  --appBackgroundGradientColor: var(--whiteTranslucent70) !important;

  /* Neutral copilot background */
  --copilotAppBackgroundGradientColor: var(--blackTranslucent50) !important;

  /* Neutral transparent strokes */
  --customNeutralStrokeTransparent2: transparent !important;

  /* Neutral strokes on background */
  --customNeutralStrokeOnBackground1: var(--neutralSecondary) !important;
  --customNeutralStrokeOnBackground1Hover: var(--neutralPrimary) !important;
  --customNeutralStrokeOnBackground1Pressed: var(--neutralPrimaryAlt) !important;

  /* Neutral non-focus background */
  --customNeutralNonFocusBackground: var(--neutralTertiaryAlt) !important;

  /* Neutral yellow background (light neutral) */
  --customYellowBackground: var(--neutralLighter) !important;

  /* Neutral inverted transparencies */
  --colorNeutralBackgroundInvertedTransparent4: var(--whiteTranslucent40) !important;
  --colorNeutralBackgroundInvertedTransparent5: var(--whiteTranslucent50) !important;

  /* Neutral calendar border */
  --calendarWorkHoursBorder: var(--neutralSecondary) !important;

  /* Neutral copilot white */
  --copilotThemeWhite: var(--white) !important;
  --copilotThemeWhiteTranslucent: var(--whiteTranslucent40) !important;

  /* Neutral archive/delete hover backgrounds */
  --archiveBigHoverBackground: var(--neutralLighter) !important;
  --deleteBigHoverBackground: var(--neutralLighter) !important;

  /* Neutral attachment overlays */
  --attachmentThumbnailOverlay: var(--blackTranslucent50) !important;
  --attachmentThumbnailOverlayHover: var(--blackTranslucent40) !important;

  /* Neutral theme colors */
  --themeDarker: var(--neutralDark) !important;
  --themeDark: var(--neutralPrimary) !important;
  --themeDarkAlt: var(--neutralPrimary) !important;
  --themePrimary: var(--neutralSecondary) !important;
  --themeSecondary: var(--neutralSecondaryAlt) !important;
  --themeTertiary: var(--neutralTertiary) !important;
  --themeLight: var(--neutralLight) !important;
  --themeLighter: var(--neutralLighter) !important;
  --themeLighterAlt: var(--neutralLighterAlt) !important;

  /* Neutral header */
  --headerBackgroundSearch: var(--neutralPrimary) !important;
  --headerBrandText: var(--white) !important;
  --headerTextIcons: var(--white) !important;
  --headerSearchBoxBackground: var(--whiteTranslucent70) !important;
  --headerSearchBoxIcon: var(--neutralDark) !important;
  --headerSearchPlaceholderText: var(--neutralDark) !important;
  --headerSearchButtonBackground: var(--neutralPrimary) !important;
  --headerSearchButtonBackgroundHover: var(--neutralDark) !important;
  --headerSearchButtonIcon: var(--white) !important;
  --headerSearchFilters: var(--neutralPrimary) !important;
  --headerSearchFiltersHover: var(--neutralDark) !important;
  --headerButtonsBackground: var(--neutralPrimary) !important;
  --headerButtonsBackgroundHover: var(--neutralPrimaryAlt) !important;
  --headerBadgeBackground: var(--neutralDark) !important;
  --headerBadgeText: var(--white) !important;
  --headerSearchIcon: var(--white) !important;

  /* Neutral search box */
  --searchBoxBackground: var(--whiteTranslucent70) !important;

  /* Neutral fallback values */
  --fallback-black: var(--foreground-color) !important;
  --fallback-white: var(--sbx-color-foreground-primary) !important;
  --fallback-neutralDark: var(--neutralDark) !important;
  --fallback-neutralPrimary: var(--neutralPrimary) !important;
  --fallback-neutralSecondary: var(--neutralSecondary) !important;
  --fallback-neutralTertiary: var(--neutralTertiary) !important;
  --fallback-neutralQuaternary: var(--neutralQuaternary) !important;
  --fallback-neutralLight: var(--neutralLight) !important;
  --fallback-neutralLighter: var(--neutralLighter) !important;
  --fallback-neutralLighterAlt: var(--neutralLighterAlt) !important;
}

button, input, select {
    align-items: center;
    justify-content: center;
    text-decoration-line: none;
    vertical-align: middle;
    margin: 0;
    overflow: hidden;
    background-color: var(--colorBrandForeground1);
    color: var(--colorNeutralForegroundStaticInverted);
    border: none;
    font-family: var(--fontFamilyBase);
    outline-style: none;
    padding: 5px 10px !important;
    border-radius: 5px;
    font-size: var(--fontSizeBase300);
    font-weight: var(--fontWeightSemibold);
    line-height: var(--lineHeightBase300);
    transition-duration: var(--durationFaster);
    transition-property: background, border, color;
    transition-timing-function: var(--curveEasyEase);
}

button:hover {
    background-color: var(--colorBrandForeground2);
}

.fui-MessageBar {
    background-color: var(--off-canvas-background) !important;
}

select {
    color: var(--colorNeutralForegroundStaticInverted) !important;
}
`);

// Initialize theme using shared utilities
initializeTheme('coolerlookTheme', 'light');
