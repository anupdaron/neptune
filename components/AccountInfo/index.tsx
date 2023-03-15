import React from "react";

interface AccountInfoProps {
  account: string | null;
  balance: string | null;
  chainId: number | null;
}

const AccountInfo: React.FC<AccountInfoProps> = ({
  account,
  balance,
  chainId,
}) => {
  return (
    <div className="flex flex-col border rounded-lg overflow-hidden my-5 px-2">
      <table className="table-auto">
        <tbody>
          <tr>
            <td className="font-medium text-gray-600 pr-4 py-2">Account:</td>
            <td className="text-gray-900 py-2">{account}</td>
          </tr>
          <tr>
            <td className="font-medium text-gray-600 pr-4 py-2">Balance:</td>
            <td className="text-gray-900 py-2">{balance}</td>
          </tr>
          <tr>
            <td className="font-medium text-gray-600 pr-4 py-2">ChainId:</td>
            <td className="text-gray-900 py-2">{chainId}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountInfo;
