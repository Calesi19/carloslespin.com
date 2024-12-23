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
  Button,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "../config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "../components/theme-switch";
import { SiGithub, SiDiscord } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Logo(): React.JSX.Element {
  return (
    <div id="logo" className="h-[32px] w-[128px] relative font-bold">
      <div
        id="prll"
        className={`h-[32px] w-[62px] logo-skew rounded-lg absolute left-[2px] bg-black dark:bg-white`}
      ></div>
      <span
        id="first-name"
        className={`absolute top-[3px] left-[5px] text-[20.5px] text-white dark:text-black `}
      >
        carlos
      </span>
      <span
        id="last-name absolute"
        className={`absolute top-[3px] left-[65px] text-[20.5px] dark:text-white`}
      >
        lespin
      </span>
    </div>
  );
}

export const Navbar = (): React.JSX.Element => {
  return (
    <NextUINavbar
      shouldHideOnScroll
      position="sticky"
      maxWidth="full"
      className="navfix"
    >
      <NavbarContent className="basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-4 justify-start ml-2">
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

      <NavbarMenu className="pb-20">
        <div className="mx-4 mt-2 flex flex-col gap-4">
          Links
          <NavbarMenuItem className="w-full">
            <Link className="w-full text-white font-bold" href="/">
              <Button fullWidth variant="bordered" size="lg">
                Home
              </Button>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="w-full">
            <Link className="w-full text-white font-bold" href="/projects">
              <Button fullWidth variant="bordered" size="lg">
                Projects
              </Button>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="w-full">
            <Link className="w-full text-white font-bold" href="/resume">
              <Button fullWidth variant="bordered" size="lg">
                Resume
              </Button>
            </Link>
          </NavbarMenuItem>
        </div>
        <div className="mx-4 mt-6 pb-20">
          Socials
          <div className="mt-2 grid grid-cols-2 gap-4">
            <NavbarMenuItem className="w-full">
              <Link
                className="w-full text-white"
                href={siteConfig.links.linkedin}
              >
                <div className="p-8 w-full flex justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                  <FaLinkedinIn className="text-2xl" />
                </div>
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="w-full">
              <Link
                className="w-full text-white"
                href={siteConfig.links.github}
              >
                <div className="p-8 w-full flex justify-center rounded-xl bg-gradient-to-r from-purple-500 to-purple-900">
                  <SiGithub className="text-2xl" />
                </div>
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="w-full">
              <Link
                className="w-full text-white"
                href={siteConfig.links.discord}
              >
                <div className="p-8 w-full flex justify-center rounded-xl bg-gradient-to-r from-slate-500 to-slate-800">
                  <SiDiscord className="text-2xl" />
                </div>
              </Link>
            </NavbarMenuItem>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
