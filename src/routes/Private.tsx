/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, ReactNode } from "react";

import { AuthContext } from "../contexts/authContext";

import { Navigate } from "react-router-dom";

interface PrivateProps {
  children: ReactNode;
}

const Private = ({ children }: PrivateProps): any => {
  const { signed, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );
  }

  if (!signed) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default Private;
