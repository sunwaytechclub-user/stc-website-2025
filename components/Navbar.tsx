"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { CaretDownIcon } from "@radix-ui/react-icons"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const menuItems = [
  {
    title: "Who Are We",
    href: "#aboutus",
  },
  {
    title: "What We Do",
    href: "#event",
  },
  {
    title: "What We Had Done",
    href: "#pastevent",
  },
  {
    title: "Join Us",
    href: "#join",
  },
  {
    title: "Collab",
    href: "#collab",
  },
]

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const targetId = href.replace('#', '')
  const element = document.getElementById(targetId)
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 bg-black/80 backdrop-blur-sm text-white">
      <Image 
        src="/images/banner.png" 
        alt="Banner" 
        width={100} 
        height={100} 
        className="w-[30%] sm:w-[20%] md:w-[15%] lg:w-[10%]" 
      />

      {/* Desktop Navigation Menu */}
      <NavigationMenu.Root dir="ltr" className="hidden md:flex">
        <NavigationMenu.List className="flex md:space-x-4 lg:space-x-8">
          {menuItems.map((item) => (
            <NavigationMenu.Item key={item.href}>
              <Link 
                href={item.href} 
                className="px-2 lg:px-3 py-2 text-white hover:text-gray-300 transition-colors text-sm lg:text-base whitespace-nowrap"
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.title}
              </Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <button>
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-[#282824] border-neutral-800 p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Close</span>
          </button>
          <nav className="flex flex-col gap-4 mt-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg text-white hover:text-gray-300 transition-colors"
                onClick={(e) => {
                  handleScroll(e, item.href)
                  setIsOpen(false)
                }}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
