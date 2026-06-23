"use client";

import { useEffect, useState,}from "react";
import { useSession,}from "@/lib/auth-client";

import { getUserDeliveries,}from "@/services/deliveryApi";
import { Spinner } from "@heroui/react";

const DeliveryHistoryPage = () => {

    const { data: session,}= useSession();

    const [deliveries, setDeliveries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadData = async () => {

          if ( !session?.user?.email){
            return;
          }
          const data = await getUserDeliveries(session?.user?.email);

          setDeliveries(data);
          setLoading(false);
        };

      loadData();

    }, [session]);

    if (loading) {

      return (
        <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-xs text-muted">Success</span>
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
            Delivery History
          </h1>

          <p
            className="
            text-gray-500
            mt-2
            "
          >
            All your requested books
          </p>

        </div>

        <div
          className="
          bg-white
          rounded-3xl
          border
          shadow-sm
          overflow-hidden
          "
        >

          {deliveries.length === 0 ? (

            <div className=" p-12 text-center ">
              No Deliveries Yet
            </div>

          ) : (

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

                  <th
                    className="
                    p-5
                    text-left
                    "
                  >
                    Book
                  </th>

                  <th className="p-5">
                    Fee
                  </th>

                  <th className="p-5">
                    Date
                  </th>

                  <th className="p-5">
                    Status
                  </th>

                </tr>
              </thead>

              <tbody>
                {deliveries.map((delivery) => (

                    <tr
                      key={delivery._id}
                      className="
                      border-t
                      "
                    >

                      <td
                        className="
                        p-5
                        "
                      >
                        {
                          delivery.bookTitle
                        }
                      </td>

                      <td
                        className="
                        text-center
                        "
                      >
                        $
                        {delivery.deliveryFee}
                      </td>

                      <td
                        className="
                        text-center
                        "
                      >
                        {new Date(delivery.requestDate).toLocaleDateString()}
                      </td>

                      <td
                        className="
                        text-center
                        "
                      >

                        <span
                          className={`
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          ${
                            delivery.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : delivery.status === "Dispatched"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                          }
                          `}
                        >
                          {delivery.status}
                        </span>

                      </td>

                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
};

export default DeliveryHistoryPage;