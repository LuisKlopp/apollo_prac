import React from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit })
  }
`;

const Mutation = () => {
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: 'hotdog',
        quantityPerUnit: 4,
      },
    }
  );
  return (
    <div>
      <button onClick={() => createProduct()}></button>
    </div>
  );
};
