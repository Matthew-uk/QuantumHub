import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
  color: #cc3904;
  span {
    color: #fff;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            Quantum<span>Hub</span>
          </Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

// import Link from "next/link";
// import styled from "styled-components";
// import Center from "@/components/Center";
// import { useContext, useState } from "react";
// import { CartContext } from "@/components/CartContext";
// import BarsIcon from "@/components/icons/Bars";
// import { useUser } from "@/store/store";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookies";
// import { CiHome } from "react-icons/ci";
// import { RiTeamLine } from "react-icons/ri";
// import { FiSend } from "react-icons/fi";
// import { BiSupport } from "react-icons/bi";

// const StyledHeader = styled.header`
//   background-color: #0d1119;
//   z-index: 5;
// `;
// const Logo = styled(Link)`
//   color: #fff;
//   text-decoration: none;
//   position: relative;
//   z-index: 5;
//   margin-top: 0.5em;
// `;
// const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 20px 0;
// `;
// const StyledNav = styled.nav`
//   ${(props) =>
//     props.mobileNavActive
//       ? `
//     display: block;
//   `
//       : `
//     display: none;
//   `}
//   gap: 15px;
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   padding: 70px 20px 20px;
//   background-color: #0d1119;
//   z-index: 3;
//   @media screen and (min-width: 800px) {
//     display: flex;
//     position: static;
//     padding: 0;
//   }
// `;
// const NavLink = styled(Link)`
//   display: block;
//   color: #aaa;
//   text-decoration: none;
//   padding: 10px 0;
//   color: #fff;
//   @media screen and (min-width: 800px) {
//     padding: 0;
//   }
// `;
// const NavButton = styled.button`
//   background-color: transparent;
//   width: 35px;
//   height: 35px;
//   border: 0;
//   color: white;
//   cursor: pointer;
//   position: relative;
//   z-index: 3;
//   @media screen and (min-width: 800px) {
//     display: none;
//   }
// `;

// const LogoutBtn = styled.button`
//   background: transparent;
//   /* width: 30px;
//   height: 30px; */
//   border: 1px solid #078ea6;
//   color: #fff;
//   padding: 10px;
//   cursor: pointer;
//   margin-top: -0.5em;
//   transition: all 0.25s ease-in-out;
//   :hover {
//     background: #078ea6;
//   }
//   @media screen and (max-width: 800px) {
//     margin-top: 0.5em !important;
//   }
// `;

// export default function Header() {
//   const router = useRouter();
//   const { cartProducts } = useContext(CartContext);
//   const [mobileNavActive, setMobileNavActive] = useState(false);
//   const { name } = useUser();
//   const handleLogout = () => {
//     Cookies.removeItem("token");
//     router.push("/login");
//   };
//   return (
//     <StyledHeader>
//       <Center>
//         <Wrapper>
//           <Logo href={"/"}>OMAS</Logo>
//           <StyledNav mobileNavActive={mobileNavActive}>
//             <NavLink href={"/account"}>
//               <CiHome style={{ marginRight: "0.5em" }} />
//               Home
//             </NavLink>
//             <NavLink href={"/team"}>
//               <RiTeamLine style={{ marginRight: "0.5em" }} />
//               Team
//             </NavLink>
//             <NavLink href={"/link"}>
//               <FiSend style={{ marginRight: "0.5em" }} />
//               Link
//             </NavLink>
//             <NavLink href={"https://t.me/omasinc"}>
//               <BiSupport style={{ marginRight: "0.5em" }} />
//               Contact Us
//             </NavLink>
//             {/* <NavLink href={"/products"}>All products</NavLink>
//             <NavLink href={"/categories"}>Categories</NavLink>
//             <NavLink href={"/account"}>Account</NavLink>
//             <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink> */}
//             {/* <NavLink href={"/account"} style={{ color: "#fff" }}>
//               {name}
//             </NavLink> */}
//             <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
//           </StyledNav>
//           <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
//             <BarsIcon />
//           </NavButton>
//         </Wrapper>
//       </Center>
//     </StyledHeader>
//   );
// }
