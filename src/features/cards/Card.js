import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCardById, flipCard } from "./cardsSlice";

export default function Card({ id }) {
  const card = useSelector((state) => selectCardById(state, id));
  const dispatch = useDispatch();

  if (!card) return <div>Card not found</div>;

  return (
    <div
      className={`card ${card.flipped ? "flipped" : ""}`}
      onClick={() => dispatch(flipCard(card.id))}
    >
      <div className="card-inner">
        <div className="card-front">
          {card.front}
        </div>
        <div className="card-back">
          {card.back}
        </div>
      </div>
    </div>
  );
}
