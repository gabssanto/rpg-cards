import React, { useState } from "react";
import { v4 } from 'uuid';
import { Card, AddPlayer, Container, TextInput, TextInputWrapper } from "./styles";
// Fichas de cada player, um dadbotao pra adicionar uma nova ficha

type Card = {
  id: string;
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
  };
};

const INITIAL_STATE: Card = {
  id: '',
  name: "",
  history: "",
  race: "",
  class: "",
  religion: "",
  attributes: {
    health: 0,
    strength: 0,
    faith: 0,
    vitality: 0,
    agility: 0,
    intelligence: 0,
    luck: 0,
  },
};

const Cards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setCards(
      cards.map((card, i) =>
        i === index
          ? {
              ...card,
              [name]: value,
            }
          : card
      )
    );
  };

  const textInput = (cardkeys, index) => {
    return cardkeys.map((key, i) => key !== 'id' && (
      <TextInputWrapper type="orange">
      {key}
      <TextInput
        key={i}
        type="text"
        name={key}
        value={cards[index][key]}
        onChange={(e) => handleChange(e, index)}
      />
      </TextInputWrapper>
    ))
  }

  return (
    <Container>
      <AddPlayer onClick={() => setCards([...cards, {...INITIAL_STATE, id: v4() }])}>
        Criar nova Ficha
      </AddPlayer>
      {cards?.map((card, index) => {
        const cardKeys = Object.keys(card);
        return (
          <Card key={card.id}>
            {textInput(cardKeys, index)}
            <button>Salvar</button>
          </Card>
        )
      })}
    </Container>
  );
};

export default Cards;
