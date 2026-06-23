"use client";

import { useEffect, useState,}from "react";

import { getTransactions,}from "@/services/adminApi";
import { Spinner } from "@heroui/react";

const TransactionsPage = () => {

    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadData = async () => {

          const data = await getTransactions();

          setTransactions(data);
          setLoading(false);
        };

      loadData();

    }, []);

    if (loading) {
      return (
        <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-xs text-muted">Loading...</span>
        </div>
      );
    }

    return (

      <div className="space-y-8">
        <div>
          <h1
            className="
            text-4xl
            font-bold
            "
          >
            Transactions
          </h1>

          <p
            className="
            text-gray-500
            mt-2
            "
          >
            All platform payments
          </p>

        </div>

        <div
          className="
          bg-white
          rounded-3xl
          border
          overflow-hidden
          shadow-sm
          "
        >

          {
            transactions.length === 0 && (

              <div
                className="
                p-12
                text-center
                "
              >
                No Transactions Found
              </div>

            )
          }

          {
            transactions.length > 0 && (
              <div className="overflow-x-auto">

                <table
                  className="
                  w-full
                  "
                >

                  <thead
                    className="
                    bg-slate-100
                    "
                  >

                    <tr>

                      <th className="p-5 text-left">
                        Transaction ID
                      </th>

                      <th className="p-5">
                        User
                      </th>

                      <th className="p-5">
                        Librarian
                      </th>

                      <th className="p-5">
                        Amount
                      </th>

                      <th className="p-5">
                        Date
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {
                      transactions.map((transaction) => (
                          <tr
                            key={transaction._id}
                            className="
                            border-t
                            "
                          >

                            <td
                              className="
                              p-5
                              "
                            >
                              <div
                                className="
                                max-w-62
                                truncate
                                "
                              >
                                {transaction.transactionId}
                              </div>
                            </td>

                            <td
                              className="
                              text-center
                              "
                            >
                              {transaction.userEmail}
                            </td>

                            <td
                              className="
                              text-center
                              "
                            >
                              {transaction.librarianEmail}
                            </td>

                            <td
                              className="
                              text-center
                              font-semibold
                              "
                            >
                              $
                              {transaction.amount}
                            </td>

                            <td
                              className="
                              text-center
                              "
                            >
                              {
                                new Date(transaction.date).toLocaleDateString()
                              }
                            </td>

                          </tr>
                        )
                      )
                    }

                  </tbody>
                </table>
              </div>
            )
          }

        </div>
      </div>

    );
};

export default TransactionsPage;