"use client";

import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar w-48"> {/* Reduced width to 48 (12rem) */}
      <div className="flex size-full flex-col gap-4 justify-start">
        {/* Logo */}
        <Link href="/" className="sidebar-logo mt-4">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
        </Link>

        {/* Navigation options moved up with pt-2 (padding-top) */}
        <nav className="sidebar-nav flex flex-col justify-start pt-2"> {/* Added pt-2 */}
          <SignedIn>
            <>
              {/* First set of navigation links */}
              <ul className="sidebar-nav_elements">
                {navLinks.slice(0, 6).map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`sidebar-nav_element group ${
                        isActive ? 'bg-purple-gradient text-white' : 'text-gray-900' // Darkened text color
                      }`}
                    >
                      <Link className="sidebar-link" href={link.route}>
                        <Image 
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={`${isActive && 'brightness-200'}`}
                        />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Second set of navigation links */}
              <ul className="sidebar-nav_elements">
                {navLinks.slice(6).map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`sidebar-nav_element group ${
                        isActive ? 'bg-purple-gradient text-white' : 'text-gray-900' // Darkened text color
                      }`}
                    >
                      <Link className="sidebar-link" href={link.route}>
                        <Image 
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={`${isActive && 'brightness-200'}`}
                        />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          </SignedIn>

          {/* Sign-out state */}
          <SignedOut>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-lg font-bold text-gray-800"> {/* Increased size and bold text */}
              An application that transforms imagination into reality.
              </p>
            </div>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;