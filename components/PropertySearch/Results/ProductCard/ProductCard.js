import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faWineGlass,
  faCartShopping,
  faWineGlassEmpty
} from "@fortawesome/free-solid-svg-icons";

export const ProductCard = ({ title, uri,image, isAvailable, price, isRecommend, isRed, isWhite}) => {
  return(
    <Link className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200" href={uri}>
        <div className="flex w-full">
          <Image
            src={image}
            height="200"
            width="300"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="mt-3 text-lg font-bold">{title}</div>
        <div className="text-lg">{price}</div>
        <div className="flex justify-between text-sm mt-3">
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <span className="pl-2">{isRecommend} recommended</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="pl-2">{isAvailable} available</span>
          </div>
        </div>
        {(!!isWhite || !!isRed) && (
          <div className="flex justify-between text-sm mt-3">
            <div>
              {!!isRed && (
                <>
                  <FontAwesomeIcon icon={faWineGlass} /> red
                </>
              )}
            </div>
            <div>
              {!!isWhite && (
                <>
                  <FontAwesomeIcon icon={faWineGlassEmpty} /> white
                </>
              )}
            </div>
          </div>
        )}
    </Link>
  )
}