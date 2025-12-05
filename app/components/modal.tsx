"use client";

import Image from "next/image";
import classes from "./modal.module.css";
import { back_arrow } from "@/public";

interface Vendor {
  name: string;
  logo: string;
  url: string;
  label?: string;
}

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  count: string;
  productImage: HTMLImageElement | string;
  vendors: Vendor[];
}

const ShopModal = ({
  isOpen,
  onClose,
  productName,
  count,
  productImage,
  vendors,
}: ShopModalProps) => {
  if (!isOpen) return null;
  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <button className={classes.back_button} onClick={onClose}>
            <span className={classes.arrow_icon} aria-hidden="true">
                {back_arrow}
              </span>
          </button>
          <h2 className={classes.title}>Where to Buy</h2>
          <button className={classes.close_button} onClick={onClose}>
            Close
          </button>
        </div>
        <div className={classes.product_section}>
          <div className={classes.product_info}>
            <h3>{productName}</h3>
            <p>{count} Soft Chews</p>
          </div>
          <div className={classes.product_image_container}>
            <Image src={productImage} alt="Product image" fill priority/>
          </div>
        </div>
        <div className={classes.vendor_list}>
          {vendors.map((vendor) => (
            <div key={vendor.name} className={classes.vendor_item}>
              <div className={classes.logo_container}>
                <Image
                  src={vendor.logo}
                  alt={`${vendor.name} logo`}
                  fill
                  objectFit="contain"
                  className={classes.vendor_logo}
                  priority
                />
              </div>
              {/* <p>{vendor.label || count + " Soft Chews"}</p> */}
              <a
                href={vendor.url}
                target="_blank"
                className={classes.vendor_button}
              >
                SHOP HERE
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShopModal;
