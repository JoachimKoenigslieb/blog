import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { readdirSync, statSync } from "fs";
import { RouteType } from "next/dist/lib/load-custom-routes";
import { ActiveLink } from "./ActiveLink";
import { getAllPostsSlug } from "./getAllPostsSlug";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Joachims blog",
	description: "Its a blog!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const posts = getAllPostsSlug()

  return (
    <html lang="en">
		<body className={`${inter.className} bg-slate-100 flex flex-col md:flex-row`}>
			<nav className="flex flex-row items-baseline jusit md:flex-col gap-4 bg-slate-300 md:basis-2/12 basis-0 md:py-12 px-4 h-screen md:sticky top-0">
				<h1>Blog</h1>
				<ActiveLink href={'/'}>Home</ActiveLink>
				{posts.map(post => (
					<ActiveLink href={post.path} key={post.path}>
						{post.title}
					</ActiveLink>
				))}
				<span className="md:mt-auto ml-auto md:ml-0 flex flex-col gap-2">
					<a href="https://github.com/JoachimKoenigslieb">Github link</a>
					<span>
						joachim.koenigslieb@gmail.com	
					</span>
				</span>
			</nav>
			<section className="mx-auto p-4 py-8 flex gap-4 flex-col max-w-screen-lg w-full">
				{children}
			</section>
		</body>
    </html>
  );
}
