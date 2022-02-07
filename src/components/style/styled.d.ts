// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultStyle {
    colors: {
      main: string;
      secondary: string;
    };
    background: string;
    border: string;
    borderRadius: string;
  }

 