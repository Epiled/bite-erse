import React from "react";
import style from './Menu.module.scss';
import shield from '../../assets/svg/ShieldCheck.svg';
import truck from '../../assets/svg/Truck.svg';
import creditCard from '../../assets/svg/CreditCard.svg';
import group from '../../assets/svg/Group.svg';
import heart from '../../assets/svg/Heart.svg';
import userCircle from '../../assets/svg/UserCircle.svg';
import shoppingCart from '../../assets/svg/ShoppingCart.svg';
import crownSimple from '../../assets/svg/CrownSimple.svg';
import logo from '../../assets/img/logo.png';


function Menu() {
  return (
    <header>
      <nav className={style.menu}>
        <div className={style.menu__top}>
          <span className={style.menu__topContainer}>
            <img src={shield}
              width="20px"
              height="20px"
              alt=""
            />
            Compra
            <span className={style.menu__destaque}> 100% segura</span>
          </span>
          <span className={style.menu__topContainer}>
            <img src={truck}
              width="20px"
              height="20px"
              alt=""
            />
            <span className={style.menu__destaque}>Frete grátis </span>
            acima de R$ 200
          </span>
          <span className={style.menu__topContainer}>
            <img src={creditCard}
              width="20px"
              height="20px"
              alt=""
            />
            <span className={style.menu__destaque}>Parcele </span>
            suas compras
          </span>
        </div>
        <div className={style.menu__mid}>
          <img className={style.menu__logo} src={logo} alt="" />

          <div className={style.menu__busca}>
            <input className={style.menu__ipt} placeholder="O que você está buscando?" type="search" name="" id="" />
          </div>

          <div className={style.menu__icons}>
            <img className={style.menu__iconLink}
              src={group}
              alt=""
            />
            <img className={style.menu__iconLink}
              src={heart}
              alt=""
            />
            <img className={style.menu__iconLink}
              src={userCircle}
              alt=""
            />
            <img className={style.menu__iconLink}
              src={shoppingCart}
              alt=""
            />
          </div>
        </div>
        <div className={style.menu__bot}>
          <a className={style.menu__link} href="#">Todas Categorias</a>
          <a className={style.menu__link} href="#">Supermercado</a>
          <a className={style.menu__link} href="#">Livros</a>
          <a className={style.menu__link} href="#">Moda</a>
          <a className={style.menu__link} href="#">Lançamentos</a>
          <a className={`${style.menu__link} ${style['menu__link--destaque']}`} href="#">Ofertas do dia</a>
          <a className={style.menu__link} href="#">
            <img
              src={crownSimple}
              alt=""
            />
            Assinatura
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Menu;