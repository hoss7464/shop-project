import React from "react";
import {
  CardWrapper2,
  CardStarWrapper,
  CardEmptyStar,
  CardFillStar,
  CardParaWrapper,
  CardPara,
  CardProductWrapper,
  CardProduct,
  CardPersonWrapper,
  CardPersonIconWrapper,
  CardPersonIcon,
  CardPersonNameWrapper,
  CardPersonName,
} from "../Section8Elements";
import Rating from "react-rating";
import { ChakraProvider, extendTheme, SimpleGrid } from "@chakra-ui/react";
import { breakpoints } from "../../../../Core-UI/Theme";
import { Data2 } from "../../../../Helpers/Cards";

const Cards = () => {
  const theme = extendTheme({ breakpoints });
  return (
    <ChakraProvider theme={theme}>
      <SimpleGrid
        spacing="20px"
        minChildWidth={{
          base: "280px",
          sma1: "280px",
          sma2: "400px",
          sma3: "400px",
          tab: "400px",
          lap: "400px",
        }}
      >
        {Data2.map((data) => {
          return (
            <CardWrapper2 key={data.myId}>
              <CardStarWrapper>
                <Rating
                  initialRating={5}
                  emptySymbol={<CardEmptyStar />}
                  fullSymbol={<CardFillStar />}
                  readonly
                />
              </CardStarWrapper>
              <CardParaWrapper>
                <CardPara>{data.myPara}</CardPara>
              </CardParaWrapper>
              <CardProductWrapper>
                <CardProduct>{data.product} : محصول</CardProduct>
              </CardProductWrapper>
              <CardPersonWrapper>
                <CardPersonNameWrapper>
                  <CardPersonName>{data.personName}</CardPersonName>
                </CardPersonNameWrapper>
                <CardPersonIconWrapper>
                  <CardPersonIcon alt={data.myAlt} src={data.mySrc} />
                </CardPersonIconWrapper>
              </CardPersonWrapper>
            </CardWrapper2>
          );
        })}
      </SimpleGrid>
    </ChakraProvider>
  );
};

export default Cards;
