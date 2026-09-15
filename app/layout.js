import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Moiz | Full-Stack (MERN) Developer | Portfolio",
  description:
    "Portfolio of Moiz — Full-Stack MERN Developer based in Lahore, Pakistan. Specializing in Next.js, React, Node.js, Express, and MongoDB. Gold Medalist & Creator of high-performance web applications.",
  keywords: [
    "Moiz",
    "MERN Stack Developer",
    "Full-Stack Developer Lahore",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Web Developer Pakistan",
  ],
  authors: [{ name: "Moiz" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/my pic.png" />
      </head>
      <body>
        <main>{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
