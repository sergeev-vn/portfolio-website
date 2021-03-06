import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/preloader";
import "./scripts/parallax";
import "./scripts/scroll";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/feedback-form";
import "./scripts/reviews";
import "./scripts/sidebar";