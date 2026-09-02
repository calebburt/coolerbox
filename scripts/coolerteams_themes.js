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
    padding: 5px 10px;
    border-radius: 5px;
    font-size: var(--fontSizeBase300);
    font-weight: var(--fontWeightSemibold);
    line-height: var(--lineHeightBase300);
    transition-duration: var(--durationFaster);
    transition-property: background, border, color;
    transition-timing-function: var(--curveEasyEase);
}

select {
    color: var(--colorNeutralForegroundStaticInverted) !important;
}
`);

// Initialize theme using shared utilities
initializeTheme('coolerteamsTheme', 'dark');
