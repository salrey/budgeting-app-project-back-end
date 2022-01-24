////////HELPER FUNCTIONS/////////

const filteredTransactions = (requestQuery, transaction, test) => {
    for (let query in requestQuery) {
      const input = requestQuery[query];
      if (transaction[query] === input) {
        test = true;
      } else {
        test = false;
        break;
      }
    }
    return test;
    // http://localhost:3000/transactions?order=&=type=
  };
  
  const sort = (transactions, selection) => {
    if (selection === "asc") {
        return transactions.sort((a,b) => {
          console.log(a.date)
            return Date.parse(a.date)-Date.parse(b.date)
        })
    } else {
        return transactions.sort((a,b) => {
            return Date.parse(b.date)-Date.parse(a.date)
        })
    }
  };
  
  const isValid = (transaction) => {
    if (
      typeof transaction.title === "string" &&
      typeof transaction.from === "string" &&
      typeof transaction.category === "string" &&
      typeof transaction.type === "string" &&
      typeof transaction.date === "string" &&
      //w/o input-date tag !isNaN(new Date(transaction.date)) &&
      !isNaN(Number(transaction.amount))
    ) {
      return true;
    }
    return false;
  };

  
  module.exports = {
    filteredTransactions,
    sort,
    isValid,
  };
  