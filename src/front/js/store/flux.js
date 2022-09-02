import { sweetNotification } from "../utils/sweetnotification";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      is_admin: null,
      token: null,
      userData: null,
      allWorks: null,
    },
    actions: {
      userLogin: async (data) => {
        let response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          let body = await response.json();
          localStorage.setItem("token", body.access_token);
          localStorage.setItem("is_admin", JSON.stringify(body.is_admin));
          setStore({ token: body.access_token });
          setStore({ is_admin: body.is_admin });
          return true;
        } else if (response.status == 401) {
          sweetNotification("error", "Correo y/o contraseña inválida");
          return false;
        }
        return false;
      },
      logOut: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("is_admin");
        setStore({ token: null });
        setStore({ is_admin: null });
        return true;
      },
      requestQuotation: async (data) => {
        let response = await fetch(
          `${process.env.BACKEND_URL}/api/cotizacion`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (response.ok) {
          let body = await response.json();
          console.log(body);
          return true;
        }
        return false;
      },
      getUserData: async () => {
        let response = await fetch(
          `${process.env.BACKEND_URL}/api/obtener-datos-usuario`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.ok) {
          let body = await response.json();
          setStore({ userData: body.result });
          return true;
        }
        return false;
      },
      updateUserData: async (data) => {
        let response = await fetch(
          `${process.env.BACKEND_URL}/api/actualizar-datos-usuario`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(data),
          }
        );
        if (response.ok) {
          sweetNotification("success", "Los datos han sido actualizados");
          return true;
        } else if (response.status == 500) {
          sweetNotification(
            "error",
            "Ha ocurrido un error en el servidor. Intente más tarde."
          );
          return false;
        }
        return false;
      },
      changePassword: async (data) => {
        let response = await fetch(
          `${process.env.BACKEND_URL}/api/cambiar-contrasena`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(data),
          }
        );
        if (response.ok) {
          let body = await response.json();
          sweetNotification("success", body.message);
          return true;
        } else if (response.status == 500) {
          let body = await response.json();
          sweetNotification("error", body.message);
          return false;
        } else if (response.status == 401) {
          let body = await response.json();
          sweetNotification("error", body.message);
          return false;
        }
        return false;
      },
      registerNewClient: async (data) => {
        let response = await fetch(`${process.env.BACKEND_URL}/api/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          let body = await response.json();
          sweetNotification("success", body.message);
          return true;
        } else if (response.status == 500) {
          let body = await response.json();
          sweetNotification("error", body.message);
          return false;
        }
      },
      registerNewWork: async (data) => {
        let response = await fetch(
          `${process.env.BACKEND_URL}/api/trabajos-realizados`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (response.ok) {
          let body = await response.json();
          sweetNotification("success", body.message);
          return true;
        } else if (response.status == 500) {
          let body = await response.json();
          sweetNotification("error", body.message);
          return false;
        }
      },
      getAllWorks: async () => {
        let response = await fetch(
          `${process.env.BACKEND_URL}/api/trabajos-realizados`
        );
        if (response.ok) {
          let body = await response.json();
          setStore({ allWorks: body.results });
          return true;
        }
        return false;
      },
      persistData: () => {
        let token = localStorage.getItem("token");
        let is_admin = JSON.parse(localStorage.getItem("is_admin"));
        console.log(token, is_admin);
        setStore({ token: token });
        setStore({ is_admin: is_admin });
      },
    },
  };
};

export default getState;
