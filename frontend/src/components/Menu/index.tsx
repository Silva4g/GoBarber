import React from 'react';

import {
  BiDollarCircle,
  BiTachometer,
  BiCommentDetail,
  BiTrendingUp,
} from 'react-icons/bi';
import { FaRegListAlt, FaMotorcycle, FaFireAlt } from 'react-icons/fa';
import { GoMegaphone, GoGear } from 'react-icons/go';

import { Container, List, Item } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <h1>Logo</h1>
      <button type="button">
        <BiDollarCircle size={24} />
        <span>Anunciar</span>
      </button>
      <List>
        <Item>
          <BiTachometer size={24} />
          <span>Dashboard</span>
        </Item>
        <Item>
          <BiCommentDetail size={24} />
          <span>Propostas</span>
          <div>3</div>
        </Item>
        <Item>
          <GoMegaphone size={24} />
          <span>Anúncios</span>
        </Item>
        <Item>
          <FaMotorcycle size={24} />
          <span>Estoque</span>
        </Item>
        <Item>
          <BiTrendingUp size={24} />
          <span>Relatórios</span>
        </Item>
        <Item>
          <FaRegListAlt size={24} />
          <span>Planos/Produtos</span>
        </Item>
        <Item>
          <FaFireAlt size={24} />
          <span>Nitro</span>
        </Item>
        <Item>
          <GoGear size={24} />
          <span>Minha Conta</span>
        </Item>
      </List>
    </Container>
  );
};

export default Menu;
