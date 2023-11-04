import client from "@/client";
import { gql } from "@apollo/client";

const handler = async (req, res) => {
  try{
    const {data} = await client.query({
      query: gql
      `
      query SearchQuery {
        properties(where: {offsetPagination: {size: 3, offset: 0}}) {
          pageInfo {
            offsetPagination {
              total
            }
          }
          nodes {
            title
            uri
            featuredImage {
              node {
                uri
                sourceUrl
              }
            }
            product_features {
              isAvailable
              isRecommend
              price
              isred
              iswhite
            }
          }
        }
      }
      `,
    });
    return res.status(200).json({products: data.properties.nodes})
  }catch (error){
    console.log(error)
  }
}

export default handler;