import React from 'react'
import { Grid, Text, Center } from '@mantine/core';

//SSGの場合

const Top = () => {
  return (
    <div className="bg-background-ec bg-contain sm:bg-cover lg:bg-cover w-full">
      <Center className="mb-[32px]">
        <img className="w-3/4 lg:w-1/2" src="" alt="top-image" />
      </Center>
      <Center className="my-[32px]">
        <img className="w-3/4 lg:w-1/2" src="https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png" alt="top-mentenance" />
      </Center>
    {/* {products.map(product => () => {
      <div>
        {product.id}
      </div>
    })} */}

      {/* <News /> */}
      <br />
      <div>
      </div>
    </div>
  );
}

export default Top