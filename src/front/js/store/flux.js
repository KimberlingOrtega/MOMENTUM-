const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      is_admin: null,
      token: null,
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
          localStorage.setItem("is_admin", body.is_admin);
          setStore({ token: body.access_token });
          setStore({ is_admin: body.is_admin });
          return true;
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
    },
  };
};

export default getState;
