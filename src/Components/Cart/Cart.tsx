import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatPrice } from "@/src/lib/utils";
import { buttonVariants } from "@/src/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const ItemCount = 0;
  const fee = 0;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2 ">
        <ShoppingCart
          aria-hidden="true"
          className="size-6 flex-shrink-0 text-gray-500 group-hover:text-gray-500"
        ></ShoppingCart>
        <span className="ml-2 text-sm font-medium text-gray-500 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {ItemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">Cart Items</div>
            <div className="space-y-4 pr-6">
              <Separator></Separator>
              <div className="space-y-1.5 pr-6">
                <div className="flex">
                  Shipping<span className="flex-1"></span>Free
                </div>
                <div className="flex">
                  Transaction fee
                  <span className="flex-1"></span>
                  {formatPrice(fee)}
                </div>
                <div className="flex">
                  Total
                  <span className="flex-1"></span>
                  {formatPrice(fee)}
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Continue to checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div
                aria-hidden="true"
                className="relative mb-4 h-60 w-60 text-muted-foreground"
              >
                <Image
                  src="/hippo-empty-cart.png"
                  fill
                  alt="empty shopping cart hippo"
                />
              </div>
              <div className="text-xl font-semibold">Your cart is empty</div>
              <SheetTrigger>
                <Link
                  href="/products"
                  className={buttonVariants({
                    variant: "link",
                    className: "text-sm text-muted-foreground",
                  })}
                >
                  Add items to your cart to the checkout
                </Link>
              </SheetTrigger>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
