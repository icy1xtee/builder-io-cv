import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { routes } from "@/constants/routes";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => navigate(routes.mainPage), 2000);
    return () => clearTimeout(redirectTimeout);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          Ой! Такой страницы тут нет {":("}
        </p>
        <a
          href={routes.mainPage}
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default NotFound;
