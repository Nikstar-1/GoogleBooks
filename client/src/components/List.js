import React from "react";

export const List = ({ children }) => {
  return <ul className="list-group list-group-flush">{children}</ul>;
};

export function CardListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
