import React from "react";

interface Deal {
  _id: string;
  sellAmount: number;
  sellCurrency: {
    icon: string;
    name: string;
    code: string;
  };
  receiveAmount: number;
  receiveCurrency: {
    icon: string;
    name: string;
    code: string;
  };
  exchangeRate: number;
  serviceFee: number;
  networkFee: number;
  status: string;
  createdAt: string;
}

export default async function page() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  let deals = [];

  try {
    const response = await fetch(`${baseUrl}/orders`, { method: "GET" });

    if (!response.ok) {
      console.error(
        `Error fetching orders: ${response.status} ${response.statusText}`
      );
    } else {
      deals = await response.json();
    }
  } catch (error) {
    console.error("Error fetching orders:", error);
  }

  return (
    <div className="container mx-auto px-5 sm:px-20 py-10">
      <h1 className="text-2xl font-bold mb-5">Deals</h1>
      {deals.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Deal ID</th>
                <th className="py-2 px-4 border-b">Sell Amount</th>
                <th className="py-2 px-4 border-b">Sell Currency</th>
                <th className="py-2 px-4 border-b">Receive Amount</th>
                <th className="py-2 px-4 border-b">Receive Currency</th>
                <th className="py-2 px-4 border-b">Exchange Rate</th>
                <th className="py-2 px-4 border-b">Service Fee</th>
                <th className="py-2 px-4 border-b">Network Fee</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Created At</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal: Deal) => (
                <tr key={deal._id} className="text-center">
                  <td className="py-2 px-4 border-b">{deal._id}</td>
                  <td className="py-2 px-4 border-b">{deal.sellAmount}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={deal.sellCurrency.icon}
                        alt={deal.sellCurrency.name}
                        className="w-5 h-5"
                      />
                      {deal.sellCurrency.code}
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">{deal.receiveAmount}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={deal.receiveCurrency.icon}
                        alt={deal.receiveCurrency.name}
                        className="w-5 h-5"
                      />
                      {deal.receiveCurrency.code}
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">{deal.exchangeRate}</td>
                  <td className="py-2 px-4 border-b">{deal.serviceFee}</td>
                  <td className="py-2 px-4 border-b">{deal.networkFee}</td>
                  <td className="py-2 px-4 border-b">{deal.status}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(deal.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No deals available.</p>
      )}
    </div>
  );
}
