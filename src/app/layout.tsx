import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eulalio V. Ibay Jr. - Digital Financial Analyst',
  description: 'Customer-centric Digital Financial Analyst with 6+ years of experience in financial data analysis, business intelligence, and customer service across global markets.',
  keywords: 'Digital Financial Analyst, Business Intelligence, Customer Service, Data Analysis, Power BI, Excel, CRM, Philippines',
  authors: [{ name: 'Eulalio V. Ibay Jr.' }],
  openGraph: {
    title: 'Eulalio V. Ibay Jr. - Digital Financial Analyst',
    description: 'Customer-centric Digital Financial Analyst with 6+ years of experience in financial data analysis, business intelligence, and customer service.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}