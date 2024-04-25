import React from "react";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

const Admin = () => {
  const { data, error, isLoading } = useGetAccountQuery();
  const [addAccount, addResponse] = useAddAccountMutation();
  const [deleteAccount, deleteResponse] = useDeleteAccountMutation();
  const [updateAccount, updateReponse] = useUpdateAccountMutation();

  const handleDeleteAccount = (accountId) => {
    deleteAccount(accountId); // Call the deleteAccount mutation with the accountId to delete
  };
  const handleUpdateAccount = (id, amount) => {
    console.log("od",id)
    // Perform your validation here before calling the updateAccount mutation
    if (typeof amount !== "number" || amount <= 0) {
      alert("Invalid amount. Amount must be a positive number.");
      return;
    }

    updateAccount(id, amount); // Call the updateAccount mutation with the accountId and amount
  };

  return (
    <div>
      <div>
        <h4>Admin components</h4>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <h3>
          Total points:
          {data &&
            Array.isArray(data) &&
            data.map((item, index) => (
              <div key={index}>
                <div>
                  <p>{index}</p>
                  <p>{item.amount}</p>
                </div>
                <button onClick={() => handleDeleteAccount(item.id)}>
                  Delete Account
                </button>
                <button onClick={() => updateAccount({id:item.id, amount:999})}>
                  Update Account
                </button>
              </div>
            ))}
          <button
            onClick={() => addAccount(2000, data ? data.length + 1 : 1)}
            style={{ marginTop: "20px" }}
          >
            Add Account
          </button>
        </h3>
      </div>
    </div>
  );
};

export default Admin;
