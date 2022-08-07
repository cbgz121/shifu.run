import React from "react";
import Layout from "@theme/Layout";
import HomepageCards from "../components/Homepage/cards";
import styles from "./styles.module.scss";
import { FirstPart, SecondPart, ThirdPart } from "../components/Homepage/parts";
// import Sponsor from "../components/Homepage/sponsor";

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <FirstPart> </FirstPart>
      <SecondPart></SecondPart>
      <ThirdPart></ThirdPart>
    </Layout>
  );
}
