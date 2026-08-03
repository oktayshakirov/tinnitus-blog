export const colors = {
  primary: '#ffdab9',
  background: '#5B3964',
  // Opaque equivalents of the translucent surfaces we layer on `background`.
  // Sticky table cells have to paint over the columns scrolling beneath them,
  // so they cannot use an alpha fill.
  surface: '#603F69', // background + 3% white
  surfaceStrong: '#6A4B72', // surface + 6% white
};
