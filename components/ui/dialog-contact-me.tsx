import { CopyIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FluidRippleButton } from "./fluid-ripple-button"

export function dialogContactMe() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <FluidRippleButton
            variant="default"
            style={{
              width: '100%',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1.25em 1em',
              fontFamily: 'helvetica',
              fontSize: '30px',
              lineHeight: '1.2',

            }}
          >
            CONTACT ME
            {/* Right arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              style={{ width: '1.5em', height: '1.5em' }} // Adjust as needed
            >
              <path d="M1 12h18M12 5l7 7-7 7" />
            </svg>
          </FluidRippleButton>

      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
