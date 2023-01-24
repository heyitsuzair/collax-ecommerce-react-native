import React from 'react';
import {Text} from '../../../components/commons';

const Details = ({product_description, product_title, price}) => {
  return (
    <>
      <Text
        text={product_title}
        isDmSans="Bold"
        classes="text-black text-3xl"
      />
      <Text
        text={product_description}
        isDmSans="Regular"
        classes="text-gray-500"
      />
      <Text text={`$${price}`} isDmSans="Bold" classes="text-black text-3xl" />
    </>
  );
};

export default Details;
