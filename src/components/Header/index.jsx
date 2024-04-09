import logoFoodExplorer from "../../assets/logoFoodExplorer.svg";
import lista from "../../assets/piceOfPaper.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { SideNav } from "../SideNav";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

import { Container, Button, MobileButton } from "./styles";

export function Header({
  setPlate = () => {},
  setFavorite = () => {},
  favorite,
}) {
  const [orderLength, setOrderLength] = useState([]);
  const [search, setSearch] = useState("");

  const user = JSON.parse(localStorage.getItem("@rocketfood:user"));

  const navigate = useNavigate();
  const { signOut } = useAuth();

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates?title=${search}`);
      setPlate(response.data);
    }
    fetchPlate();
  }, [search]);

  useEffect(() => {
    async function fetchFavorite() {
      const response = await api.get(`/favorites/${user.id}?title=${search}`);
      setFavorite(response.data);
    }
    fetchFavorite();
  }, [search, favorite]);

  useEffect(() => {
    async function getOrderLength() {
      const response = await api.get(`/requests/${user.id}`);
      setOrderLength(response.data);
    }
    getOrderLength();
  }, [orderLength]);

  function logOut() {
    navigate("/");
    signOut();
  }

  function turnHomePage() {
    navigate("/");
  }

  function payment() {
    navigate("/Payment");
  }

  // MOBILE

  const [sidenav, setSideNav] = useState(false);

  const showSideNav = () => setSideNav(!sidenav);

  useEffect(() => {
    const menu = document.querySelector(".menu");

    if (window.innerWidth < 832) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }

    if (window.innerWidth > 832) {
      setSideNav(false);
    }
  }, [window.innerWidth]);

  useEffect(() => {
    const menu = document.querySelector(".menu");

    if (sidenav === true) {
      menu.classList.add("formatSideNavMenu");
    } else {
      menu.classList.remove("formatSideNavMenu");
    }
  }, [sidenav]);

  return (
    <Container>
      <div className="wrapper_menu">
        <div className="menu hidden">
          {sidenav === true ? (
            <div className="sidenav">
              <GiCrossMark onClick={showSideNav} />
              <span>Menu</span>
            </div>
          ) : (
            <AiOutlineMenu onClick={showSideNav} />
          )}
          {sidenav && (
            <SideNav
              active={setSideNav}
              setSearch={setSearch}
              search={search}
            />
          )}
        </div>

        <button onClick={turnHomePage}>
          <img src={logoFoodExplorer} alt="logo" />
        </button>
      </div>

      <div className="wrapper_input">
        <Input
          icon={FiSearch}
          placeholder="Já conhece o cardápio? Busque aqui!"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="wrapper_favorites_historic">
        <Link to={"/Favorites"}>
          <h2>Meus Favoritos</h2>
        </Link>

        <Link to="/OrderHistory">
          <h2>Histórico de pedido</h2>
        </Link>
      </div>

      <div className={sidenav === true ? "hidden" : ""}>
        {window.innerWidth < 1060 ? (
          <MobileButton onClick={payment}>
            <img src={lista} alt="lista" />
            <span>{orderLength.length ?? 0}</span>
          </MobileButton>
        ) : (
          <Button onClick={payment}>
            <img src={lista} alt="lista" />
            <span>Meu pedido ({orderLength.length ?? 0})</span>
          </Button>
        )}
      </div>

      <button onClick={logOut} className="logOut">
        <FiLogOut />
      </button>
    </Container>
  );
}
