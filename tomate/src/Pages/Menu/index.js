//import { useState, useEffect } from "react";
//import axios from "axios";
import { Card, Divider, Input, Button } from "antd";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      <Card>
        <Link to="/">
          <Button>
            <h2>Home</h2>
          </Button>
        </Link>
      </Card>
    </>
  );
}
