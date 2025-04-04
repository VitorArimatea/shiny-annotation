import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Sidebar() {
  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* My Documents */}
      {/* List... */}

      {/* Shared with me */}
    </>
  );

  return (
    <div className="p-2 md:p-5 bg-gray-200">
      <nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon
                className="p-1 hover:opacity-30 rounded-lg cursor-pointer"
                size={35}
              />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <div>{menuOptions}</div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:inline">
          <NewDocumentButton />
        </div>
      </nav>
    </div>
  );
}
export default Sidebar;
