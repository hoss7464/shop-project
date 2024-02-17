import React from "react";
import {
  Section1GridWrapper,
  Section1BoxWrapper,
  CardItemWrapper,
  CardIconWrapper,
  CardIcon,
  CardTextWrapper,
  CardText,
} from "./Section1Elements";
import { ChakraProvider, extendTheme, SimpleGrid, Box } from "@chakra-ui/react";
import { breakpoints } from "../../../Core-UI/Theme";
import { Data1 } from "../../../Helpers/Cards";

const Section1 = () => {
  const theme = extendTheme({ breakpoints });
  return (
    <ChakraProvider theme={theme}>
      <Section1GridWrapper>
        <SimpleGrid spacing="20px" minChildWidth="180px">
            {Data1.map((myData2) => {
                return (
                    <Box key={myData2.id} >
                    <Section1BoxWrapper>
                        <CardItemWrapper>
                            <CardIconWrapper>
                                <CardIcon alt={myData2.alt} src={myData2.img} />
                            </CardIconWrapper>
                            <CardTextWrapper>
                                <CardText>{myData2.text}</CardText>
                            </CardTextWrapper>
                        </CardItemWrapper>
                    </Section1BoxWrapper>
                  </Box>
                )
            })}
          
        </SimpleGrid>
      </Section1GridWrapper>
    </ChakraProvider>
  );
};

export default Section1;
