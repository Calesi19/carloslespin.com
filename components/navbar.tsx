/* eslint-disable @typescript-eslint/no-base-to-string */
"use client";

import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { useTheme } from "next-themes";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "../config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "../components/theme-switch";
import { SiGithub, SiDiscord } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Logo(): React.JSX.Element {
  const { theme } = useTheme();
  return (
    <div id="logo" className="h-[32px] w-[128px] relative font-bold">
      <div
        id="prll"
        className={`h-[32px] w-[62px] logo-skew rounded-lg absolute left-[2px] ${
          theme === "light" ? "bg-black" : "bg-white"
        }`}
      ></div>
      <span
        id="first-name"
        className={`absolute top-[3px] left-[5px] text-[20.5px] ${
          theme === "light" ? "text-white" : "text-black"
        }`}
      >
        carlos
      </span>
      <span
        id="last-name absolute"
        className={`absolute top-[3px] left-[65px] text-[20.5px] ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        lespin
      </span>
    </div>
  );
}

export const Navbar = (): React.JSX.Element => {
  return (
    <NextUINavbar shouldHideOnScroll maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-default-500 text-xl" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <SiDiscord className="text-default-500 text-xl" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <SiGithub className="text-default-500 text-xl" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <SiGithub className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
