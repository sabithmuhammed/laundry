"use client"
import { Link } from "@nextui-org/link";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/navbar";
import { usePathname } from "next/navigation";

import { PiWashingMachineDuotone } from "react-icons/pi";

const NavBar = () => {
    const path = usePathname()
    const menuItems = [
        { title: "Home", link: "/" },
        {
            title: "Pricing",
            link: "/pricing",
        },
        {
            title: "About Us",
            link: "/about",
        },
    ];
    return (
        <Navbar isBordered maxWidth="full" classNames={{ wrapper: "px-0" }}>
            <div className="w-full h-full">
                <div className="container  max-w-7xl mx-auto px-4  h-full flex">
                    <NavbarContent className="sm:hidden pr-3" justify="start">
                        <NavbarBrand>
                            <PiWashingMachineDuotone size={40} />
                            <span className="font-semibold text-lg">
                                CleanPro
                            </span>
                        </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent
                        className="hidden sm:flex gap-4"
                        justify="end"
                    >
                        <NavbarBrand>
                            <PiWashingMachineDuotone size={40} />
                            <span className="font-semibold text-lg">
                                CleanPro
                            </span>
                        </NavbarBrand>
                        {menuItems.map((item, index) => (
                            <NavbarItem key={`${item.title}-${index}`} isActive={path === item.link}>
                                <Link color="foreground" href={item.link}>
                                    {item.title}
                                </Link>
                            </NavbarItem>
                        ))}
                    </NavbarContent>

                    <NavbarContent className="sm:hidden" justify="end">
                        <NavbarMenuToggle />
                    </NavbarContent>

                    <NavbarMenu>
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item.title}-${index}`}>
                                <Link
                                    className="w-full"
                                    color={
                                        index === 2
                                            ? "warning"
                                            : index === menuItems.length - 1
                                              ? "danger"
                                              : "foreground"
                                    }
                                    href={item.link}
                                    size="lg"
                                >
                                    {item.title}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </div>
            </div>
        </Navbar>
    );
};

export default NavBar;
