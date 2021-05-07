import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export const TransactionTable = () => {
  const [transactions, setTransaction] = useState<Transaction[]>();

  useEffect(() => {
    axios.get('http://localhost:3000/api/transactions')
      .then(response => setTransaction(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categória</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions && transactions.map(transition =>
            <tr>
              <td>{transition.title}</td>
              <td className={transition.type}>R${transition.amount}</td>
              <td>{transition.category}</td>
              <td>{transition.createdAt}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}