import * as Popover from "@radix-ui/react-popover";

export default function HomePopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <button>CLICK ME!!!!</button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content>
          <div>
            <p>Welcome to my website!</p>
          </div>
          <Popover.Close>
            <button>CLOSE!!!!</button>
          </Popover.Close>
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
