// CREATE A SEARCHABLE AND FILTERABLE LIST

import React, { useMemo, useState } from "react";
import { products } from "../../string";

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [cateogary, setCateogary] = useState("All");

    const cateogaries = ["All", "Electronics", "Accessories", "Home"]

    const filteredProduct = useMemo(() => {
        const filterProductArr = products.filter(product => {
            let matchProducts = product.productName.toLowerCase().includes(searchTerm.toLowerCase());
            let machedCateogary = cateogary == "All" || product.category == cateogary
            return machedCateogary && matchProducts
        })
        return filterProductArr
    }, [searchTerm, cateogary])

    return <div>
        <div className="mb-2">
            <p className="underline">Search Product</p>
            <input
                type="text"
                placeholder="search product"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-row gap-2 m-2">
                {cateogaries.map(cat => (
                    <button key={cat}
                        className={`p-2 border border-amber-200 min-w-20 cursor-pointer ${cat == cateogary ? "bg-yellow-500" : "bg-white"}`}
                        onClick={() => setCateogary(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        <div className="flex flex-col gap-1">
            {filteredProduct.map(product => (
                <div className="flex flex-row justify-between border border-black p-2" key={product.id}>
                    <div className="flex-flex-col gap-1">
                        <p>{product.productName}</p>
                        <span className="text-sm text-green-600">{product.category}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span>RS. {product.price}</span>
                        <span className="text-md text-yellow-500">Rating : {product.rating}</span>
                    </div>

                </div>
            ))}
        </div>
    </div>;
};

export default SearchFilter;
