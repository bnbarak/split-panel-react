import React, { useState } from "react";
import styled from "styled-components";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

import Container from "../src/Container";

const AppContainer = styled.div`
  padding: 0;
  width: 100%;
`;

const Child = styled.div`
  text-align: center;
  height: 100%;
`;

const Json = styled(JSONPretty)`
  width: 400px;
  display: inline-block;
  padding: 5px;
  margin-bottom: 30px;
  vertical-align: top;
  min-height: 150px;

  .__json-pretty__ {
    padding: 5px;
  }
`;

const H3 = styled.h3`
  margin: 0;
`;

function App(props) {
  const [data, setData] = useState({ratio: 0});
  const onStart = () => console.log("start");
  const onFinish = () => console.log("finish");
  const onChange = details => setData(details);

  const { ratio } = data;
  return (
    <AppContainer className="App">
      <Json id="json-pretty" data={props} />
      <Json id="json-pretty" data={data} />
      <Container
        {...props}
        onStart={onStart}
        onFinish={onFinish}
        onChange={onChange}
      >
        <Child style={{ background: "#eee" }}>
          Left side %{ratio.toFixed(1)}
        </Child>
        <Child style={{ background: "#CFD8DC" }}>
          Right side %{100 - ratio.toFixed(1)}
        </Child>
      </Container>
    </AppContainer>
  );
}

export default App;
