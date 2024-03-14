import React, { useState, useContext } from "react";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import {
  ChakraProvider,
  Center,
  Flex,
  extendTheme,
  Box,
} from "@chakra-ui/react";
import {
  MyLink,
  LinkIconWrapper,
  LinkIcon,
  LinkTextWrapper,
  LinkText,
} from "../Buttons/Buttons";
import { MyInput, InputIconWrapper } from "../Input";
import { Logo1 } from "../Logo/Logo";
import { colors } from "../../Core-UI/Theme";
import { breakpoints } from "../../Core-UI/Theme";
import MySignIn from "../../Assets/Svg/SigninIcon.svg";
import MySignUp from "../../Assets/Svg/SignupIcon.svg";
import MySearch from "../../Assets/Svg/SearchIcon.svg";
import MyMenu from "../../Assets/Svg/MenuIcon.svg";
import MyPurchase from "../../Assets/Svg/PurchaseIcon.svg";
import MyLogo1 from "../../Assets/Svg/Logo1.svg";
import MyHome from "../../Assets/Svg/HomeIcon.svg";
import { Data1 } from "../../Helpers/NavbarData";
import Category from "../CategoryMenu";
import { ShopContext } from "../../Context/shop-context";
//----------------------------------------------------------------------------------------

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const location = useLocation();
  const { getTotalItem, handleInputChange, query } = useContext(ShopContext);
  //---------------------------------------------
  if (
    location.pathname === "/admindashboard" ||
    location.pathname === "/userprofile"
  )
    return null;

  const theme = extendTheme({ breakpoints });

  const toggleHover = () => setHovered(true);
  const toggleHoverLeave = () => setHovered(false);

  return (
    <ChakraProvider theme={theme}>
      <Flex
        className="nav"
        justify="center"
        alignItems="center"
        flexDirection={{ sma1: "column", sma2: "row", sma3: "row", lap: "row" }}
        w="100%"
        h={{ sma2: "80px", sma3: "80px", lap: "80px" }}
        bg={colors.prime3}
        position="fixed"
        pl={{ sma1: "1.5rem", sma2: "2.5rem", sma3: "3.5rem", lap: "3rem" }}
        pr={{ sma1: "1.5rem", sma2: "2.5rem", sma3: "3.5rem", lap: "3rem" }}
      >
        <Flex
          w="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display={{
              base: "flex",
              sma1: "flex",
              sma2: "flex",
              sma3: "flex",
              lap: "none",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <LinkIcon alt={Data1.text10} src={MyMenu} />
          </Box>

          <Flex
            pt="7px"
            pb="7px"
            pr="5px"
            pl="16px"
            borderRadius="8px"
            h="52px"
            display={{
              base: "none",
              sma1: "none",
              sma2: "none",
              sma3: "none",
              lap: "flex",
            }}
            border="solid 2px"
            borderColor={colors.prime4}
          >
            <MyLink to="/signup" style={{ marginRight: "1.5rem" }}>
              <LinkTextWrapper>
                <LinkText>{Data1.text1}</LinkText>
              </LinkTextWrapper>
              <LinkIconWrapper>
                <LinkIcon alt={Data1.text6} src={MySignUp} />
              </LinkIconWrapper>
            </MyLink>
            <MyLink to="/signin">
              <LinkTextWrapper>
                <LinkText>{Data1.text2}</LinkText>
              </LinkTextWrapper>
              <LinkIconWrapper>
                <LinkIcon alt={Data1.text7} src={MySignIn} />
              </LinkIconWrapper>
            </MyLink>
          </Flex>

          <Flex
            borderRadius="8px"
            pt="7px"
            pb="7px"
            pr="5px"
            pl="16px"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            border="solid 2px"
            borderColor={colors.prime4}
            h="52px"
            display={{ sma1: "none", sma2: "flex", sma3: "flex", lap: "flex" }}
          >
            <MyInput
              placeholder="جستجوی محصول"
              value={query}
              onChange={handleInputChange}
            />

            <InputIconWrapper>
              <LinkIcon alt={Data1.text8} src={MySearch} />
            </InputIconWrapper>
          </Flex>

          <Flex
            pt="7px"
            pb="7px"
            pr="5px"
            pl="16px"
            border="solid 2px"
            borderColor={colors.prime4}
            borderRadius="8px"
            h="52px"
            display={{
              base: "none",
              sma1: "none",
              sma2: "none",
              sma3: "none",
              lap: "flex",
            }}
          >
            <MyLink to="/purchase" style={{ marginRight: "1.5rem" }}>
              <LinkTextWrapper>
                <LinkText>{Data1.text3}</LinkText>
              </LinkTextWrapper>
              <LinkIconWrapper>
                <LinkIcon alt={Data1.text9} src={MyPurchase} />
                {getTotalItem() > 0 ? (
                  <span className="my-shopping-number">{getTotalItem()}</span>
                ) : (
                  ""
                )}
              </LinkIconWrapper>
            </MyLink>
            <MyLink
              style={{ marginRight: "1.5rem" }}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHoverLeave}
            >
              <LinkTextWrapper>
                <LinkText>{Data1.text4}</LinkText>
              </LinkTextWrapper>
              <LinkIconWrapper>
                <LinkIcon alt={Data1.text10} src={MyMenu} />
              </LinkIconWrapper>
            </MyLink>
            {hovered && (
              <Category
                toggleHover={toggleHover}
                toggleHoverLeave={toggleHoverLeave}
              />
            )}

            <MyLink to="/">
              <LinkTextWrapper>
                <LinkText>{Data1.text5}</LinkText>
              </LinkTextWrapper>
              <LinkIconWrapper>
                <LinkIcon alt={Data1.text11} src={MyHome} />
              </LinkIconWrapper>
            </MyLink>
          </Flex>

          <Center>
            <Logo1 alt={Data1.text12} src={MyLogo1} />
          </Center>
        </Flex>

        <Box
          w="100%"
          display={{
            base: "none",
            sma1: "flex",
            sma2: "none",
            sma3: "none",
            lap: "none",
          }}
        >
          <Flex
            bg={colors.prime3}
            borderRadius="55px"
            p="6px"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            position="relative"
            h="52px"
            w="100%"
            mt="1rem"
            mb="0.5rem"
          >
            <MyInput />
            <InputIconWrapper>
              <LinkIcon alt={Data1.text8} src={MySearch} />
            </InputIconWrapper>
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
