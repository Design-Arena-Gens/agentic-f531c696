export const metadata = {
  title: 'قوالب متاجر شوبيفاي - Shopify Themes',
  description: 'مجموعة من أفضل قوالب متاجر شوبيفاي الاحترافية',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
