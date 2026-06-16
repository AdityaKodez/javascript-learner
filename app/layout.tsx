import { Geist_Mono, DM_Sans, Raleway } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";

// DM Sans is a humanist sans built for readable body text.
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

// Raleway is reserved for headings, where its display character works well.
const raleway = Raleway({ subsets: ["latin"], variable: "--font-heading" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        dmSans.variable,
        raleway.variable,
        fontMono.variable,
        "font-sans",
      )}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          
        >
          <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
