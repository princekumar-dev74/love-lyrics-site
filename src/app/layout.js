import { Shantell_Sans } from "next/font/google";
import "./globals.css";

const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "For You!",
  description: "Just something simple, made with a lot of feeling."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${shantellSans.className} bg-black antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
