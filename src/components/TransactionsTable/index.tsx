import { useEffect, useMemo, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export const TransactionTable = () => {
  const [transactions, setTransaction] = useState<Transaction[]>();

  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => setTransaction(response.data.transactions));
  }, []);

  function formatAmountToCurrencyPTBR(amount: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount)
  }

  function formatDateToPTBR(date: string): string {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
  }

  const formatTransaction = useMemo(() => {
    return transactions?.map(transition => {
      return {
        id: transition.id,
        title: transition.title,
        amount: formatAmountToCurrencyPTBR(transition.amount),
        type: transition.type,
        category: transition.category,
        createdAt: formatDateToPTBR(transition.createdAt),
      }
    });
  }, [transactions]);

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
          {transactions && formatTransaction?.map(transition =>
            <tr key={transition.id}>
              <td>{transition.title}</td>
              <td className={transition.type}>{transition.amount}</td>
              <td>{transition.category}</td>
              <td>{transition.createdAt}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}