import React, { useEffect, useState } from 'react';
interface Props {
  title: string;
}

interface CartContent {
  content: string;
}

const Cart = ({ title }: Props): JSX.Element => {
  const [content, setContent] = useState<CartContent>({
    content: 'someContent',
  });
  return (
    <React.Fragment>
      <p>{content}</p>
      {title}
    </React.Fragment>
  );
};
export default Cart;
