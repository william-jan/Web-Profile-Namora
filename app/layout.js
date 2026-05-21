import "./globals.css";

export const metadata = {
  title: "Fernando Namora | Data Analyst",
  description:
    "Website profil Fernando Namora, Data Analyst focused on Machine Learning and Data Pipelines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
