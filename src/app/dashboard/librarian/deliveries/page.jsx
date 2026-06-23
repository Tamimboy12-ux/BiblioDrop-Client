"use client";

import { useEffect, useState,}from "react";
import { useSession,}from "@/lib/auth-client";

import { getLibrarianDeliveries, updateDeliveryStatus,}from "@/services/deliveryApi";
import { Spinner } from "@heroui/react";

const DeliveriesPage = () => {

    const { data: session,}= useSession();
    const [deliveries, setDeliveries] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        const data = await getLibrarianDeliveries(session?.user?.email);

        setDeliveries(data);
        setLoading(false);
      };

    useEffect(() => {
      if (session?.user?.email){
        loadData();
      }

    }, [session]);


    const handleUpdate = async ( id, currentStatus)=> {
        let nextStatus = currentStatus;

        if ( currentStatus === "Pending"){
          nextStatus = "Dispatched";
        }
        else if ( currentStatus === "Dispatched"){
          nextStatus = "Delivered";
        }

        await updateDeliveryStatus( id, nextStatus);
        loadData();
      };

    if (loading) {
      return (
        <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-xs text-muted">Loading...</span>
        </div>
      );
    }

    return (

      <div
        className="
        space-y-8
        "
      >
        <div>

          <h1 className=" text-4xl font-bold ">
            Manage Deliveries
          </h1>

          <p className=" text-gray-500 mt-2 ">
            Update delivery status
          </p>

        </div>

        <div className=" bg-white rounded-3xl border shadow-sm overflow-hidden ">
          {deliveries.length === 0 ? (

            <div className=" p-12 text-center ">
              No Deliveries Found
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
                  <th className="p-5">
                    Client
                  </th>

                  <th className="p-5">
                    Book
                  </th>

                  <th className="p-5">
                    Fee
                  </th>

                  <th className="p-5">
                    Status
                  </th>

                  <th className="p-5">
                    Action
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
                        text-center
                        p-5
                        "
                      >
                        {
                          delivery.userName
                        }
                      </td>

                      <td
                        className="
                        text-center
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
                        ৳
                        {
                          delivery.deliveryFee
                        }
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
                          {
                            delivery.status
                          }
                        </span>

                      </td>

                      <td
                        className="
                        text-center
                        "
                      >

                        {delivery.status !==
                          "Delivered" && (

                          <button
                            onClick={() =>
                              handleUpdate( delivery._id, delivery.status)
                            }
                            className="
                            bg-indigo-600
                            text-white
                            px-4
                            py-2
                            rounded-xl
                            "
                          >

                            {delivery.status === "Pending"
                              ? "Dispatch"
                              : "Deliver"}

                          </button>

                        )}

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

export default DeliveriesPage;