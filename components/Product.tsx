import React from "react";
import Image from "next/legacy/image";
import { urlFor } from "../sanity";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast';
import { addToBasket } from '../redux/basketSlice'

interface Props {
	product: Product;
}

export default function Product({ product }: Props) {
 const dispatch = useDispatch()

  const addItemToBasket = () => {
     dispatch(addToBasket(product));
 
     toast.success(`${product.title } added to Basket`, {
         position: "bottom-center",
     });
  }

	return (
		<div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
			<div className="relative h-64 w-full md:h-72">
				<Image
					src={urlFor(product.image[0]).url()}
					layout="fill"
					objectFit="contain"
					alt="product image"
				/>
			</div>

			<div className="flex flex-1 items-center justify-between space-x-3">
				<div  className="space-y-2 text-xl text-white md:text-2xl">
					<p>{product.title}</p>
					<p>{product.price}</p>
				</div>

				<div
          className="cartIcon"
          
        >
          <ShoppingCartIcon className="h-8 w-8 text-white" onClick={addItemToBasket} />
        </div>
			</div>
		</div>
	);
}
