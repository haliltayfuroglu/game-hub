import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By
      </MenuButton>

      <MenuList>
        <MenuItem>Name</MenuItem>
        <MenuItem>Platform</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
