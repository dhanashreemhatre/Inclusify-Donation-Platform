import React, { useEffect } from 'react';
import './navbar.css';
import Link from 'next/link';
import Image from 'next/image';
interface PageProps {
  className?: string;
}

const Page: React.FC<PageProps> = ({ className }) => {
  useEffect(() => {
    const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

    let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark-mode" && body) {
      body.classList.add("dark");
    }

    // js code to toggle dark and light mode
    modeToggle?.addEventListener("click", () => {
      modeToggle.classList.toggle("active");
      body?.classList.toggle("dark");
      // js code to keep user selected mode even page refresh or file reopen
      if (body && !body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
      } else if (body) {
        localStorage.setItem("mode", "dark-mode");
      }
    });

    // js code to toggle search box
    searchToggle?.addEventListener("click", () => {
      searchToggle.classList.toggle("active");
    });

    // js code to toggle sidebar
    sidebarOpen?.addEventListener("click", () => {
      nav?.classList.add("active");
    });
    body?.addEventListener("click", (e) => {
      let clickedElm = e.target as HTMLElement;
      if (
        !clickedElm.classList.contains("sidebarOpen") &&
        !clickedElm.classList.contains("menu") &&
        nav
      ) {
        nav.classList.remove("active");
      }
    });
  }, []);

  return (
    <>
      <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
       <nav>
        <div className="nav-bar">
          <i className='bx bx-menu sidebarOpen'></i>
          <div className="logo-footer">
            <Image
             src="/logo.svg"
             alt='loading-logo'
             width={70}
             height={70}
            />
            <h1>INCLUSIFY</h1>
          </div>
          <div className="menu">
            <div className="logo-toggle">
              <div className="logo-footer">
              <Image
             src="/logo2.png"
             alt='loading-logo'
             width={70}
             height={70}
            />
                <h1>INCLUSIFY</h1>
              </div>
              <i className='bx bx-x sidebarClose'></i>
            </div>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="#">Portfolio</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
        </div>
        </nav>
    </>
  );
}

export default Page;
