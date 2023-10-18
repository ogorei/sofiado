import React from 'react'
import { Grid, Text, Center } from '@mantine/core';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return {
    props:{ products: data }
  }
}

const Top = ({products}) => {
  console.log(1,products)
  return (
    <div className="bg-background-ec bg-contain sm:bg-cover lg:bg-cover w-full">
      <Center className="mb-[32px]">
        <img className="w-3/4 lg:w-1/2" src="" alt="top-image" />
      </Center>
      <Center className="my-[32px]">
        <img className="w-3/4 lg:w-1/2" src="https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png" alt="top-mentenance" />
      </Center>
      <Center>
        <Text color={'white'} className="mb-1 text-sm lg:text-3xl font-sans flex justify-center">
          エラーが表示される方は
          <br />
        </Text>
      </Center>
      <Center>
        <Text color={'white'} className="mb-1 text-sm lg:text-3xl font-sans flex justify-center">
          【キャッシュをクリア】して再度お試し下さい
          <br />
          <br />
        </Text>
      </Center>
    {/* {products.map(product => () => {
      <div>
        {product.id}
      </div>
    })} */}

      {/* <News /> */}
      {/* <Center>
        <Link
          href={{
            pathname: '/holiday',
          }}
        >
          <Text color={'white'} className="mb-2 cursor-pointer text-xl lg:text-5xl font-sans">
            <u>年末年始休業のお知らせ</u>
          </Text>
        </Link>
      </Center> */}
      <br />
      <div>
        <Center>
          <img
            className="w-1/2 mb-5"
            src="https://cdn.shopify.com/s/files/1/0646/3491/3005/files/op25_category.png?v=1658481619"
            alt="top-image"
          />
        </Center>
        {/* ALLFACESだけ場所・sm変更 */}
        {/* <Grid className="my-0 mx-auto w-3/4">
          {allFacesCollection.node.image && (
            <Grid.Col key={allFacesCollection.node.id} sm={12} className="p-5">
              <Link
                href={{
                  pathname: '/collection/[id]',
                  query: {
                    id: allFacesCollection.splitedId.slice(-1)[0], //配列の最後の要素を取得
                  },
                }}
              >
                <a className="cursor-pointer">
                  <img src={allFacesCollection.node.image.url} alt="logo" className="w-full p-0" />
                </a>
              </Link>
            </Grid.Col>
          )}
          {filteredCollection.map(collection => {
            if (collection.node.image) {
              const splitedId = collection.node.id.split('/');
              if (collection.node.title !== 'ALL FACES') {
                return (
                  <Grid.Col key={collection.node.id} sm={6} className="p-5">
                    <Link
                      href={{
                        pathname: '/collection/[id]',
                        query: {
                          id: splitedId.slice(-1)[0], //配列の最後の要素を取得
                        },
                      }}
                    >
                      <a className="cursor-pointer">
                        <img src={collection.node.image.url} alt="logo" className="w-full p-0" />
                      </a>
                    </Link>
                  </Grid.Col>
                );
              }
            }
          })}
        </Grid> */}
      </div>
    </div>
  );
}

export default Top