import React, { Component } from "react";
import QuoteCard from "./QuoteCard";
import _get from "lodash/get";

class App extends Component {
  state = {
    filterBySimpsonOnly: false,
    quoteList: [
      {
        quote:
          "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
        character: "Lisa Simpson",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
        characterDirection: "Right"
      },
      {
        quote:
          "I live in a single room above a bowling alley...and below another bowling alley.",
        character: "Frank Grimes",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887",
        characterDirection: "Left"
      },
      {
        quote: "Ahh! Sweet liquor eases the pain.",
        character: "Troy McClure",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
        characterDirection: "Right"
      },
      {
        quote:
          "Shoplifting is a victimless crime, like punching someone in the dark.",
        character: "Nelson Muntz",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
        characterDirection: "Left"
      },
      {
        quote:
          "You're turning me into a criminal when all I want to be is a petty thug.",
        character: "Bart Simpson",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
        characterDirection: "Right"
      },
      {
        quote: "But my mom says I'm cool.",
        character: "Milhouse Van Houten",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
        characterDirection: "Right"
      },
      {
        quote:
          'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
        character: "Homer Simpson",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        characterDirection: "Right"
      },
      {
        quote: "Nothing you say can upset us. We're the MTV generation.",
        character: "Bart Simpson",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
        characterDirection: "Right"
      },
      {
        quote: "Oh, so they have Internet on computers now!",
        character: "Homer Simpson",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        characterDirection: "Right"
      },
      {
        quote: "Ahh! Sweet liquor eases the pain.",
        character: "Troy McClure",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
        characterDirection: "Right"
      }
    ]
  };

  toggleFilter = () => {
    this.setState({ filterBySimpsonOnly: !this.state.filterBySimpsonOnly });
  };

  render() {
    const { quoteList, filterBySimpsonOnly } = this.state;

    const filteredQuoteList = filterBySimpsonOnly
      ? quoteList.filter(quote =>
          _get(quote, "character", "").includes("Simpson")
        )
      : quoteList;

    return (
      <div>
        <button onClick={this.toggleFilter}>
          {filterBySimpsonOnly
            ? "Afficher seulement les simpsons"
            : "Afficher tout les personnages"}
        </button>
        {filteredQuoteList.map((quote, index) => (
          <QuoteCard {...quote} /> //ON PRENDRE CHAQUE VARIABLE DU OBJET
        ))}
      </div>
    );
  }
}

export default App;
