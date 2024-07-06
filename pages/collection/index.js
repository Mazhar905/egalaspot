"use client";
import Footer from '@/components/footer'
import Header from '@/components/header'
import TopProducts from '@/components/productgrid'
import Filter from '@/components/Filters';
import React from 'react'
import Image from 'next/image';
import collectionBanner from "@/public/bg-img/collection-banner.jpeg"
import Loading from '../admin/components/loading';
import axios from 'axios';

export default function page({ products }) {

    const sizes = [
        { id: 'M', name: 'M' },
        { id: 'L', name: 'L' },
        { id: 'S', name: 'S' },
        { id: 'XL', name: 'XL' },
        // Add more categories as needed
    ];

    const colors = [
        { id: 'tech', name: 'Technology' },
        { id: 'fashion', name: 'Fashion' },
        { id: 'food', name: 'Food' },
        { id: 'sports', name: 'Sports' },
        // Add more categories as needed
    ];


    return (
        <>
            <Loading />
            <Header />
            <div className="px-3">
                <div className="section_image my-4 rounded-lg overflow-hidden relative" style={{ maxHeight: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image src={collectionBanner} layout='responsive' objectFit='contain' alt="banner" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70 content-none flex items-center justify-center'>
                    </div>
                    <h1 className='text-white text-3xl capitalize absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Collection</h1>
                </div>

                <div className="flex flex-wrap flex-col items-start lg:flex-row">
                    <div className='space-y-2 w-full rounded-lg lg:w-1/4 py-4'>
                        <Filter valueKey='size' name='Sizes' data={sizes} />
                        <Filter valueKey='color' name='Colors' data={colors} />
                    </div>

                    <div className="main w-full mx-auto lg:w-3/4">
                        <TopProducts products={products} limit={28} sectionName="All Collections" />

                        {products.length != 0 && 
                            < ul className="my-10 flex space-x-4 justify-end">
                                <li className="flex items-center justify-center shrink-0 bg-gray-300 w-10 h-10 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400" viewBox="0 0 55.753 55.753">
                                        <path
                                            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                            data-original="#000000" />
                                    </svg>
                                </li>
                                <li
                                    className="flex items-center justify-center shrink-0 bg-orange-500 border-2 border-orange-500cursor-pointer text-base font-bold text-white w-10 h-10 rounded-full">
                                    1
                                </li>
                                <li
                                    className="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-full">
                                    2
                                </li>
                                <li
                                    className="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-full">
                                    3
                                </li>
                                <li
                                    className="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-full">
                                    4
                                </li>
                                <li className="flex items-center justify-center shrink-0 hover:bg-gray-50 border-2 cursor-pointer w-10 h-10 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
                                        <path
                                            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                            data-original="#000000" />
                                    </svg>
                                </li>
                            </ul>
                        }

                    </div>



                </div>
            </div >




            <Footer />
        </>
    )
}





// export async function getServerSideProps() {
//     try {
//         const response = await fetch('http://localhost:3000/api/admin/product/getProducts');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         const products = data.products;
//         return {
//             props: {
//                 products
//             }
//         };
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         return {
//             props: {
//                 products: []
//             }
//         };
//     }
// }




export async function getServerSideProps() {
    try {
      const baseUrl = process.env.baseUrl;
      const response = await axios.get(`${baseUrl}/api/admin/product/getProducts`);
  
      if (!response.status === 200) {
        throw new Error('Network response was not ok');
      }
  
      const products = response.data.products;
  
      return {
        props: {
          products
        }
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      return {
        props: {
          products: []
        }
      };
    }
  }