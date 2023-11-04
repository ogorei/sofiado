import { ProductCard } from "./ProductCard";

export const Results = ({ products }) => {
	return (
		<div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10">
			{products &&
				products.map(product => {
					console.log("product",product);
					return (
						<ProductCard
							key={product.databaseId}
              title={product.title}
							uri={product.uri}
              image={product.featuredImage?.node?.sourceUrl}
							price={product.product_features.price}
							isAvailable={product.product_features.isAvailable}
							isRecommend={product.product_features.isRecommend}
							isRed={product.product_features.isred}
							isWhite={product.product_features.iswhite}
						/>
					);
				})}
		</div>
	);
};
