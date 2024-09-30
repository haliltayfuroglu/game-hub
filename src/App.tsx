import { Grid, GridItem, Show } from "@chakra-ui/react";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>

      <GridItem area="main" p={4}>
        <h2>Main Content</h2>
        <p>This is the main content area.</p>
      </GridItem>
    </Grid>
  );
}

export default App;
