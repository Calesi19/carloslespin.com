import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import CardCarousel from "./projects";


export default function Home() {
	return (
		<div>
		<Hero />
			<CardCarousel />
		</div>
	);
}


function Hero() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>I'm a&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Software Engineer&nbsp;</h1>
				<br />
				<h1 className={title()}>
				 	Student currently searching for internships.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Beautiful, fast and modern React UI library.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href="https://github.com/Calesi19"
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			
		</section>
	);
}