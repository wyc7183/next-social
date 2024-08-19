"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => (
    <div className="h-24 flex items-center justify-between text-gray-600">
        {/* LEFT */}
        <div className="md:hidden lg:block w-{20%}">
            <Link href="/" className="font-bold text-xl text-blue-600">
                WYC SOCIAL
            </Link>
        </div>
        {/* CENTER */}
        <div className="hidden md:flex w-{50%} text-sm">
            {/* LINKS */}
            <div className="flex gap-6 text-gray-600">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/home.png"
                        alt="Homepage"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span>HomePage</span>
                </Link>
            </div>
            <div className="flex gap-6 text-gray-600">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/friends.png"
                        alt="Friends"
                        width={16}
                        height={16}
                        className="w=4 h-4"
                    />
                    <span>Friends</span>
                </Link>
            </div>
            <div className="flex gap-6 text-gray-600">
                <Link href="/" className="flex items=center gap-2">
                    <Image
                        src="/stories.png"
                        alt="Stories"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span>Stories</span>
                </Link>
            </div>
        </div>
        {/* RIGHT */}
        <div className="w-{30%} flex items-center gap-4 xl:gap-8 justify-end">
            <ClerkLoading>
                <div
                    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>

            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <div className="cursor-pointer">
                        <Image src="/people.png" alt="" width={20} height={20} />
                    </div>
                    <div className="cursor-pointer">
                        <Image src="/messages.png" alt="" width={20} height={20} />
                    </div>
                    <div className="cursor-pointer">
                        <Image src="/notifications.png" alt="" width={20} height={20} />
                    </div>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <div className="flex items-center gap-2 text-sm">
                        <Image src="/user.png" alt="" width={20} height={20} />
                        <Link href="/sign-in">Login/Register</Link>
                    </div>
                </SignedOut>
            </ClerkLoaded>
            <MobileMenu />
        </div>
    </div>
);
export default Navbar;
