import React, { Component } from "react";
import "./../Styles/HomeCard.css";
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia";
import { CardContent, CardActionArea } from "@material-ui/core";
import codeImage from "./../code.png"

class HomeCard extends Component {
  render() {
    return (
      <div className="cardFlex">
        <Card id="card">
          <CardActionArea>
            <CardMedia id="cardMedia" image= {codeImage} title="code" />
            <CardContent>This is the title</CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default HomeCard;
