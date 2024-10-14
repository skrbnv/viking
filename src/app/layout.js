import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Black.woff',
      weight: '900'
    },
    {
      path: './fonts/Satoshi-BlackItalic.woff',
      weight: '900',
      style: 'italic'
    },
    {
      path: './fonts/Satoshi-Bold.woff',
      weight: '700'
    },
    {
      path: './fonts/Satoshi-BoldItalic.woff',
      weight: '700',
      style: 'italic'
    },
    {
      path: './fonts/Satoshi-Medium.woff',
      weight: '500'
    },
    {
      path: './fonts/Satoshi-MediumItalic.woff',
      weight: '500',
      style: 'italic'
    },
    {
      path: './fonts/Satoshi-Regular.woff',
      weight: '400'
    },
    {
      path: './fonts/Satoshi-Italic.woff',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/Satoshi-Light.woff',
      weight: '300'
    },
    {
      path: './fonts/Satoshi-LightItalic.woff',
      weight: '300',
      style: 'italic'
    },
    {
      path: './fonts/Satoshi-Variable.woff',
      weight: '300 900'
    },
    {
      path: './fonts/Satoshi-VariableItalic.woff',
      weight: '300 900',
      style: 'italic'
    },
  ],
  variable: '--font-satoshi'
})

export const metadata = {
  title: "Viking Data Centers",
  description: "Viking Data Centers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
