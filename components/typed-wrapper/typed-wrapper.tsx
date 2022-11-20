import React from "react";
import Typed from "typed.js";
import { fontTypes } from "../theme";

interface TypedWrapperProps {
  strings: Array<string>;
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
}

class TypedWrapper extends React.Component<TypedWrapperProps> {
  typed: Typed | undefined = undefined;
  el: HTMLSpanElement | null = null;

  componentDidMount() {
    const { strings, typeSpeed, backSpeed, loop } = this.props;
    const options = {
      strings: strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      loop: loop,
    };

    this.typed = new Typed(this.el as Element, options);
  }

  componentWillUnmount() {
    this.typed?.destroy();
  }

  render() {
    return (
      <span
        style={{
          whiteSpace: "pre",
          fontFamily: fontTypes.welcomeTextFontType,
          fontStyle: "normal",
          fontWeight: 200,
          fontSize: "1rem",
        }}
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}

export default TypedWrapper;
