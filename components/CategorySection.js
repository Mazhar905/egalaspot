import React from "react";
// /bg-img/ourshop.png
import OverlayContainer from "./OverlayContainer";
import LinkButton from "./LinkButton";

function CatTemplate({ catName, catImage, catLink }) {
	return (
		<div className="w-full">
			<OverlayContainer imgSrc={catImage.src} imgAlt={catImage.alt}>
				<LinkButton href={catLink} extraClass="absolute p-3 hover:bg-black hover:text-white bottom-10-per z-20">
					{catName}
				</LinkButton>
			</OverlayContainer>
		</div>
	);
}

function CategorySection({ title, limit }) {
	const catData = [
		{ name: "Mens", link: "", image: { src: "/bg-img/banner_minipage2.jpg", alt: "" } },
		{ name: "Womens", link: "", image: { src: "/bg-img/banner_minipage2.jpg", alt: "" } },
		{ name: "Children", link: "", image: { src: "/bg-img/banner_minipage2.jpg", alt: "" } },
		{ name: "Best Products", link: "", image: { src: "/bg-img/banner_minipage2.jpg", alt: "" } },
	];
	// Apply the limit to catData
	const limitedCatData = catData.slice(0, limit);
	return (
		<>
			{/* ===== Category Section ===== */}
			<section className="category_section container-sm mx-auto w-full h-auto p-10">
				<h2 className="text-center py-8 text-3xl underline">{title}</h2>
				<div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{limitedCatData.map((cat, index) => (
						<CatTemplate key={index} catName={cat.name} catImage={cat.image} catLink={cat.link} />
					))}
				</div>
			</section>
		</>
	);
}

export default CategorySection;
