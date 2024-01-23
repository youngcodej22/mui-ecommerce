# MUI

https://mckayson.com/main/index.php
https://mui.com/material-ui/material-icons/?query=profile&selected=AccountCircle
https://mui.com/material-ui/react-button/
https://velog.io/@catca/React-Swipeable-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94-%EC%BB%A4%EC%8A%A4%ED%85%80
https://github.com/oliviertassinari/react-swipeable-views

## makeStyles는 legacy 더이상 사용 안함

v5부터는 `makeStyles`를 추천하지 않는다.

```tsx
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main, // Customize the background color
  },
  title: {
    flexGrow: 1,
  },
}));
```

아래 방법

- [customhook](https://velog.io/@dlruddms5619/Migration-MUI-v4-to-v5-makeStyles-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

## vite에서 public에 접근해서 images가져오는 방법

- [vite에서 image사용](https://medium.com/@andrewmasonmedia/how-to-use-images-with-vite-and-vue-937307a150c0)

## CssBaseLine Error (uncaught typeerror: createtheme_default is not a function)

MUI 사용 중 알 수 없는 createTheme관련 에러가 발생
해결: `import { CssBaseline } from "@mui/material";`에서 `import CssBaseline from "@mui/material/CssBaseline";`로 변경하니 해결

참고 자료

```tsx
// I was getting the Uncaught TypeError: createTheme_default is not a function issue with remix, it had to do with the <CssBaseline />.

// If your project was set up using the Remix MUI Example, then the fix for me was to add the <CssBaseline /> to the Layout.tsx file. Like so:

import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <CssBaseline />
        {children}
      </Box>
    </Container>
  );
}
// although, still getting TypeError: useEnhancedEffect_default is not a function. Which seems to be fixed when I add icons (@mui/icons-material) to the page... not idea why.

// Final Update:
// After reading #31140 (comment), I downgraded mui to 5.4.1 and I no longer get the TypeError: useEnhancedEffect_default is not a function. So seems like there is a bug that still needs to be resolved in mui.
```

- [참고](https://github.com/mui/material-ui/issues/31835)

## Cannot find module 'react-swipeable-views' or its corresponding type declarations.ts(2307)

`yarn add react-swipeable-views`, `yarn add react-swipeable-views-utils` 이후 `import`로 module을 못찾는 것을 발견, 이유는 `@types` 설치를 안했기 때문이다