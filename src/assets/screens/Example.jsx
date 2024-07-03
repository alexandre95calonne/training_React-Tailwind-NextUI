import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function Example() {
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="text-white">
            Open Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new" className="text-black">
            New file
          </DropdownItem>
          <DropdownItem key="copy" className="text-black">
            Copy link
          </DropdownItem>
          <DropdownItem key="edit" className="text-black">
            Edit file
          </DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
