import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Header from "./components/Header";
import Carousel from './components/Carousel';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }

export default function App() {
  return (
    // <Container fixed>
    <Container maxWidth="xl">
      <Box sx={{ 
        my: 4,
        marginTop: 0, 
        marginBottom: 0,
        // paddingLeft: 0,
        // paddingRight: 0,
      }}>
        <Header />
        <Carousel />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in voluptatem aut? Similique aperiam commodi minima rerum repellendus odit, ipsam vitae incidunt modi quaerat eos officia id asperiores iure amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in voluptatem aut? Similique aperiam commodi minima rerum repellendus odit, ipsam vitae incidunt modi quaerat eos officia id asperiores iure amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in voluptatem aut? Similique aperiam commodi minima rerum repellendus odit, ipsam vitae incidunt modi quaerat eos officia id asperiores iure amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in voluptatem aut? Similique aperiam commodi minima rerum repellendus odit, ipsam vitae incidunt modi quaerat eos officia id asperiores iure amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in voluptatem aut? Similique aperiam commodi minima rerum repellendus odit, ipsam vitae incidunt modi quaerat eos officia id asperiores iure amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in voluptatem aut? Similique aperiam commodi minima rerum repellendus odit, ipsam vitae incidunt modi quaerat eos officia id asperiores iure amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in voluptatem aut? Similique aperiam commodi minima rerum repellendus odit, ipsam vitae incidunt modi quaerat eos officia id asperiores iure amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in voluptatem aut? Similique aperiam commodi minima rerum repellendus odit, ipsam vitae incidunt modi quaerat eos officia id asperiores iure amet.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in voluptatem aut? Similique aperiam commodi minima rerum repellendus odit, ipsam vitae incidunt modi quaerat eos officia id asperiores iure amet.</p>

      </Box>
    </Container>
  );
}
