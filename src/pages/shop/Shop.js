import React, { useState } from "react";

import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const ShopPage = props => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections
        .filter((item, index) => index < 4)
        .map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
};

export default ShopPage;
