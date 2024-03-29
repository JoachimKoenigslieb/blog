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
			<nav className="flex flex-row items-baseline md:flex-col gap-4 bg-slate-300 md:basis-2/12 md:py-12 px-4 md:h-screen md:sticky md:top-0 overflow-auto">
				<h1>Blog</h1>
				<ActiveLink href={'/'}>Home</ActiveLink>
				<div className="h-0 border-[1px] w-full"/>
				{posts.reverse().map(post => (
					<ActiveLink href={post.path} key={post.path}>
						{post.title}
					</ActiveLink>						
				))}
				<span className="md:mt-auto ml-auto md:ml-0 md:flex flex-col gap-2 hidden">
					<a href="https://github.com/JoachimKoenigslieb">Github link</a>
					<span className="text-sm">
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
