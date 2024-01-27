export default function BlogLayout({
	children, 
}: {
	children: React.ReactNode,
}) {
	return (
		<>
			<h1 className="text-4xl">
				Joachims blog
			</h1>
			<section className="flex flex-col gap-4">
				{children}
			</section>
		</>
	)
}