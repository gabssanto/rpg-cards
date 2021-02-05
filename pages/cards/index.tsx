import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Card, AddPlayer, Container } from './styles';
// Fichas de cada player, um dadbotao pra adicionar uma nova ficha

type Card = {
  name: string;
  history: string;
  race: string;
  class: string;
  religion: string;
  attributes: {
    health: number;
    strength: number;
    faith: number;
    vitality: number;
    agility: number;
    intelligence: number;
    luck: number;
  }
}

const INITIAL_STATE: Card = {
  name: '',
  history: '',
  race: '',
  class: '',
  religion: '',
  attributes: {
    health: 0,
    strength: 0,
    faith: 0,
    vitality: 0,
    agility: 0,
    intelligence: 0,
    luck: 0,
  }
}

const Cards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  console.log(cards);
  return (
    <Container>
    <AddPlayer onClick={() => setCards([...cards, INITIAL_STATE])}>Criar nova Ficha</AddPlayer>
    {cards?.map((card) => (
      <Card key={v4()}>Card</Card>
    ))}
    </Container>
  );
}

export default Cards;