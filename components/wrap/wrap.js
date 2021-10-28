import { Form } from "../form/form";
import { Preview } from "../preview/preview";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { useState, useEffect } from "react";

export const Wrap = () => {
  const [personal, setPersonal] = useState(
    JSON.parse(localStorage.getItem("personal")) || []
  );
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  useEffect(() => {
    const i = localStorage.getItem("data");
    console.log(i);
    console.log(typeof i);
  });
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route
            exact
            path="/form"
            render={(props) => (
              <Form
                {...props}
                data={data}
                setData={setData}
                personal={personal}
                setPersonal={setPersonal}
              />
            )}
          />
          <Route
            exact
            path="/preview"
            render={(props) => (
              <Preview {...props} data={data} personal={personal} />
            )}
          />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
};
