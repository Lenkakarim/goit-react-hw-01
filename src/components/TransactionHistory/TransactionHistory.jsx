import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.title}>Type</th>
          <th className={style.title}>Amount</th>
          <th className={style.title}>Currency</th>
        </tr>
      </thead>

      <tbody className={style.body}>
        {transactions.map((transaction) => (
          <tr className={style.item} key={transaction.id}>
            <td className={style.text}>
              {transaction.type}
            </td>
            <td className={style.text}>
              {transaction.amount}
            </td>
            <td className={style.text}>
              {transaction.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
