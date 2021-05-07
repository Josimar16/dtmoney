import { useTransaction } from "../../hooks/useTransactions";
import { Container } from "./styles";
import { formatAmountToCurrencyPTBR, formatDateToPTBR } from "../../utils";

export const TransactionTable = () => {
  const { transactions } = useTransaction();

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
            <tr key={transition.id}>
              <td>{transition.title}</td>
              <td className={transition.type}>{formatAmountToCurrencyPTBR(transition.amount)}</td>
              <td>{transition.category}</td>
              <td>{formatDateToPTBR(transition.createdAt)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}