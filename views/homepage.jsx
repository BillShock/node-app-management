import React from "react";
import Layout from "./layout";

class HomePage extends React.Component {
    render() {
      return(
        <Layout title="Il mio sito">
                <div>Home Page</div>
        </Layout>
      );
    }
}

module.exports = HomePage;