import React from "react";
import quotes from "../data/quotes-data";
import utils from "../styles/utils.module.scss";

function QuoteItem({ quote, classNames }) {
  return (
    <li>
      <p className={classNames}>{quote}</p>
    </li>
  );
}

export default function Quotes() {
  return (
    <ul className={utils.quotesList}>
      {quotes.map((item, id) => (
        <QuoteItem {...item} key={id} />
      ))}
    </ul>
  );
}
