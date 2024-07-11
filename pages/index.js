import CategorySection from "@/components/CategorySection";
import NewsletterPopup from "@/components/NewsletterPopup";
import SlideShow from "@/components/SlideShow";
import Topbar from "@/components/Topbar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductGrid from "@/components/productgrid";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import polos from "@/public/polos.webp";
import tShirts from "@/public/t-shirts-category.webp";
import sweatWear from "@/public/sweatwear-category.webp";
import TankTops from "@/public/TankTops.webp";
import Bags from "@/public/Bags and accessories.webp";
import Hats from "@/public/hats.webp";
import Pants from "@/public/pants and sports.webp";
import Youth from "@/public/youth.webp";

export default function Home({ products }) {
	console.log(polos);
	return (
		<>
			<Topbar />
			<NewsletterPopup />
			<Header />
			<SlideShow />
			<h2 className="text-xl md:text-3xl mt-10 mb-5 text-center font-semibold">Shop Wholesale Blank Clothing & Apparel</h2>
			<div className="flex p-10 pb-0 flex-wrap justify-center">
				<div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
					<div className="bg-white overflow-hidden">
						<Link href="/collection/t-shirts">
							<Image
								src={tShirts.src}
								height={400}
								width={200}
								className="object-cover h-48 md:w-56 md:h-72 hover:scale-105 transition duration-300"
								alt="polos"
							/>
							<h4 className="uppercase text-md pt-2 font-semibold text-red-500 hover:text-red-600">
								T-shirts
							</h4>
						</Link>
					</div>
				</div>
				<div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
					<div className="bg-white overflow-hidden">
						<Link href="collection/sweatshirts">
							<Image
								src={sweatWear.src}
								height={400}
								width={200}
								className="object-cover h-48 md:w-56 md:h-72 hover:scale-105 transition duration-300"
								alt="polos"
							/>
							<h4 className="uppercase text-md pt-2 font-semibold text-red-500 hover:text-red-600">
								Sweatwear
							</h4>
						</Link>
					</div>
				</div>
				<div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
					<div className="bg-white overflow-hidden">
						<Link href="/collection/polos">
							<Image
								src={TankTops.src}
								height={400}
								width={200}
								className="object-cover h-48 md:w-56 md:h-72 hover:scale-105 transition duration-300"
								alt="polos"
							/>
							<h4 className="uppercase text-md pt-2 font-semibold text-red-500 hover:text-red-600">
								TankTops
							</h4>
						</Link>
					</div>
				</div>
				<div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
					<div className="bg-white overflow-hidden">
						<Link href="/collection/polos">
							<Image
								src={Bags.src}
								height={400}
								width={200}
								className="object-cover h-48 md:w-56 md:h-72 hover:scale-105 transition duration-300"
								alt="polos"
							/>
							<h4 className="uppercase text-md pt-2 font-semibold text-red-500 hover:text-red-600">
								Bags and accessories
							</h4>
						</Link>
					</div>
				</div>
				<div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
					<div className="bg-white overflow-hidden">
						<Link href="/collection/hats">
							<Image
								src={Hats.src}
								height={400}
								width={200}
								className="object-cover h-48 md:w-56 md:h-72 hover:scale-105 transition duration-300"
								alt="polos"
							/>
							<h4 className="uppercase text-md pt-2 font-semibold text-red-500 hover:text-red-600">
								Hats
							</h4>
						</Link>
					</div>
				</div>
				<div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
					<div className="bg-white overflow-hidden">
						<Link href="/collection/pants">
							<Image
								src={Pants.src}
								height={400}
								width={200}
								className="object-cover h-48 md:w-56 md:h-72 hover:scale-105 transition duration-300"
								alt="polos"
							/>
							<h4 className="uppercase text-md pt-2 font-semibold text-red-500 hover:text-red-600">
								Pants
							</h4>
						</Link>
					</div>
				</div>
				<div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
					<div className="bg-white overflow-hidden">
						<Link href="/collection/youth">
							<Image
								src={Youth.src}
								height={400}
								width={200}
								className="object-cover h-48 md:w-56 md:h-72 hover:scale-105 transition duration-300"
								alt="youth"
							/>
							<h4 className="uppercase text-md pt-2 font-semibold text-red-500 hover:text-red-600">
								Youth
							</h4>
						</Link>
					</div>
				</div>
				<div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
					<div className="bg-white overflow-hidden">
						<Link href="/collection/polos">
							<Image
								src={polos.src}
								height={400}
								width={200}
								className="object-cover h-48 md:w-56 md:h-72 hover:scale-105 transition duration-300"
								alt="polos"
							/>
							<h4 className="uppercase text-md pt-2 font-semibold text-red-500 hover:text-red-600">
								Polos
							</h4>
						</Link>
					</div>
				</div>


				{/* Repeat this block for each card */}
			</div>
			<div className="min-h-[400px] pt-10">
				<h2 className="mb-8 font-bold text-center text-3xl">Best Products</h2>
				<ProductGrid products={products} itemsPerRow={4} limit={8} />
			</div>
			<CategorySection title="Our Top Categories" limit={8} className="bg-gray-100" />
			<div className="min-h-[400px]">
				<h2 className="mb-8 font-bold text-center text-3xl">Recents Products</h2>
				<ProductGrid products={products} itemsPerRow={4} limit={8} />
			</div>
			<div className="min-h-[400px] pt-10">
				<h2 className="mb-8 font-bold text-center text-3xl">Featured Collections</h2>
				<ProductGrid products={products} itemsPerRow={4} limit={8} />
			</div>
			<Footer />
		</>
	);
}

export async function getServerSideProps() {
	try {
		const baseUrl = process.env.baseUrl;
		const response = await axios.get(`${baseUrl}/api/admin/product/getProducts`);

		if (!response.status === 200) {
			throw new Error("Network response was not ok");
		}

		const products = response.data.products;

		return {
			props: {
				products,
			},
		};
	} catch (error) {
		console.error("Error fetching products:", error);
		return {
			props: {
				products: [],
			},
		};
	}
}
