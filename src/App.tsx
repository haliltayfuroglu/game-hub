import { Grid, GridItem, Show } from "@chakra-ui/react";

import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem
        area="nav"
        bg="gray.100"
        borderRight="1px solid gray.200"
        borderBottom="1px solid gray.200"
        p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <h1>My App Nav</h1>
        <button>Sign In</button>
      </GridItem>

      <Show above="lg">
        <GridItem
          area="aside"
          bg="gray.300"
          borderLeft="1px solid gray.200"
          borderBottom="1px solid gray.200"
        >
          Aside
        </GridItem>
      </Show>

      <GridItem
        area="main"
        border="1px solid gray.200"
        borderBottom="1px solid gray.200"
        p={4}
      >
        <h2>Main Content</h2>
        <p>This is the main content area.</p>
      </GridItem>
    </Grid>
  );
}

export default App;
